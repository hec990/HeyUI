<template>
  <hey-input :errorMessage="errorMessage"></hey-input>
</template>

<script>
import HeyInput from '../../../src/lib/hey-input.vue';
import {ref} from 'vue';
export default {
  name: "InputDemo5",
  components:{
    HeyInput
  },
  setup(){
    const errorMessage = ref('用户名不能少于2个字');
    const passMessage = ref('正确')
    return {
      errorMessage,
      passMessage
    }
  }
}
</script>