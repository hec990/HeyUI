### 演示
<SwitchDemo/>

### 使用组件

```html
<!-- 1. 默认按钮-->
<Switch v-model:value="bool" ></Switch>
<!-- 2. 自定义颜色-->
<Switch v-model:value="bool" active-color="#008000" inactive-color="#00CED1"></Switch>
<!-- 3. 禁用-->
<Switch v-model:value="bool" disabled></Switch>
```

```vue

<script>
import Switch from "./hey-switch.vue";
import {ref} from 'vue';

export default {
  components: {Switch},
  setup() {
    const bool = ref(false);

    return {
      bool
    }
  }
}
</script>
```

<script>
    import SwitchDemo from "./SwitchDemo.vue";
    export default {
        components: {SwitchDemo},
    }
</script>
