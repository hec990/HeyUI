<template>
  <button class="hey-switch" :class="{'hey-checked':checked}" @click="toggle">
    <span></span>
  </button>
</template>

<script>
import {ref} from 'vue';
export default {
  name: "hey-switch",
  setup(){
    const checked = ref(false)
    const toggle = () =>{
      checked.value = !checked.value
    }
    return {
      checked,
      toggle
    }
  }
}
</script>

<style lang="scss" scoped>
.hey-switch{
  height: 22px;
  width: 22px*2;
  border: none;
  background-color: #E3E3E3;
  border-radius: 22px/2;
  position: relative;
  border-radius: 20px;
  cursor: pointer;
  span{
    position: absolute;
    top: 2px;
    left: 2px;
    height: 18px;
    width: 18px;
    background-color: white;
    border-radius: 18px/2;
    transition: left 250ms;
    border-radius: 20px;
  }
  &.hey-checked {
    background-color: #8333a8;
  }
  &.hey-checked > span{
    left: calc(100% - #{18px} - 2px);
  }
}
</style>