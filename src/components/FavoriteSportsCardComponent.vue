<template>
    <v-card class="background">
      <div class="text-caption text-black font-weight-bold">* Style Done with Scoped global</div>
      <v-list class="background">
        <v-list-subheader>List Of My Favorite Sports</v-list-subheader>
  
        <v-list-item
          v-for="(item, i) in sportsitems"
          :key="i"
        >
          <v-list-item-title class="textcolor">{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </template>
<script setup>
import { ref } from 'vue';
const theme = ref({
    color: 'red',
})
const sportsitems = ref([
  { text: 'Football' },
  { text: 'Cricket' },
  { text: 'Basketball' },
]);
</script>
<style scoped>
.textcolor {
  color: v-bind('theme.color');
}
</style>