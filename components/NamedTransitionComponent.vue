<template>
  <v-btn @click="show = !show">Toggle</v-btn>
  <Transition :duration="550" name="nested">
    <div v-if="show" class="outer">
      <div class="inner">
   			This is the test for nested transition
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>
<style>
.outer, .inner {
	background: #eee;
  padding: 30px;
  min-height: 100px;
}
  
.inner { 
  background: #ccc;
}
  
.nested-enter-active, .nested-leave-active {
	transition: all 0.3s ease-in-out;
}

.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.nested-enter-active .inner,
.nested-leave-active .inner { 
  transition: all 0.3s ease-in-out;
}

.nested-enter-active .inner {
	transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0.001;
}
</style>