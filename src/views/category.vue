<template>
  <div>
    <navbar :picsrc="imgsrc"></navbar>
    <div class="title">自定义首页栏目</div>
    <vdivider
      text="现有栏目"
      :divstyle="{
        color: '#fb7299',
        borderColor: '#fb7299',
        padding: '0 15px',
      }"
    ></vdivider>
    <div class="allitems">
      <div
        v-for="(item, i) in newcate"
        :key="i"
        class="items"
        @click="delitem(i)"
      >
        {{ item.title }}
      </div>
    </div>
    <vdivider
      text="未选择栏目"
      :divstyle="{
        color: 'skyblue',
        borderColor: 'skyblue',
        padding: '0 15px',
      }"
    ></vdivider>
    <div class="allitems">
      <div
        v-for="(item, i) in delcate"
        :key="i"
        class="items1"
        @click="additem(i)"
      >
        {{ item.title }}
      </div>
    </div>
    <div class="btns" @click="makesure">确认</div>
  </div>
</template>

<script>
import navbar from "components/content/navbar";
import vdivider from "../components/vant/vdivider.vue";
export default {
  name: "component_name",
  data() {
    return {
      imgsrc: "",
      newcate: [],
      delcate: [],
    };
  },

  components: {
    navbar,
    vdivider,
  },

  created() {
    this.getuser(), this.gethome();
  },

  computed: {},

  methods: {
    async getuser() {
      if (sessionStorage.getItem("id")) {
        const { data: res } = await this.$http.get(
          "/user/" + sessionStorage.getItem("id")
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
    async gethome() {
      if (sessionStorage.getItem("newcate") && sessionStorage.getItem("delcate")) {
        this.newcate = JSON.parse(sessionStorage.getItem("newcate"));
        this.delcate = JSON.parse(sessionStorage.getItem("delcate"));
      } else {
        const { data: res } = await this.$http.get("/category");
        //console.log(res)
        this.newcate = res;
        //console.log(typeof(this.current))
      }
    },
    delitem(i) {
      //console.log(i)
      this.delcate.push(this.newcate[i]);
      this.newcate.splice(i, 1);
    },
    additem(i) {
      this.newcate.push(this.delcate[i]);
      this.delcate.splice(i, 1);
    },
    makesure() {
      //console.log(this.newcate)
      //console.log(this.delcate)
      sessionStorage.setItem("newcate", JSON.stringify(this.newcate));
      sessionStorage.setItem("delcate", JSON.stringify(this.delcate));
      this.$toast.success("自定义栏目成功");
      this.$router.push("/home");
    },
  },
};
</script>
<style scoped>
.title {
  height: 30px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  margin: 20px 0 0 0;
}
.allitems {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.items {
  border: solid 1px #fb7299;
  padding: 10px 20px;
  margin: 10px 10px;
  color: #fb7299;
  border-radius: 10px;
}
.items1 {
  border: solid 1px skyblue;
  padding: 10px 20px;
  margin: 10px 10px;
  color: skyblue;
  border-radius: 10px;
}
.btns {
  display: flex;
  margin: 20px 10px;
  padding: 5px 0;
  background-color: #fb7299;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
}
</style>