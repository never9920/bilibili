<template>
  <div>
      <div  v-for="(item,i) in edititems" :key="i">
        <div v-if="item.type==='img'" class="item">
          <vupload class="load" size="97.5vw" @upload="upload"></vupload>
          <span>{{item.name}}</span>
          <slot></slot>
        </div>
        <div v-else class="item" @click="edit(i)">
          <span>{{item.name}}</span>
          <span v-if="item.name === '性别'&&item.desc === '1'" class="desc">男</span>
          <span v-else-if="item.name === '性别'&&item.desc === '2'" class="desc">女</span>
          <span v-else class="desc">{{item.desc}}</span>
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

  methods: {
    upload(file){
          this.$emit('upload',file)
          //console.log(file)
      },
      edit(i){
        this.$emit('change',i)
      }
  }
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
    border-radius: 50%;
}
.desc{
    color: #aaa;
}
</style>