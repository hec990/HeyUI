# Icon
### 引入
```JavaScript
import { HeyIcon } from './lib/hey-icon'
```

### 图标名称 name
<div class="box">
 <IconDemo1/>
</div>

::: details 查看代码
```vue
 <hey-icon name="tongzhi"></hey-icon>
 <hey-icon name="dingwei"></hey-icon>
 <hey-icon name="chazhao"></hey-icon>
 <hey-icon name="linggan"></hey-icon>
```
:::

### 尺寸 Size
<div class="box">
 <IconDemo2/>
</div>

::: details 查看代码
```vue
  <hey-icon name="xihuan" :size="30"></hey-icon>
  <hey-icon name="xihuan" :size="40"></hey-icon>
  <hey-icon name="xihuan" :size="50"></hey-icon>
  <hey-icon name="xihuan" :size="60"></hey-icon>
```
:::

### 旋转 spin
<div class="box">
 <IconDemo3/>
</div>

::: details 查看代码
```vue
  <hey-icon name="xihuan" spin></hey-icon>
  <hey-icon name="kangfuke" spin></hey-icon>
  <hey-icon name="shuoming" spin></hey-icon>
  <hey-icon name="lishi" spin></hey-icon>
```
:::

### Attributes
|   参数   |     说明     |  类型   |   可选值    | 默认值 |
| :------: | :----------: | :-------: | :---------: | :----: |
| name |    显示图标    |  String  |     --      |   --   |
| size  | 设置图标大小 | Number | 任意 | 25px  |
| spin  | 是否旋转 | Boolean | true / false | false  |


<script setup>
import IconDemo1 from "./IconDemo1.vue";
import IconDemo2 from "./IconDemo2.vue";
import IconDemo3 from "./IconDemo3.vue";
</script>

<style>
 .box {
   padding: 20px 0 10px 0;
 }
</style>
