<template>
  <div>
    <Button disabled>默认按钮</Button>
    <Button disabled theme="text">文本按钮</Button>
    <Button disabled theme="link">文本按钮</Button>
    <Button disabled size="big">文本按钮</Button>
  </div>
</template>

<script>
import Button from '../../../src/lib/hey-button.vue'
export default {
  name: "ButtonDemo4",
  components:{
    Button
  }
}
</script>