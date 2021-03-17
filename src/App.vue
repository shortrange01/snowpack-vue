<template>
    <div>
        <Header />
        <GradationAnime />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";
import GradationAnime from "./components/GradationAnime.vue";

export default defineComponent({
    components: {
        Header,
        GradationAnime,
    },
});
</script>
