<template>
   <div class="container flex items-center justify-center ma-4">
    <div>
        <h1>Welcome</h1>
        <p>Sign in to your profile</p>
        <v-btn 
        @click ="signin"
        class="px-3 py-2 rounded-md bg-red text-white inline-flex items-center justify-center">
        Sign In
    </v-btn>
    </div>
   </div>
</template>
<script setup lang="ts">
const userStore = useUserStore();

definePageMeta({
    middleware:["already-auth"]
})
const signin = async () => {
    await userStore.signIn({
    username: 'kminchelle',
    password: '0lelplR',
    });
await navigateTo('/transition',{replace: true} )
}
</script>