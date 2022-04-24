<template>
  <div class="hey-input-container">
    <input type="text"
           class="hey-input"
           :value="value"
           :readonly="readonly"
           :disabled="disabled"
    >
  </div>
</template>

<script>
export default {
  name: "hey-input",
  props: {
    value: {
      type: String
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.hey-input-container {
  font-size: 12px;
  display: inline-block;

  > .hey-input {
    height: 32px;
    border: 1px solid #999;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;
    outline: none;

    &:hover, &:focus {
      border-color: #8333a8;
    }
    // 如果原生input标签上存在disabled属性就设置这个样式
    &[disabled] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
}
</style>