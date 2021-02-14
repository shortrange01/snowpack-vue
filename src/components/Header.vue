<template>
    <header class="header">
        <p>{{ state.title }}</p>
    </header>
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
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100px;
    background: {
        color: #666;
    }
    color: #fff;
    font-size: 2.8rem;
}
</style>