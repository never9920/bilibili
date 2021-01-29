<template>
  <div class="userinfo">
      <navbar></navbar>
      <img src="~assets/img/bgc.png" class="image">
      <userdetail></userdetail>
      <vtab :tabs="tabs" :current="current" @change="change"></vtab>
  </div>
</template>

<script>
import navbar from 'components/content/navbar.vue';
import userdetail from './childcomps/userdetail.vue';
import vtab from 'components/vant/vtab'
export default {
name:"userinfo",
  data () {
    return {
      tabs:[{title:"动态",name:"dongtai"},{title:"视屏",name:"shiping"}],
      current:'dongtai'
    };
  },

  components: {
      navbar,
      userdetail,
      vtab
  },

  computed: {},

  methods: {
    change(val){
      this.current = val
    }
  }
}

</script>
<style scoped>
.image{
  width: 100%;
  height: 90px;
}
</style>