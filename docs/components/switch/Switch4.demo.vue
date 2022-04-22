<template>
  <Switch v-model:value="bool" middle-text-no="N" middle-text-off="F"></Switch>
</template>

<script>
import Switch from "../../../src/lib/hey-switch.vue";
import {ref} from 'vue';

export default {
  name: "Switch4.demo",

  components: {Switch},
  setup() {
    const bool = ref(true);

    return {
      bool
    }
  }
}
</script>
