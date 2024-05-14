<template>
    <v-row class="pa-4 mainbackground">
        <v-col cols="4" class="firstCard">
            <NameCardComponent />
        </v-col>
        <v-col cols="4">
            <DesignationCardComponent />
        </v-col>
        <v-col cols="4">
            <HobbiesCardComponent />
        </v-col>
        <v-col cols="4">
            <Suspense>
                <FavoriteMoviesComponent />
                <template #fallback>
                    Loading...
                </template>
            </Suspense>
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
    loader: () => import('~/src/components/FavoriteMoviesComponent.vue'),
}
)
const FavoriteSportsCardComponent = defineAsyncComponent({
    loader: () => import('~/src/components/FavoriteSportsCardComponent.vue'),
    delay: 5000,
    loadingComponent: LoadingComponent
}
)
</script>
<style scoped>
.mainbackground{
    background-color: antiquewhite;
}
.firstCard:deep(.cardBackground){
    background-color: crimson;
}
:global(.background) {
  background-color:burlywood; 
}
</style>