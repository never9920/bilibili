<template>
  <div class="comment">
      <div>
          <p>
              <span>评论</span>
              <span class="num">(4070)</span>
          </p>
      </div>
      <div class="mine">
         <img :src="picsrc"> 
         <input type="text" placeholder="说点什么吧">
         <button @click="checkuser">发表</button>
      </div>
      
  </div>
</template>

<script>
export default {
name:"comment",
  data () {
    return {
    };
  },

  props:{
      picsrc:{
          type:String
      }
  },

  components: {},

  computed: {},

  methods: {
      checkuser(){
          if(!localStorage.getItem('id')&&!localStorage.getItem('token')){
              this.$toast.fail('请先登录')
              this.$router.push('/login')
          }
      }
  }
}

</script>
<style scoped>
.comment{
    padding: 30px 10px;
}
.num{
    color: #aaa;
    margin-left:10px ;
}
.mine img{
    height: 25px;
    width: 25px;
    border-radius: 50%;
}
.mine{
    padding:0 10px;
    display: flex;
    width: 90%;
}
.mine input{
    outline: none;
    border: 0;
    background-color: #f4f4f4;
    border-radius: 12.5px;
    padding:0 10px 0 15px;
    margin-left:10px ;
    font-size: 12px;
    width: 60%;
}
.mine button{
    outline: none;
    border: 0;
    border-radius: 12px;
    background-color: #fb7299;
    color: white;
    font-size: 12px;
    padding:0  15px;
    margin-left:10px ;
}
</style>