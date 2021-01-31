<template>
  <div>
      <div  v-for="(item,i) in edititems" :key="i"  class="item">
      <span>{{item.name}}</span>
      <img v-if="item.type==='img'&&item.desc==='default'" src="~assets/img/touxiang.jpg">
      <img v-else-if="item.type==='img'&&item.desc!=='default'" :src=item.desc>
      <span v-else class="desc">{{item.desc}}</span>
      </div>
  </div>
</template>

<script>
export default {
name:"edititem",
  data () {
    return {
    };
  },

  props:{
      edititems:{
          type:Array
      }
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
.item{
    background-color: #fff;
    padding: 15px;
    font-size: 16px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    border-bottom: solid 1px #f4f4f4;
}
.item img{
    width: 46px;
    height: 46px;
}
.desc{
    color: #aaa;
}
</style>