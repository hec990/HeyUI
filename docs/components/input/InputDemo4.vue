<template>
  <hey-input value="Hello" :disabled="toggleDisabled"></hey-input>
  <hey-input :value="value" :disabled="toggleDisabled"></hey-input>
  <div>
    <span>{{toggleDisabled ? "开启" : "关闭"}} disabled</span>
    <button @click="toggleDisabled = !toggleDisabled">toggle</button>
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
    const toggleDisabled = ref(true)

    return {
      value,
      toggleDisabled
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