<template>
  <hey-input value="Hello" :readonly="readonlyValue"></hey-input>
  <hey-input :value="value" :readonly="readonlyValue"></hey-input>
  <div>
    <span>{{readonlyValue ? "开启" : "关闭"}} readonly</span>
    <button @click="readonlyValue = !readonlyValue">toggle</button>
  </div>
</template>

<script>
import {ref} from "vue";
import HeyInput from '../../../src/lib/hey-input.vue'

export default {
  name: "InputDemo3",
  components: {
    HeyInput
  },
  setup() {
    const value = ref('Hello Input');
    const readonlyValue = ref(true)

    return {
      value,
      readonlyValue
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