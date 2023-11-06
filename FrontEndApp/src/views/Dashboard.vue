<script setup lang="ts">
import { useDataStore } from "@/store";
import router from "@/router";

const store = useDataStore();

function logout() {
  store.logoutUser()
    .then(() => {
      router.push({ name: "Login" });
    })
}

</script>

<template>
  <button @click="logout">Logout</button>
</template>

<style scoped>

</style>
