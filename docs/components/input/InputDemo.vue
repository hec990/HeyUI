<template>
  <p>默认输入框</p>
  <InputDemo1></InputDemo1>
  <p>支持设置输入框value</p>
  <InputDemo2></InputDemo2>
  <p>支持 readonly</p>
  <InputDemo3></InputDemo3>
  <p>支持 disabled</p>
  <InputDemo4></InputDemo4>
  <p>登录页</p>
  <InputDemo5></InputDemo5>
  <p>支持placeholder</p>
  <InputDemo6></InputDemo6>
</template>

<script>
import InputDemo1 from "./InputDemo1.vue";
import InputDemo2 from "./InputDemo2.vue";
import InputDemo3 from "./InputDemo3.vue";
import InputDemo4 from "./InputDemo4.vue";
import InputDemo5 from "./InputDemo5.vue";
import InputDemo6 from "./InputDemo6.vue";
export default {
  name: "InputDemo",
  components:{
    InputDemo1,
    InputDemo2,
    InputDemo3,
    InputDemo4,
    InputDemo5,
    InputDemo6
  }
}
</script>