<template>
  <div class="foo-ts-vue">{{state.name}}</div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue';

interface State {
  name: string;
}

export default defineComponent({
  setup() {
    const state = reactive<State>({
      name: 'FooTsVue',
    });

    return {
      state
    }
  },
});
</script>

<style lang="css">
.foo-tsx-vue {
  color: green;
}
</style>