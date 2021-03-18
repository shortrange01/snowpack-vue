<template>
    <div class="displayArea">
        <ColorDisplay
            class="grid1"
            v-if="state.model.colorList && state.model.colorList[0]"
            :color-code="state.model.colorList[0]"
        />
        <div class="gradationAnime" :style="state.gradationAnimeBgColor"></div>
        <ColorDisplay
            class="grid2"
            v-if="state.model.colorList && state.model.colorList[1]"
            :color-code="state.model.colorList[1]"
        />
    </div>
    <div class="inputArea">
        <input type="text" class="fieldColorCode" v-model="state.inputCode" />
        <button class="submitBtn" @click="submitColorCode()">submit</button>
    </div>
    <div class="errMsg">
        <p>{{ state.model.errMsg }}</p>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import UserColor from "../model/userColor";
import ColorDisplay from "./ColorDisplay.vue";

interface State {
    model: UserColor;
    inputCode: string;
    gradationAnimeBgColor: { "background-color": string };
    isRunning: boolean;
}
export default defineComponent({
    components: {
        ColorDisplay,
    },
    setup() {
        const state = reactive<State>({
            model: new UserColor(),
            inputCode: "",
            gradationAnimeBgColor: { "background-color": "#cbb" },
            isRunning: false,
        });

        const submitColorCode = () => {
            state.model.insertNewNumber(state.inputCode);
            state.inputCode = "";
            beginColorChange();
        };

        const beginColorChange = () => {
            if (state.model.colorList.length < 2 || state.isRunning) return;
            state.isRunning = true;
            let i = 0;
            setInterval(() => {
                i = i === 0 ? 1 : 0;
                state.gradationAnimeBgColor["background-color"] =
                    state.model.colorList[i];
            }, 2000);
        };

        return {
            state,
            submitColorCode,
        };
    },
});
</script>

<style lang="scss" scoped>
.displayArea {
    display: grid;
    grid-template-rows: 500px;
    grid-template-columns: 1fr 100px 500px 100px 1fr;
    grid-column-gap: 20px;
    margin-top: 40px;
    .grid1 {
        grid-column: 2;
        align-self: center;
    }
    .grid2 {
        grid-column: 4;
        align-self: center;
    }
    .gradationAnime {
        grid-column: 3;
        width: 500px;
        height: 500px;
        border-radius: 50%;
        transition: 2s;
    }
}
.inputArea {
    display: flex;
    justify-content: center;
    width: 500px;
    margin: 40px auto 10px;
    .fieldColorCode {
        border: solid 1px #cbb;
        color: #cbb;
    }
    .submitBtn {
        padding: 4px 10px;
        border: solid 1px #cbb;
        color: #cbb;
    }
}
.errMsg {
    width: 500px;
    margin: 0 auto;
    text-align: center;
    color: #c77;
}
</style>
