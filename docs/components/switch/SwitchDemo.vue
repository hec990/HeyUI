<template>
  <p>默认按钮</p>
  <Switch1Demo/>
  <p>支持自定义颜色</p>
  <Switch3Demo/>
  <p>支持自定义文字</p>
  <Switch4Demo/>
  <br>
  <Switch5Demo/>
  <br>
  <Switch6Demo/>
  <br>
  <Switch7Demo/>
  <p>禁用</p>
  <Switch2Demo/>
</template>

<script>
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import Switch3Demo from './Switch3.demo.vue'
import Switch4Demo from './Switch4.demo.vue'
import Switch5Demo from './Switch5.demo.vue'
import Switch6Demo from './Switch6.demo.vue'
import Switch7Demo from './Switch7.demo.vue'

export default {
  name: "SwitchDemo",
  components: {
    Switch1Demo,
    Switch2Demo,
    Switch3Demo,
    Switch4Demo,
    Switch5Demo,
    Switch6Demo,
    Switch7Demo
  }
}
</script>