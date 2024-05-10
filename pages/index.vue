<template>
    <v-row>
        <v-col cols="4">
            <NameCardComponent />
        </v-col>
        <v-col cols="4">
            <DesignationCardComponent />
        </v-col>
        <v-col cols="4">
            <HobbiesCardComponent />
        </v-col>
        <v-col cols="4">
            <FavoriteMoviesComponent />
        </v-col>
        <v-col cols="4">
            <FavoriteSportsCardComponent />
        </v-col>
    </v-row>
</template>
<script setup>
import { defineAsyncComponent } from 'vue'
import NameCardComponent from "~/src/components/NameCardComponent.vue"
import DesignationCardComponent from "~/src/components/DesignationCardComponent.vue"
import HobbiesCardComponent from "~/src/components/HobbiesCardComponent.vue"
import LoadingComponent from '~/src/components/LoadingComponent.vue'
const FavoriteMoviesComponent = defineAsyncComponent({
    loader:() => import('~/src/components/FavoriteMoviesComponent.vue'),
    delay:2000
}
)
const FavoriteSportsCardComponent = defineAsyncComponent({
    loader:() => import('~/src/components/FavoriteSportsCardComponent.vue'),
    delay:5000,
    loadingComponent: LoadingComponent
}
)
</script>