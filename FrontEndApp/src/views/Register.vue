<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";
import InputLabel from "@/components/form/InputLabel.vue";
import TextInput from "@/components/form/TextInput.vue";
import SubmitButton from "@/components/form/SubmitButton.vue";

import { useDataStore } from "@/store";
import { useForm } from "vee-validate";
import * as yup from "yup";
import {useRouter} from "vue-router";
import {ref} from "vue";

type RegisterForm = {
  email: string,
  password: string,
  confirmPassword: string,
};

const router = useRouter();
const store = useDataStore();
const { errors, isSubmitting, handleSubmit, resetForm, defineComponentBinds, meta } = useForm<RegisterForm>({
  validationSchema: yup.object({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(8).label("Password"),
    confirmPassword:
      yup.string()
         .required()
         .min(8)
         .oneOf([yup.ref("password")], "Confirm password must match")
         .label("Confirm password"),
  }),
})

const email = defineComponentBinds("email");
const password = defineComponentBinds("password");
const confirmPassword = defineComponentBinds("confirmPassword");
const error = ref("");

const register = handleSubmit(values => {
  return new Promise(resolve => {
    const payload = {
      email: values.email,
      password: values.password,
      // laravel moment
      password_confirmation: values.confirmPassword,
    }

    store.registerUser(payload)
      .then(() => {
        router.push({ name: "Login" });
        resolve(true);
      })
      .catch((err) => {
        console.log(err);
        resetForm({
          values: {
            email: values.email,
            password: "",
            confirmPassword: "",
          },
        })
        error.value = err.response.data.message;
        resolve(false);
      });
  });
});
</script>

<template>
  <div class="register-wrapper">
    <img src="" alt="">
    <div class="register-form">
      <div class="register-form-title">Register</div>
      <InputError class="mb-1" :error="error" :show="!meta.touched" />
      <form @submit="register">
        <div class="register-email-group">
          <InputLabel id="email">Email Address</InputLabel>
          <TextInput id="email" v-bind="email" />

          <InputError :error="errors.email" />
        </div>

        <div class="register-password-group">
          <InputLabel id="password">New password</InputLabel>
          <TextInput id="password" type="password" v-bind="password" />

          <InputError :error="errors.password" />
        </div>

        <div class="register-password-group">
          <InputLabel id="confirm-password">Confirm password</InputLabel>
          <TextInput id="confirm-password" type="password" v-bind="confirmPassword" />

          <InputError :error="errors.confirmPassword" />
        </div>

        <div class="register-form-policy">
          Policy stuff
        </div>

        <SubmitButton
          type="submit"
          :isSub="isSubmitting && meta.valid"
          :disabled="!meta.valid && (meta.dirty || meta.touched)"
        >
          Register
        </SubmitButton>
      </form>
    </div>
    <div class="register-footer">
      Already have an account? <router-link :to="{ name: 'Login' }">Login to DET-form</router-link>
    </div>
  </div>
</template>

<style scoped>
.register-form-title {
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  padding-bottom: 1rem;
  color: #12151a;
}

.register-form {
  box-sizing: border-box;
  margin-top: 2.5rem;
  width: 21rem;
  min-height: 21.6875rem;
  padding: 1rem 1.5rem 1.4rem;
  border-radius: 0.25rem;
  border: 1px solid #12151a;
}

.register-email-group,
.register-password-group {
  display: flex;
  flex-direction: column;
}

.register-password-group {
  margin-top: 1rem;
}

.register-form-policy {
  margin-top: 1rem;
  font-size: 12px;
  color: #12151a;
  font-weight: 400;
}

.register-footer {
  margin-top: 1.125rem;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
}

.register-footer a {
  color: #12151a;
  font-weight: 400;
  text-decoration: none;
  border-bottom: #12151a 1px solid;
}
</style>
