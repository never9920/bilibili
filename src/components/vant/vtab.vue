<template>
  <div :class={btns:btns}>
    <van-tabs
      v-model="activename"
      title-active-color="#fb7a9f"
      color="#fff"
      swipeable
      sticky
    >
      <van-tab
        :title="item.title"
        v-for="(item, i) in tabs"
        :key="i"
        :name="item.name"
      >
        <slot>{{ item.title }}</slot>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  name: "vtab",
  data() {
    return {
      activename: "",
    };
  },

  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
    current: {
      type: String,
    },
    homecurrent: {
      type: Number,
    },
    btns:{
        type:Boolean,
        default:false
    }
  },

  watch: {
    activename() {
      this.$emit("change", this.activename);
    },
    current() {
      this.activename = this.current;
    },
    homecurrent(val) {
      this.activename = val;
    },
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style lang="less">
.btns .van-sticky{
  width:calc(100% - 30px);
}
.btns .van-sticky--fixed{
  width: 100%;
}
</style>