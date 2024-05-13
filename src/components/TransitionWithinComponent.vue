<template>
    <v-radio-group v-model="activeComponent">
  <v-radio label="Movies List" :value="FavoriteMoviesComponent"></v-radio>
  <v-radio label="Sports List" :value="FavoriteSportsCardComponent"></v-radio>
</v-radio-group>
	<!-- <label>
    <input type="radio" v-model="activeComponent" :value="FavoriteMoviesComponent"> Movies List
  </label>
  <label>
    <input type="radio" v-model="activeComponent" :value="FavoriteSportsCardComponent"> Sports List
  </label> -->
  <Transition name="fade" mode="out-in">
    <component :is="activeComponent"></component>
  </Transition>
</template>
<script setup>
import { shallowRef } from 'vue'
import FavoriteSportsCardComponent from './FavoriteSportsCardComponent.vue';
import FavoriteMoviesComponent from './FavoriteMoviesComponent.vue';

// use shallowRef to avoid component being deeply observed
const activeComponent = shallowRef(FavoriteMoviesComponent)
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>