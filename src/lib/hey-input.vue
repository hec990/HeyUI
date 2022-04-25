<template>
  <div class="hey-input-container">
    <input :type="type"
           class="hey-input"
           :class="classList"
           :value="value"
           :readonly="readonly"
           :disabled="disabled"
           :placeholder="placeholder"
    >
    <template v-if="errorMessage">
      <hey-icon name="error-active" :size="20"></hey-icon>
      <span class="hey-errorMessage">{{ errorMessage }}</span>
    </template>
  </div>
</template>

<script>
import HeyIcon from './hey-icon.vue'
import {computed} from "vue";

export default {
  name: "hey-input",
  props: {
    value: String,
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    errorMessage: String,
    placeholder: String,
    type: String
  },
  setup(props){
    const {errorMessage} = props;
    const classList = computed(()=>{
      return {'hey-input-error': errorMessage}
    })

    return {
      classList
    }
  },
  components: {
    HeyIcon
  }
}
</script>

<style lang="scss" scoped>
.hey-input-container {
  font-size: 12px;
  display: inline-flex;
  align-items: center;

  // 这里是设置 .hey-input-container 子元素不是最后一个元素的样式
  > :not(:last-child) {
    margin-right: .5em
  }

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

    &[readonly] {
      color: #bbb;
    }

    // 如果原生input标签上存在disabled属性就设置这个样式
    &[disabled] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }

  > .hey-input-error, .hey-errorMessage {
    border-color: #F1453D;
    color: #F1453D;

    &:hover, &:focus {
      border-color: #F1453D;
    }
  }
}
</style>