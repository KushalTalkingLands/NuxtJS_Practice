<template>
    <v-card class="card">
      <div class="text-caption text-red font-weight-bold">* Style Done with Scoped</div>
      <v-list class="card">
        <v-list-subheader>List Of My Hobbies</v-list-subheader>
  
        <v-list-item
          v-for="(item, i) in hobbiesitems"
          :key="i"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </template>
<script setup>
import { ref } from 'vue';

const hobbiesitems = ref([
  { text: 'Playing Football' },
  { text: 'Dancing' },
  { text: 'Playing Guitar' },
]);
</script>
<style scoped>
.card{
  background-color: aqua;
}
</style>