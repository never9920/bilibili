<template>
  <div>
      <van-nav-bar :title=title :right-text=right @click-right="qiehuan"></van-nav-bar>
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
      },
      right:{
        type:String
      }
  },

  components: {},

  computed: {},

  methods: {
    qiehuan(){
      this.$emit('change')
      //console.log('lll')
    }
  }
}

</script>
<style scoped>
</style>