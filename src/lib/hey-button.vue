<template>
  <button
      class="hey-button"
      :class="classes"
      :disabled="disabled"
  >
    <slot/>
  </button>
</template>

<script>
import {computed} from 'vue';

export default {
  name: "hey-button",
  props: {
    theme: {
      type: String,
      default: "button"
    },
    size: {
      type: String,
      default: "normal"
    },
    disabled: {
      type: Boolean
    }
  },
  setup(props) {
    const {theme, size,disabled} = props
    const classes = computed(() => {
      return {
        [`hey-theme-${theme}`]: theme,
        [`hey-size-${size}`]: size,
        ['hey-button-disabled']: disabled
      }
    })

    return {
      classes
    }
  }
}
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #8333a8;
$radius: 4px;
.hey-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.hey-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;

    &:hover, &:focus {
      color: lighten($blue, 10%);
    }
  }

  &.hey-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover, &:focus {
      background: darken(white, 5%);;
    }
  }

  &.hey-theme-button {
    &.hey-size-big {
      font-size: 24px;
      height: 48px;
      padding: 0 16px
    }

    &.hey-size-small {
      font-size: 12px;
      height: 20px;
      padding: 0 4px;
    }
  }

  &.hey-button-disabled {
    cursor: not-allowed;
    opacity: 0.6;
    &:hover,
    &:focus {
      color: inherit;
      border-color: #d9d9d9;
    }
  }
}
</style>