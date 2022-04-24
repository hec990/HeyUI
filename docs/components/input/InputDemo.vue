<template>
  <p>默认输入框</p>
  <InputDemo1></InputDemo1>
  <p>支持设置输入框value</p>
  <InputDemo2></InputDemo2>
</template>

<script>
import InputDemo1 from "./InputDemo1.vue";
import InputDemo2 from "./InputDemo2.vue";
export default {
  name: "InputDemo",
  components:{
    InputDemo1,
    InputDemo2
  }
}
</script>