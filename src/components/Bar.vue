<template>
   <div class="bar">{{state.name}}</div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue';

interface State {
  name: string
}

export default defineComponent({
  setup() {
    const state = reactive<State>({
      name: 'Bar',
    });
    return {
      state
    }
  },
});
</script>

<style scoped>
  .bar {
    color: red;
  }
</style>
