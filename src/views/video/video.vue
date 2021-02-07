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
        <div v-if="model.userinfo" class="detailfo">
          <span class="third">{{ model.userinfo.name }}</span>
          <span class="second">168万次播放</span>
          <span class="second">6688弹幕</span>
          <span class="second">{{ model.date }}</span>
        </div>
        <div class="icons">
          <div @click="show1 = !show1">
            <img v-if="show1" src="~assets/img/shou.svg" />
            <img v-else src="~assets/img/shoupink.svg" />
            <span>收藏</span>
          </div>
          <div @click="show2 = !show2">
            <img v-if="show2" src="~assets/img/xia.svg" />
            <img v-else src="~assets/img/xiapink.svg" />
            <span>缓存</span>
          </div>
          <div @click="show3 = !show3">
            <img v-if="show3" src="~assets/img/fen.svg" />
            <img v-else src="~assets/img/fenpink.svg" />
            <span>分享</span>
          </div>
        </div>
      </div>
      <listitem :hometab="comment" class="list"></listitem>
      <comment :picsrc="imgsrc"></comment>
      <commentitem></commentitem>
    </div>
  </div>
</template>

<script>
import navbar from "components/content/navbar";
import listitem from "../home/childcomps/listitem";
import comment from "./childcomps/comment.vue";
import commentitem from "./childcomps/commentitem.vue";
export default {
  name: "home",
  data() {
    return {
      imgsrc: "",
      model: [],
      show1: true,
      show2: true,
      show3: true,
      comment: [],
    };
  },

  components: {
    navbar,
    listitem,
    comment,
    commentitem,
  },

  created() {
    this.getuser(), this.getvideo(), this.getcomment();
  },

  computed: {},

  watch: {
    $route() {
      //console.log('bianhua')
      this.getvideo(), this.getcomment();
      scrollTo(0, 0);
    },
  },

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
    async getcomment() {
      const { data: res } = await this.$http.get("/commend");
      this.comment = res;
      //console.log(res)
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
.detailfo {
  padding: 15px 10px;
}
.second {
  color: #aaa;
  font-size: 12px;
  padding: 0 10px;
}
.third {
  color: black;
  font-size: 14px;
  padding-right: 10px;
}
.icons {
  display: flex;
  font-size: 12px;
}
.icons div {
  display: flex;
  margin-right: 15px;
  align-items: center;
  justify-items: center;
}
.icons img {
  height: 20px;
  width: 20px;
  margin-right: 3px;
}
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>