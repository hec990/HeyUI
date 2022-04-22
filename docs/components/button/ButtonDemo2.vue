<template>
  <Button>默认按钮</Button>
  <Button theme="link">链接按钮</Button>
  <Button theme="text">文本按钮</Button>
</template>

<script>
import Button from '../../../src/lib/hey-button.vue'
export default {
  name: "ButtonDemo2",
  components:{
    Button
  }
}
</script>