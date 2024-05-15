<template>
    <v-bottom-sheet v-model="isBottomVisible">
  <v-card
    title="Bottom Sheet"
    text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut, eos? Nulla aspernatur odio rem, culpa voluptatibus eius debitis dolorem perspiciatis asperiores sed consectetur praesentium! Delectus et iure maxime eaque exercitationem!"
  ></v-card>
</v-bottom-sheet>
</template>
<script setup>
const {isBottomVisible} = useBottomNavigation()
</script>