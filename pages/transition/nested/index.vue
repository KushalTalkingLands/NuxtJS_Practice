<template>
    <NamedTransitionComponent />
    <v-btn @click="handleClick">Click to Open Bottom Sheet</v-btn>
</template>
<script setup>
const {closeBottomBar,openBottomBar} = useBottomNavigation()
// import NamedTransitionComponent from '~/components/NamedTransitionComponent.vue';
const handleClick = () => {
    const bodyContent = { title: "Kushal From Nested", body: "This is the call from nested page" };
    openBottomBar(bodyContent, helloFunction);
};

const helloFunction = () => {
    console.log("Hello from Nested");
};
</script>