<template>
    <v-card>
      <v-list>
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