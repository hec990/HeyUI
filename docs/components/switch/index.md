### 演示
<SwitchDemo/>

### 使用组件

```html
<!-- 1. 基础开关-->
<Switch v-model:value="bool"></Switch>
<!-- 2. 禁用-->
<Switch v-model:value="bool" disabled></Switch>
```

```vue
<script>
import Switch from "../../../src/lib/Switch.vue";
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
