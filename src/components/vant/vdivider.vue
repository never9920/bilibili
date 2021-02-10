<template>
  <div>
      <van-divider :style="divstyle">{{text}}</van-divider>
  </div>
</template>

<script>
export default {
name:"vdivider",
  data () {
    return {
    };
  },

  props:{
      text:{
          type:String
      },
      divstyle:{
          type:Object
      }
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
</style>