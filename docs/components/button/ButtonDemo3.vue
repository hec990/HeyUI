<template>
  <div>
    <Button size="big">big button</Button>
    <Button>normal button</Button>
    <Button size="small">small button</Button>
  </div>
</template>

<script>
import Button from '../../../src/lib/Button.vue'
export default {
  name: "ButtonDemo3",
  components:{
    Button
  }
}
</script>