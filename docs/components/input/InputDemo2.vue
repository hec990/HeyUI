<template>
  <hey-input value="Hello"></hey-input>
  <hey-input :value="value"></hey-input>
</template>

<script>
import HeyInput from '../../../src/lib/hey-input.vue'
import {ref} from "vue";
export default {
  name: "InputDemo2",
  components:{
    HeyInput
  },
  setup(){
    const value = ref('Hello Input');

    return {
      value
    }
  }
}
</script>