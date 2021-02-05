<template>
  <div>
    <van-dialog
      v-model="show"
      :title="title"
      show-cancel-button
      @confirm="confirm"
      @cancel="cancel"
    >
      <slot></slot>
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: "vdialog",
  data() {
    return {
      show: false,
    };
  },

  props: {
    isshow: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
  },

  watch: {
    isshow(val) {
      this.show = val;
    },
    show() {
      this.$emit("close");
    },
  },

  components: {},

  computed: {},

  methods: {
    confirm() {
      this.$emit("submit");
    },
    cancel() {
      this.$emit("guan");
    },
  },
};
</script>
<style scoped>
</style>