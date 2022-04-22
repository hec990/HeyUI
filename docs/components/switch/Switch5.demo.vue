<template>
  <Switch v-model:value="bool" middle-text-no="开" middle-text-off="关"></Switch>
</template>

<script>
import Switch from "../../../src/lib/hey-switch.vue";
import {ref} from 'vue';

export default {
  name: "Switch5.demo",

  components: {Switch},
  setup() {
    const bool = ref(true);

    return {
      bool
    }
  }
}
</script>
