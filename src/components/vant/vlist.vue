<template>
  <div>
    <van-list
      @load="onLoad"
      finished-text="没有更多了"
      :finished="finished"
      v-model="value"
    >
      <slot></slot>
    </van-list>
  </div>
</template>

<script>
export default {
  name: "vlist",
  data() {
    return {
      value: false,
    };
  },

  props: ["care", "finished"],

  watch: {
    value(val) {
      this.$emit("changecare", val);
    },
    care(val) {
      this.value = val;
    },
  },

  components: {},

  computed: {},

  methods: {
    onLoad() {
      this.$emit("load");
    },
  },
};
</script>
<style scoped>
</style>