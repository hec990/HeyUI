<template>
  <div class="hey-input-container">
    <input type="text" class="hey-input">
  </div>
</template>

<script>
export default {
  name: "hey-input"
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
    outline:none;
    &:hover,&:focus { border-color: #8333a8; }
  }
}
</style>