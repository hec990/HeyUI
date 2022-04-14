<template>
  <Switch v-model:value="value1" disabled></Switch>
  <Switch v-model:value="value2" disabled></Switch>
</template>

<script>
import Switch from "../../../src/lib/Switch.vue";
import {ref} from 'vue';

export default {
  name: "Switch2.demo",

  components: {Switch},
  setup() {
    const value1 = ref(false);
    const value2 = ref(true);
    return {
      value1,
      value2
    }
  }
}
</script>