<template>
  <svg class="hey-icon">
    <use v-bind:xlink:href="iconName"></use>
  </svg>
</template>

<script>
import {computed} from 'vue';
import 'http://at.alicdn.com/t/font_3352035_z48p9ggpijs.js'

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
    }
  },
  setup(props){
    const {name,size} = props;
    const iconName = computed(() => `#icon-${name}`);
    const iconSize = computed(() => size + "px");

    return {
      iconName,
      iconSize
    }
  }
}
</script>

<style lang="scss">
.hey-icon {
  width: v-bind(iconSize);
  height: v-bind(iconSize);
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>