<template>
  <div class="nav">
    <van-nav-bar
      :title="title"
      :right-text="right"
      @click-right="qiehuan"
      :left-text="left"
      @click-left="onClickLeft"
    >
      <template #left>
        <slot></slot>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "vnavbar",
  data() {
    return {};
  },

  props: {
    title: {
      type: String,
    },
    right: {
      type: String,
    },
    left: {
      type: String,
    },
  },

  components: {},

  computed: {},

  methods: {
    qiehuan() {
      this.$emit("change");
      //console.log('lll')
    },
    onClickLeft() {
      this.$emit("back");
    },
  },
};
</script>
<style lang="less">
.nav .van-nav-bar__text {
  color: #fb7a9f;
}
</style>