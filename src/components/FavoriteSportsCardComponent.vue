<template>
    <v-card>
      <v-list>
        <v-list-subheader>List Of My Favorite Sports</v-list-subheader>
  
        <v-list-item
          v-for="(item, i) in sportsitems"
          :key="i"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </template>
<script setup>
import { ref } from 'vue';

const sportsitems = ref([
  { text: 'Football' },
  { text: 'Cricket' },
  { text: 'Basketball' },
]);
</script>