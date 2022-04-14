### 演示
<Switch v-model:value="bool"></Switch>

### 使用组件
```html
<Switch v-model:value="bool"></Switch>
```

```vue
<script>
    import Switch from "../../../src/lib/Switch.vue";
    import {ref} from 'vue';
    
    export default {
        components: {Switch},
        setup(){
          const bool = ref(false);

          return {
            bool
          }
        }
    }
</script>
```

<script>
    import {ref} from 'vue';
    import Switch from "../../../src/lib/Switch.vue";
    export default {
        components: {Switch},
        setup(){
          const bool = ref(false);

          return {
            bool
          }
        }
    }
</script>
