<template>
  <Switch v-model:value="bool" middle-text-no="1" middle-text-off="0"></Switch>
</template>

<script>
import Switch from "../../../src/lib/hey-switch.vue";
import {ref} from 'vue';

export default {
  name: "Switch7.demo",

  components: {Switch},
  setup() {
    const bool = ref(true);

    return {
      bool
    }
  }
}
</script>
