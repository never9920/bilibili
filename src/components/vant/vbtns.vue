<template>
  <div>
      <van-button 
      :color=color 
      :size=size 
      :type=type 
      :round=round
      @click="submit">
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

  methods: {
      submit(){
          this.$emit('submit')
      }
  }
}

</script>
<style scoped>
</style>