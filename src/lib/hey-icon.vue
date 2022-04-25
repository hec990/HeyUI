<template>
  <svg class="hey-icon" :class="classList">
    <use v-bind:xlink:href="iconName"></use>
  </svg>
</template>

<script>
import {computed} from 'vue';
import 'http://at.alicdn.com/t/font_3352035_xenlfa5xkl.js'

export default {
  name: "hye-icon",
  props:{
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 25
    },
    spin: {
      type: Boolean
    }
  },
  setup(props){
    const {name,size,spin} = props;
    const iconName = computed(() => `#icon-${name}`);
    const iconSize = computed(() => size + "px");
    const classList = computed(() => {
      return [spin ? "hey-icon-revolve" : ""];
    });

    return {
      iconName,
      iconSize,
      classList
    }
  }
}
</script>

<style lang="scss">
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.hey-icon {
  width: v-bind(iconSize);
  height: v-bind(iconSize);
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  &.hey-icon-revolve {
    animation: rotate 1.5s linear infinite;
  }
}
</style>