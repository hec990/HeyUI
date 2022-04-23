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
    }
  },
  setup(props){
    const {name} = props;
    const iconName = computed(() => `#icon-${name}`);

    return {
      iconName
    }
  }
}
</script>

<style lang="scss">
.hey-icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>