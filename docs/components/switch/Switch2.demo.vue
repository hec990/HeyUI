<template>
  <div>
    <Switch v-model:value="value1" :disabled="x"></Switch>
    <br>
    <Switch v-model:value="value2" :disabled="x"></Switch>
  </div>
  <button @click="x = !x" class="x">toggle</button>
  <span class="y">{{x}}</span>
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
    const x = ref(true)
    return {
      value1,
      value2,
      x
    }
  }
}
</script>

<style>
 .x {
   padding: 3px;
   margin-top: 10px;
   /*border: 1px solid red;*/
 }
 .y {
   margin-left: 10px;
 }
</style>