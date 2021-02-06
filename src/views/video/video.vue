<template>
  <div>
    <navbar :picsrc="imgsrc"></navbar>
    <div>
      <div class="video">
        <video :src="model.content" controls="controls"></video>
      </div>
      <div class="detailinfo">
        <div v-if="model.category" class="detailin">
          <span class="first">{{ model.category.title }}</span>
          <span>{{ model.name }}</span>
        </div>
        <div class="detailfo">
          <span class="third">{{ model.userinfo.name }}</span>
          <span class="second">168万次播放</span>
          <span class="second">6688弹幕</span>
          <span class="second">{{ model.date }}</span>
        </div>
        <div class="icons">
            <div @click="show1=!show1">
            <img v-if="show1" src="~assets/img/shou.svg" />
            <img v-else src="~assets/img/shoupink.svg">
            <span>收藏</span>
            </div>
            <div @click="show2=!show2">
            <img v-if="show2" src="~assets/img/xia.svg">
            <img v-else src="~assets/img/xiapink.svg">
            <span>下载</span>
            </div>
            <div @click="show3=!show3">
            <img v-if="show3" src="~assets/img/fen.svg">
            <img v-else src="~assets/img/fenpink.svg">
            <span>分享</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from "components/content/navbar";
export default {
  name: "home",
  data() {
    return {
      imgsrc: "",
      model: [],
      show1:true,
      show2:true,
      show3:true,
    };
  },

  components: {
    navbar,
  },

  created() {
    this.getuser(), this.getvideo();
  },

  computed: {},

  methods: {
    async getuser() {
      if (localStorage.getItem("id")) {
        const { data: res } = await this.$http.get(
          "/user/" + localStorage.getItem("id")
        );
        //console.log(res)
        this.imgsrc = res[0].user_img;
        if (!this.imgsrc) {
          this.imgsrc = require("@/assets/img/touxiang.jpg");
        }
        //console.log(this.imgsrc)
      } else {
        this.imgsrc = require("@/assets/img/touxiang.jpg");
        //console.log(this.imgsrc)
      }
    },
    async getvideo() {
      const { data: res } = await this.$http(
        "/article/" + this.$route.params.id
      );
      this.model = res[0];
      //console.log(this.model)
    },
  },
};
</script>
<style scoped>
.video {
  width: 100%;
}
.video video {
  width: 100%;
}
.detailinfo {
  padding: 15px;
}
.first {
  padding: 5px 10px;
  color: #fb7299;
  background-color: #f4f4f4;
  border-radius: 10px;
  font-size: 12px;
}
.detailfo{
    padding: 10px;
}
.second{
    color:#aaa;
    font-size: 12px;
    padding: 0 10px;
}
.third{
    color: black;
    font-size: 14px;
    padding-right: 10px;
}
.icons{
    display: flex;
    justify-content: space-around;
}
.icons img{
    height: 16px;
    width: 16px;
}
</style>