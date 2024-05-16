<template>
    <!-- <v-row>
    <v-col cols="12">
        <v-btn @click="handleClick">Click to Open Bottom Sheet</v-btn>
    </v-col>
    <v-col cols="12">
        
    </v-col>
   </v-row> -->
    <!-- <NuxtImg 
    fit="contain"
    height="200"
    src="https://talkinglands.com/public/store/organizations/01GPWQAET9ENJ489BQDCPNYYSB/projects/01HQQM0AKW0S7RE485J54P7DP1/photos/GreenAlpha1.jpg" /> -->
    <NuxtPicture
        src="https://talkinglands.com/public/store/organizations/01GPWQAET9ENJ489BQDCPNYYSB/projects/01HQQM0AKW0S7RE485J54P7DP1/photos/GreenAlpha1.jpg"
        width="3750"
        height="2500"
        sizes="xs:200px md:500px lg:1024"
      />
</template>
<script setup>
import { defineAsyncComponent } from 'vue'
import NameCardComponent from "~/components/NameCardComponent.vue"
import DesignationCardComponent from "~/components/DesignationCardComponent.vue"
import HobbiesCardComponent from "~/components/HobbiesCardComponent.vue"
import LoadingComponent from '~/components/LoadingComponent.vue'
const { closeBottomBar, openBottomBar } = useBottomNavigation()
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