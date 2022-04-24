<template>
  <hey-input value="Hello" :disabled="disabledValue"></hey-input>
  <hey-input :value="value" :disabled="disabledValue"></hey-input>
  <div>
    <span>{{disabledValue ? "开启" : "关闭"}} disabled</span>
    <button @click="disabledValue = !disabledValue">toggle</button>
  </div>
</template>

<script>
import {ref} from "vue";
import HeyInput from '../../../src/lib/hey-input.vue'

export default {
  name: "InputDemo4",
  components: {
    HeyInput
  },
  setup() {
    const value = ref('Hello Input');
    const disabledValue = ref(true)

    return {
      value,
      disabledValue
    }
  }
}
</script>

<style scoped>
span {
  font-size: 14px;
}

button {
  padding: 3px;
  margin-top: 10px;
  margin-left: 10px;
}
</style>