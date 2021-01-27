<template>
  <div>
    <van-field 
    v-model="value" 
    :label=label 
    :placeholder=placeholder 
    :type=type
    :rule=rule />
  </div>
</template>

<script>
export default {
name:"vfield",
  data () {
    return {
        value:''
    };
  },

  props:{
      label:{
        type:String
      },
      placeholder:{
        type:String
      }, 
      rule:{
        type:String 
      },
      type:{
        type:String
      }
  },

  components: {},

  computed: {},

  watch:{
    value(){
      this.test()
    }
  },

  methods: {
    test(){
      //console.log(this.rule)
      const rule = new RegExp(this.rule)
      //console.log(rule)
      if(rule.test(this.value)){
        this.$emit('log',this.value)
        //console.log(this.value)
      }
    }
  }
}

</script>
<style scoped>
</style>