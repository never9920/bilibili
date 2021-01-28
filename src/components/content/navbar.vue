<template>
  <div class="navbar">
      <div class="logo">
          <img src="~assets/img/logo.png">
      </div>
      <div class="center">
          <div>
              <vicon name="search" class="icon" size="16px"></vicon>
              <div>请输入需要搜索的内容</div>
          </div>
      </div>
      <div class="right">
          <img src="~assets/img/touxiang.jpg">
          <p class="btns">下载App</p>
      </div>
  </div>
</template>

<script>
import vicon from '../vant/vicon'
export default {
name:"navbar",
  data () {
    return {
    };
  },

  components: {
      vicon
  },

  computed: {},

  methods: {}
}

</script>
<style scoped lang="less">
.navbar{
   height: 44px;
   background-color: #fff; 
   display: flex;
   box-shadow: 0 1px 1px rgba(100,100,100,0.1);
   .logo{

       width: 100px;
       display: flex;
       justify-content: center;
       align-content: center;
       img{
        width: 100%;
       }
    }
    .center{
        flex:1;
        display: flex;
        align-content: center;
        div{
            background-color: #f4f4f4;
            width: 90%;
            border-radius: 10px;
            display: flex;
            margin: 7px 0; 
            text-align: center;
            align-content: center;
            .icon{
                color: #aaa;
                width: 20px;
                margin: 7px 5px;
            }
            div{
                color: #aaa;
                font-size: 12px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
    }
    .right{
        display: flex;
        img{
            width: 24px;
            height: 24px;
            position: relative;
            top:10px;
        }
        .btns{
            background-color: pink;
            border-radius: 10px;
            height: 30px;
            position: relative;
            top:7px;
            color: #fff;
            width: 80px;
            text-align: center;
            margin: 0 5px;
            padding: 0 5px;
            line-height: 30px;
        }
    }
}
</style>