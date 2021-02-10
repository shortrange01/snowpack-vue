<template>
    <header class="header">{{ state.title }}</header>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue';

interface State {
    title: string
}
    
export default defineComponent({
    setup() {
        const state = reactive<State>({
            title: 'snowpack環境構築'
        });
        
        return { state };
    }
})
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 100px;
    background: {
        color: #666;
    }
    color: #fff;
}
</style>