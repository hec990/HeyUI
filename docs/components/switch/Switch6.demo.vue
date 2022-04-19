<template>
  <Switch v-model:value="bool" middle-text-no="✔" middle-text-off="✖"></Switch>
</template>

<script>
import Switch from "../../../src/lib/Switch.vue";
import {ref} from 'vue';

export default {
  name: "Switch6.demo",

  components: {Switch},
  setup() {
    const bool = ref(true);

    return {
      bool
    }
  }
}
</script>
