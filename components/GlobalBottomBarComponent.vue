<template>
    <v-bottom-sheet v-model="isBottomVisible" @update:modelValue="customFunction">
  <v-card
    :title="bodyContent.title"
    :text="bodyContent.body"
  >
</v-card>
</v-bottom-sheet>
</template>
<script setup>
import {watch} from 'vue'
const {isBottomVisible,bodyContent,customFunction} = useBottomNavigation()


</script>