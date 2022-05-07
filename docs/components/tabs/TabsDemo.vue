<template>
  <hey-tabs selected="about">
    <hey-tabs-head>
      <hey-tabs-item name="home">首页</hey-tabs-item>
      <hey-tabs-item name="about">关于</hey-tabs-item>
    </hey-tabs-head>
    <hey-tabs-body>
      <hey-tabs-pane name="home">我是首页内容</hey-tabs-pane>
      <hey-tabs-pane name="about">我是关于内容</hey-tabs-pane>
    </hey-tabs-body>
  </hey-tabs>
</template>

<script>
import heyTabs from '../../../src/lib/tabs/hey-tabs.vue';
import heyTabsHead from '../../../src/lib/tabs/hey-tabs-head.vue';
import heyTabsItem from '../../../src/lib/tabs/hey-tabs-item.vue';
import heyTabsBody from '../../../src/lib/tabs/hey-tabs-body.vue';
import heyTabsPane from '../../../src/lib/tabs/hey-tabs-pane.vue';

export default {
  components:{
    heyTabs,
    heyTabsHead,
    heyTabsItem,
    heyTabsBody,
    heyTabsPane
  }
}
</script>