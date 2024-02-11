<script setup lang="ts">
import InputError from "@/components/form/InputError.vue";
import InputLabel from "@/components/form/InputLabel.vue";
import TextInput from "@/components/form/TextInput.vue";
import AuthSubmit from "@/components/form/AuthSubmit.vue";

import * as yup from "yup";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user.ts";
import { useForm } from "vee-validate";
import { computed, onMounted, ref } from "vue";

type loginForm = {
  email: string;
  password: string;
};

const router = useRouter();
const user = useUserStore();
const { errors, isSubmitting, handleSubmit, meta, resetForm, defineField } =
  useForm<loginForm>({
    validationSchema: yup.object({
      email: yup
        .string()
        .required()
        .email()
        .label("Email")
        .default("admin@example.com"),
      password: yup
        .string()
        .required()
        .min(8)
        .label("Password")
        .default("password"),
    }),
  });

const [email, emailAttr] = defineField("email");
const [password, passwordAttr] = defineField("password");
const error = ref("");

const login = handleSubmit((values) => {
  return new Promise((resolve) => {
    user
      .post(values)
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
        });
        error.value = err.response.data.message;
        resolve(false);
      });
  });
});

const submitting = computed(() => isSubmitting.value && meta.value.valid);
const disabled = computed(
  () => !meta.value.valid && (meta.value.dirty || meta.value.touched),
);

onMounted(() => {
  console.log("Hi");
  console.log(email.value, password.value);
});
</script>

<template>
  <div class="login-wrapper">
    <img src="" alt="" />
    <div class="login-form">
      <div class="login-form-title">login</div>
      <InputError class="mb-1" :error :show="!meta.touched" />
      <form @submit="login">
        <div class="login-email-group">
          <InputLabel id="email">Email Address</InputLabel>
          <TextInput v-model="email" v-bind="emailAttr" type="text" />
          <InputError :error="errors.email" />
        </div>

        <div class="login-password-group">
          <InputLabel id="password">Password</InputLabel>
          <TextInput v-model="password" v-bind="passwordAttr" type="password" />
          <InputError :error="errors.password" />
        </div>

        <AuthSubmit :submitting :disabled>login</AuthSubmit>
      </form>
    </div>
    <div class="login-footer">
      Don't have an account?
      <router-link :to="{ name: 'Register' }">Register to #name#</router-link>
    </div>
  </div>
</template>

<style scoped>
.login-wrapper {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

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
