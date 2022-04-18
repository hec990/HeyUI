<template>
  <p>默认按钮</p>
  <Switch1Demo/>
  <p>自定义颜色</p>
  <Switch3Demo/>
  <p>禁用</p>
  <Switch2Demo/>
</template>

<script>
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import Switch3Demo from './Switch3.demo.vue'

export default {
  name: "SwitchDemo",
  components:{
    Switch1Demo,
    Switch2Demo,
    Switch3Demo
  }
}
</script>