<template>
  <div class="navbar">
    <div class="logo" @click="tohome">
      <img src="~assets/img/logo.png" />
    </div>
    <div class="center">
      <div>
        <vicon name="search" class="icon" size="16px"></vicon>
        <div>请输入需要搜索的内容</div>
      </div>
    </div>
    <div class="right">
      <img :src="imgsrc" @click="toinfo" />
      <p class="btns" @click="download">下载App</p>
    </div>
  </div>
</template>

<script>
import vicon from "../vant/vicon";
export default {
  name: "navbar",
  data() {
    return {
      imgsrc: require("@/assets/img/touxiang.jpg"),
    };
  },

  props: {
    picsrc: {
      type: String,
    },
  },

  watch: {
    picsrc(val) {
      this.imgsrc = val;
    },
  },

  components: {
    vicon,
  },

  computed: {},

  methods: {
    download() {
      //this.$router.push('https://www.bilibili.com/')
      window.open("https://www.bilibili.com/", "_self");
    },
    /*async getuser(){
          const {data:res} = await this.$http.get('/user/' + sessionStorage.getItem('id'))
          //console.log(res)
          this.imgsrc = res[0].user_img
          if(!this.imgsrc){
              this.imgsrc = require('@/assets/img/touxiang.jpg')
          }
      },*/
    toinfo() {
      //console.log(this.$route)
      if (sessionStorage.getItem("id")) {
        if (this.$route.fullPath !== "/userinfo") {
          this.$router.push("/userinfo");
        }
      } else {
        this.$router.push("/login");
      }
    },
    tohome() {
      if (this.$route.fullPath !== "/home") {
        this.$router.push("/home");
      }
    },
  },
};
</script>
<style scoped lang="less">
.navbar {
  height: 44px;
  background-color: #fff;
  display: flex;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  .logo {
    width: 100px;
    display: flex;
    justify-content: center;
    align-content: center;
    img {
      width: 100%;
    }
  }
  .center {
    flex: 1;
    display: flex;
    align-content: center;
    div {
      background-color: #f4f4f4;
      width: 90%;
      border-radius: 10px;
      display: flex;
      margin: 7px 0;
      text-align: center;
      align-content: center;
      .icon {
        color: #aaa;
        width: 20px;
        margin: 7px 5px;
      }
      div {
        color: #aaa;
        font-size: 12px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .right {
    display: flex;
    img {
      width: 24px;
      height: 24px;
      position: relative;
      top: 10px;
      border-radius: 50%;
    }
    .btns {
      background-color: pink;
      border-radius: 10px;
      height: 30px;
      position: relative;
      top: 7px;
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