<template>
    <div class="container flex items-center justify-center ma-4">
      <h1>Profile</h1>
      <v-btn 
      @click = "signout"
          class="px-3 py-2 rounded-md bg-red text-white inline-flex items-center justify-center">
          Sign Out
      </v-btn>
      <pre>{{ userStore.user }}</pre>
    </div>
  </template>
  
<script lang="ts" setup>
const userStore = useUserStore()
definePageMeta({
    middleware:["auth"]
})
const signout = async () => {
    await userStore.logout();
await navigateTo('/',{replace: true} )
}
</script>