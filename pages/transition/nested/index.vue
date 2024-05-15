<template>
    <NamedTransitionComponent />
    <v-btn @click="openBottomBar()">Click to Open Bottom Sheet</v-btn>
</template>
<script setup>
const {closeBottomBar,openBottomBar} = useBottomNavigation()
// import NamedTransitionComponent from '~/components/NamedTransitionComponent.vue';
</script>