<template>
   
    <v-btn @click="handleClick">Click to Open Bottom Sheet</v-btn>
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
const handleClick = () => {
    const bodyContent = { title: "Kushal", body: "bda habdf dhfh adfkk" };
    openBottomBar(bodyContent, helloFunction);
};

const helloFunction = () => {
    console.log("Hello");
};
</script>