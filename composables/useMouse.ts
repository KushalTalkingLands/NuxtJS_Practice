import { ref } from 'vue'

export default function() {
  const x = ref(0)
  const y = ref(0)

//   function update(event:any) {
//     x.value = event.pageX
//     y.value = event.pageY
//   }
//   onMounted(() => window.addEventListener('mousemove', update))
//   onUnmounted(() => window.removeEventListener('mousemove', update))

//Using one composable inside another composable
useEventListener(window, 'mousemove', (event:any) => {
    x.value = event.pageX
    y.value = event.pageY
  })

  return { x, y }
}