<template>
  <div>
    <van-uploader :after-read="upload" :preview-size="size"></van-uploader>
  </div>
</template>

<script>
export default {
  name: "vupload",
  data() {
    return {};
  },

  props: {
    size: {
      type: String,
    },
  },

  components: {},

  computed: {},

  methods: {
    upload(file) {
      this.$emit("upload", file);
    },
  },
};
</script>
<style scoped>
</style>