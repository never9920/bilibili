<template>
  <div>
      <div v-for="(item,i) in hometab" :key="i">
          <div>{{item}}</div>
      </div>
  </div>
</template>

<script>
export default {
name:"listitem",
  data () {
    return {
        value:[]
    };
  },

  props:{
      hometab:{
          type:Array
      }
  },

  watch:{
      hometab(val){
          this.value = val
      }
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
</style>