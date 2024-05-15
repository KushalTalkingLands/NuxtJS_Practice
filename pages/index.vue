<template>
    <!-- <v-row class="pa-4">
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
    </v-row> -->
    <v-btn @click="openBottomBar()">Click to Open Bottom Sheet</v-btn>
</template>
<script setup>
import { defineAsyncComponent } from 'vue'
import NameCardComponent from "~/components/NameCardComponent.vue"
import DesignationCardComponent from "~/components/DesignationCardComponent.vue"
import HobbiesCardComponent from "~/components/HobbiesCardComponent.vue"
import LoadingComponent from '~/components/LoadingComponent.vue'
const {closeBottomBar,openBottomBar} = useBottomNavigation()
const FavoriteMoviesComponent = defineAsyncComponent({
    loader: () => import('~/components/FavoriteMoviesComponent.vue'),
}
)
const FavoriteSportsCardComponent = defineAsyncComponent({
    loader: () => import('~/components/FavoriteSportsCardComponent.vue'),
    delay: 5000,
    loadingComponent: LoadingComponent
}
)
const { x, y } = useMouse()
</script>