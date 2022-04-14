<template>
  <Switch v-model:value="bool" disabled></Switch>
</template>

<script>
import Switch from "../../../src/lib/Switch.vue";
import {ref} from 'vue';

export default {
  name: "Switch2.demo",

  components: {Switch},
  setup() {
    const bool = ref(false);
    return {
      bool
    }
  }
}
</script>