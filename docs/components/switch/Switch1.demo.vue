<template>
  <Switch v-model:value="bool"></Switch>
</template>

<script>
import Switch from "../../../src/lib/Switch.vue";
import {ref} from 'vue';

export default {
  name: "Switch1.demo",

  components: {Switch},
  setup() {
    const bool = ref(true);

    return {
      bool
    }
  }
}
</script>
