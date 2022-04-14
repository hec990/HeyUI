### 演示
<Switch :value="bool" @update:value="bool = $event"></Switch>

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