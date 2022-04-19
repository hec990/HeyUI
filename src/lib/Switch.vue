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
    <span>
      <slot name="center-off" v-if="value"> {{ middleTextNo() }}</slot>
      <slot name="center-no" v-else>{{ middleTextOff() }}</slot>
    </span>
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
    middleTextOff: {
      type: String,
      default: '',
    },
    middleTextNo: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    const middleTextNo = () => {
      return props.middleTextNo.substr(0, 1);
    };
    const middleTextOff = () => {
      return props.middleTextOff.substr(0, 1);
    };
    return {
      toggle,
      middleTextNo,
      middleTextOff,
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
    line-height: 18px;
    font-size: 12px;
    color: #8333a8;
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