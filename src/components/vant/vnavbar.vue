<template>
  <div>
      <van-nav-bar :title=title></van-nav-bar>
  </div>
</template>

<script>
export default {
name:"vnavbar",
  data () {
    return {
    };
  },

  props:{
      title:{
          type:String
      }
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
</style>