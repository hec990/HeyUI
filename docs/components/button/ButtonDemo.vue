<template>
  <p>默认按钮</p>
  <ButtonDemo1></ButtonDemo1>
  <p>支持theme属性</p>
  <ButtonDemo2></ButtonDemo2>
  <p>支持Size属性</p>
  <ButtonDemo3></ButtonDemo3>
</template>

<script>
import ButtonDemo1 from "./ButtonDemo1.vue"
import ButtonDemo2 from "./ButtonDemo2.vue"
import ButtonDemo3 from "./ButtonDemo3.vue"
export default {
 components:{
   ButtonDemo1,
   ButtonDemo2,
   ButtonDemo3
 }
}
</script>
