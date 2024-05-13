<template>
  <Transition mode="out-in" appear>
    <v-card>
      <v-card-actions>
      <v-btn color="orange-lighten-2" @click="show = !show">{{btntext}}</v-btn>
      </v-card-actions>
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
      <v-list v-if="show">
        <v-list-subheader>List Of My Favorite Movies</v-list-subheader>
          <v-list-item
            v-for="(item, i) in movieitems"
            :key="i"
          >
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
      </v-list>
    </Transition>
  </v-card>
</Transition>
  </template>
<script setup>
import { ref } from 'vue';

const movieitems = ref([
  { text: '3 Idiots' },
  { text: 'Kho Gaye Hum Kahan' },
  { text: 'Zindagi Na Milegi Dobara' },
]);
const show = ref(false);
const btntext = ref("Click to show movies");
function onBeforeEnter() {
  console.log("Function onBeforeEnter");
}
function onEnter() {
  console.log("Function onEnter");
  btntext.value = 'Hide the list'
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
  btntext.value = 'Click to show movies'
}

function onLeaveCancelled() {
  console.log("function onLeaveCancelled")
}
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