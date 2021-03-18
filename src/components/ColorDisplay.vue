<template>
    <div class="colorDisplay">
        <div class="colorView" :style="{ 'background-color': colorCode }"></div>
        <div class="text" :style="{ color: colorCode }">
            <p>{{ colorCode }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { PropType, computed, defineComponent, reactive } from "vue";

export default defineComponent({
    props: {
        colorCode: {
            type: String,
        },
    },
});
</script>

<style lang="scss" scoped>
.colorDisplay {
    position: relative;
    width: 100px;
    text-align: center;
    .colorView {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .text {
        width: 100%;
        margin-top: 4px;
    }
}
</style>
