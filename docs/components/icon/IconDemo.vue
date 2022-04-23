<template>
  <p>自定义图标</p>
  <IconDemo1></IconDemo1>
  <p>支持大小Size</p>
  <IconDemo2></IconDemo2>
</template>

<script>
import IconDemo1 from "./IconDemo1.vue"
import IconDemo2 from "./IconDemo2.vue"
export default {
  name: "IconDemo.vue",
  components:{
    IconDemo1,
    IconDemo2
  }
}
</script>