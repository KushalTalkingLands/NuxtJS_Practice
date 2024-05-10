<template>
    <v-card>
      <v-list>
        <v-list-subheader>List Of My Favorite Movies</v-list-subheader>
  
        <v-list-item
          v-for="(item, i) in movieitems"
          :key="i"
        >
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </template>
<script setup>
import { ref } from 'vue';

const movieitems = ref([
  { text: '3 Idiots' },
  { text: 'Kho Gaye Hum Kahan' },
  { text: 'Zindagi Na Milegi Dobara' },
]);
</script>