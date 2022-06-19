# Switch

### 引入

```JavaScript
import { HeySwitch } from './lib/hey-switch';
```

### 默认值 value

<div class="box">
 <Switch1Demo/>
</div>

::: details 查看代码

```vue

<template>
  <hey-switch v-model:value="bool"></hey-switch>
</template>

<script>
import {ref} from 'vue';

export default {
  setup() {
    const bool = ref(true);
    return {bool}
  }
}
</script>
```

:::

### 禁用

<div class="box">
 <Switch2Demo/>
</div>

::: details 查看代码
```vue
<template>
  <div>
    <Switch v-model:value="value1" :disabled="x"></Switch>
    <br>
    <Switch v-model:value="value2" :disabled="x"></Switch>
  </div>
</template>

<script>
import Switch from "../../../src/lib/hey-switch.vue";
import {ref} from 'vue';

export default {
  name: "Switch2.demo",

  components: {Switch},
  setup() {
    const value1 = ref(false);
    const value2 = ref(true);
    return {
      value1,
      value2
    }
  }
}
</script>
```
:::

### 自定义颜色
<div class="box">
 <Switch3Demo/>
</div>

::: details 查看代码
```vue
<template>
  <Switch v-model:value="bool" active-color="#008000" inactive-color="#00CED1"></Switch>
</template>

<script>
import Switch from "../../../src/lib/hey-switch.vue";
import {ref} from 'vue';

export default {
  name: "Switch3.demo",

  components: {Switch},
  setup() {
    const bool = ref(true);

    return {
      bool
    }
  }
}
</script>
```
:::

### 自定义文字
推荐使用：开关、FN、TF
<div class="box">
 <Switch4Demo/>
 <Switch5Demo/>
 <Switch6Demo/>
 <Switch7Demo/>
</div>

::: details 查看代码
```vue
<template>
  <Switch v-model:value="bool" middle-text-no="1" middle-text-off="0"></Switch>
</template>

<script>
import Switch from "../../../src/lib/hey-switch.vue";
import {ref} from 'vue';

export default {
  components: {Switch},
  setup() {
    const bool = ref(true);

    return {
      bool
    }
  }
}
</script>
```
:::


<script setup>
import Switch1Demo from './Switch1.demo.vue';
import Switch2Demo from './Switch2.demo.vue';
import Switch3Demo from './Switch3.demo.vue';
import Switch4Demo from './Switch4.demo.vue';
import Switch5Demo from './Switch5.demo.vue';
import Switch6Demo from './Switch6.demo.vue';
import Switch7Demo from './Switch7.demo.vue';
</script>

<style>
 .box {
   padding: 20px 0 10px 0;
 }
</style>