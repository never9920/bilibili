<template>
  <div>111</div>
</template>

<script>
export default {
  name: "commentitem",
  data() {
    return {};
  },

  created() {
    this.getcomitem();
  },

  watch: {
    $route() {
      this.getcomitem();
    },
  },

  components: {},

  computed: {},

  methods: {
    async getcomitem() {
      console.log(this.$route.params.id);
      const res = await this.$http.get("/comment/" + this.$route.params.id);
      console.log(res);
    },
  },
};
</script>
<style scoped>
</style>