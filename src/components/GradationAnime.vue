<template>
    <div>グラデーションアニメ</div>
    <input type="text" v-model="state.inputCode" />
    <button @click="submitColorCode()">submit</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import UserColor from "../model/userColor";

interface State {
    model: UserColor;
    inputCode: string;
}
export default defineComponent({
    setup() {
        const state = reactive<State>({
            model: new UserColor(),
            inputCode: "",
        });

        const submitColorCode = () => {
            state.model.insertNewNumber(state.inputCode);
            state.inputCode = "";
        };

        return {
            state,
            submitColorCode,
        };
    },
});
</script>
