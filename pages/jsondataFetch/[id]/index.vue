<template>
    <Transition mode="out-in" appear>
        <v-row class="ma-6">
            <v-col cols="10">
                <v-card>
                    <v-card-title>Fetched Data using useFetch</v-card-title>
                    <v-card-text>{{ title }}</v-card-text>
                    <v-card-text>{{ body }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </Transition>
</template>
<script setup>
import { ref } from 'vue';
const route = useRoute()
console.log("Route", route.params.id)
const id = ref(route.params.id)
const title = ref()
const body = ref()
const { data, pending, error, refresh } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${id.value}`)
console.log("api data: ", data.value)
title.value = data.value.title
body.value = data.value.body
// const formData = ref({
//   title: '',
//   content: ''
// })

// const { data, pending, error, refresh } = useFetch('/api/posts', {
//   method: 'POST',
//   body: JSON.stringify(formData.value),
//   headers: {
//   }
// })

// const submitForm = () => {
//   refresh()
// }
</script>