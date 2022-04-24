<template>
  <hey-input value="Hello" :readonly="toggleReadonly"></hey-input>
  <hey-input :value="value" :readonly="toggleReadonly"></hey-input>
  <div>
    <span>{{toggleReadonly ? "开启" : "关闭"}} readonly</span>
    <button @click="toggleReadonly = !toggleReadonly">toggle</button>
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
    const toggleReadonly = ref(true)

    return {
      value,
      toggleReadonly
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