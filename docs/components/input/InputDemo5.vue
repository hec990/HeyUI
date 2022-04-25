<template>
  <hey-input type="username" placeholder="用户名" :errorMessage="errorMessage1"></hey-input>
  <p></p>
  <hey-input type="password" placeholder="密码" :errorMessage="errorMessage2"></hey-input>
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
    const errorMessage1 = ref('用户名不能少于2个字');
    const errorMessage2 = ref('密码不能少于8位');
    const passMessage = ref('正确')
    return {
      errorMessage1,
      errorMessage2,
      passMessage
    }
  }
}
</script>