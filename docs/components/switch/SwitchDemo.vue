<template>
  <p>基础开关</p>
  <Switch1Demo/>
  <p>禁用</p>
  <Switch2Demo/>
</template>

<script>
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
export default {
  name: "SwitchDemo",
  components:{
    Switch1Demo,
    Switch2Demo
  }
}
</script>