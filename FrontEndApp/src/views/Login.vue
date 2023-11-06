<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";
import InputLabel from "@/components/form/InputLabel.vue";
import TextInput from "@/components/form/TextInput.vue";
import SubmitButton from "@/components/form/SubmitButton.vue";

import { useDataStore } from "@/store";
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useRouter } from "vue-router";
import {Ref, ref} from "vue";

type loginForm = {
  email: string,
  password: string,
};

const router = useRouter();
const store = useDataStore();
const { errors, isSubmitting, handleSubmit, resetForm, defineComponentBinds, meta } = useForm<loginForm>({
  validationSchema: yup.object({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(8).label("Password"),
  }),
})

const email = defineComponentBinds("email");
const password = defineComponentBinds("password");
const error = ref("");

const login = handleSubmit(values => {
  return new Promise(resolve => {
    store.loginUser(values)
      .then(() => {
        router.push({ name: "Dashboard" });
        resolve(true);
      })
      .catch((err) => {
        console.log(err);
        resetForm({
          values: {
            email: values.email,
            password: "",
          },
        })
        error.value = err.response.data.message;
        resolve(false);
      });
  });
});
</script>

<template>
  <div class="login-wrapper">
    <img src="" alt="">
    <div class="login-form">
      <div class="login-form-title">login</div>
      <InputError class="mb-1" :error="error" :show="!meta.touched" />
      <form @submit="login">
        <div class="login-email-group">
          <InputLabel id="email">Email Address</InputLabel>
          <TextInput id="email" v-bind="email" />

          <InputError :error="errors.email" />
        </div>

        <div class="login-password-group">
          <InputLabel id="password">Password</InputLabel>
          <TextInput id="password" type="password" v-bind="password" />

          <InputError :error="errors.password" />
        </div>

        <div class="login-form-policy">
          Policy stuff
        </div>

        <SubmitButton
            type="submit"
            :isSub="isSubmitting && meta.valid"
            :disabled="!meta.valid && (meta.dirty || meta.touched)"
        >
          login
        </SubmitButton>
      </form>
    </div>
    <div class="login-footer">
      Don't have an account? <router-link :to="{ name: 'Register' }">Register to DET-form</router-link>
    </div>
  </div>
</template>

<style scoped>
.login-form-title {
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  padding-bottom: 1rem;
  color: #12151a;
}

.login-form {
  box-sizing: border-box;
  margin-top: 2.5rem;
  width: 21rem;
  min-height: 20rem;
  padding: 1rem 1.5rem 1.4rem;
  border-radius: 0.25rem;
  border: 1px solid #12151a;
}

.login-email-group,
.login-password-group {
  display: flex;
  flex-direction: column;
}

.login-password-group {
  margin-top: 1rem;
}

.login-form-policy {
  margin-top: 1rem;
  font-size: 12px;
  color: #12151a;
  font-weight: 400;
}

.login-footer {
  margin-top: 1.125rem;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
}

.login-footer a {
  color: #12151a;
  font-weight: 400;
  text-decoration: none;
  border-bottom: #12151a 1px solid;
}
</style>
