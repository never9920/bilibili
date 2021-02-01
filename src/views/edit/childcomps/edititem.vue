<template>
  <div>
      <div  v-for="(item,i) in edititems" :key="i">
        <div v-if="item.type==='img'" class="item">
          <vupload class="load" size="100vw"></vupload>
          <span>{{item.name}}</span>
          <slot></slot>
        </div>
        <div v-else class="item">
          <span>{{item.name}}</span>
          <span class="desc">{{item.desc}}</span>
        </div>
      </div>
  </div>
</template>

<script>
import vupload from 'components/vant/vupload'
export default {
name:"edititem",
  data () {
    return {
    };
  },

  props:{
      edititems:{
          type:Array
      },
  },

  components: {
    vupload
  },

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
    position: relative;
}
.load{
  position: absolute;
  left: 0;
  top:0;
  opacity: 0;
}
.item img{
    width: 46px;
    height: 46px;
}
.desc{
    color: #aaa;
}
</style>