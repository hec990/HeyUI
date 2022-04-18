<template>
  <button class="hey-switch"
          :class="[
          {'hey-checked':value},
          {'hey-disabled':disabled},
          ]"
          :style="{
            backgroundColor: value ? activeColor : inactiveColor
          }"
          @click="toggle"
          :disabled="disabled"
  >
    <span></span>
  </button>
</template>

<script>
export default {
  name: "hey-switch",
  props: {
    value: {
      type: [Boolean, String, Number],
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: '#8333a8'
    },
    inactiveColor: {
      type: String,
      default: '#E3E3E3'
    },
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return {
      toggle
    }
  }
}
</script>

<style lang="scss" scoped>
.hey-switch {
  height: 22px;
  width: 22px*2;
  border: none;
  position: relative;
  border-radius: 20px;
  cursor: pointer;

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: 18px;
    width: 18px;
    background-color: white;
    transition: left 250ms;
    border-radius: 20px;
  }

  &.hey-checked > span {
    left: calc(100% - #{18px} - 2px);
  }

  &.hey-disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
}
</style>