<template>
  <div>
      <van-tabs v-model="activename" title-active-color="#fb7a9f" color="#fff">
          <van-tab :title="item.title" v-for="(item,i) in tabs" :key="i" :name="item.name">
              <slot>{{item.title}}</slot>
          </van-tab>
      </van-tabs>
  </div>
</template>

<script>
export default {
name:"vtab",
  data () {
    return {
        activename:"dongtai"
    };
  },

  props:{
      tabs:{
          type:Array,
          default:()=>[]
      },
      current:{
          type:String,
          default:"dongtai"
      }
  },

  watch:{
      activename(){
          this.$emit('change',this.activename)
      },
      current(){
          this.activename = this.current
      }
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
</style>