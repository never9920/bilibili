<template>
  <div>
    <van-icon :name="name" :size="size"></van-icon>
  </div>
</template>

<script>
export default {
  name: "vicon",
  data() {
    return {};
  },

  props: {
    name: {
      type: String,
    },
    size: {
      type: String,
    },
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style scoped>
</style>