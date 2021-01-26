<template>
  <div>
      <van-button 
      :color=color 
      :size=size 
      :type=type 
      :round=round>
      {{text}}
      </van-button>
  </div>
</template>

<script>
export default {
name:"vbtns",
  data () {
    return {
    };
  },

  props:{
      color:{
          type:String
      },
      size:{
          type:String
      },
      type:{
          type:String
      },
      round:{
          type:Boolean
      },
      text:{
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