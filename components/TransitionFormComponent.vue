<template>
    <v-card class="ma-4">
    <Transition
    @before-enter="onBeforeEnter"
  @enter="onEnter"
  @after-enter="onAfterEnter"
  @enter-cancelled="onEnterCancelled"
  @before-leave="onBeforeLeave"
  @leave="onLeave"
  @after-leave="onAfterLeave"
  @leave-cancelled="onLeaveCancelled"
    >
    <v-sheet class="ma-6">
    <v-form @submit.prevent v-if="!show">
      <v-text-field
        v-model="username"
        :rules="rules"
        label="username"
      ></v-text-field>
      <v-btn class="mt-2" block @click="show = !show">Submit</v-btn>
    </v-form>
    <div v-else>
      {{ username }} is the entered Username
      <v-card-actions>
      <v-btn color="orange-lighten-2" @click="show = !show">Edit</v-btn>
      </v-card-actions>
    </div>
  </v-sheet>
    </Transition>
  </v-card>
  </template>
<script setup>
import { ref } from 'vue';
const username = ref()
const password = ref()
const show = ref(false);
function onBeforeEnter() {
  console.log("Function onBeforeEnter");
}
function onEnter() {
  console.log("Function onEnter");
  // done();
}
function onAfterEnter() {
  console.log("Function onAfterEnter");
}
function onEnterCancelled() {
  console.log("Function onEnterCancelled");
}
function onBeforeLeave() {
  console.log("Function onBeforeLeave");
}
function onLeave() {
  console.log("Function onLeave");
  // done();
}

function onAfterLeave() {
  console.log("Function onAfterLeave");
}

function onLeaveCancelled() {
  console.log("function onLeaveCancelled")
}
const rules = [
  (value) => {
    if (value) return true;
    return 'You must enter a username.';
  },
];
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>