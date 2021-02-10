<template>
  <div class="edit">
    <navbar :picsrc="model.user_img"></navbar>
    <div>
      <edititem
        :edititems="edititems"
        class="items"
        @upload="upload"
        @change="change"
      >
        <img :src="edititems[0].desc" />
        <!--<img v-else src="~assets/img/touxiang.jpg">-->
      </edititem>
    </div>
    <div class="btns" @click="tuichu">退出登录</div>
    <div class="btns" @click="goback">返回空间</div>
    <vdialog :isshow="isshow" :title="title" @submit="submit" @guan="guan">
      <vfield @log="log" :word="num" :rule="rule"></vfield>
    </vdialog>
  </div>
</template>

<script>
import navbar from "components/content/navbar";
import edititem from "./childcomps/edititem";
import vdialog from "components/vant/vdialog.vue";
import vfield from "components/vant/vfield.vue";
export default {
  name: "edit",
  data() {
    return {
      edititems: [
        {
          name: "头像",
          type: "img",
          desc: require("@/assets/img/touxiang.jpg"),
        },
        { name: "昵称", desc: "", rule: "^.{3,16}$" },
        { name: "UID", desc: "" },
        { name: "性别", desc: "", rule: "^男$|^女$" },
        { name: "出生日期", desc: "01-01" },
        { name: "个性签名", desc: "", rule: "^.{6,16}$" },
      ],
      model: {},
      isshow: false,
      title: "",
      num: -1,
      word: "",
      rule: "",
    };
  },

  components: {
    navbar,
    edititem,
    vdialog,
    vfield,
  },

  created() {
    this.getedit();
  },

  destroyed() {
    this.$bus.$off("load");
  },

  computed: {
    /*rule:function(){
      if(this.num === 1){
        return '^.{3,16}$'
      }else if(this.num === 3){
        return '^男$|^女&'
      }else if(this.num === 5){
        return '^.{6,16}$'
      }
    }*/
  },

  methods: {
    goback() {
      this.$router.back();
    },
    tuichu() {
      sessionStorage.clear();
      this.$router.push("/login");
    },
    async getedit() {
      const res = await this.$http.get("/user/" + sessionStorage.getItem("id"));
      //console.log(res)
      this.model = res.data[0];
      //console.log(typeof(this.model.gender))
      if (res.data[0].user_img) {
        //console.log('true')
        this.edititems[0].desc = res.data[0].user_img;
        //this.show = true
      } else {
        //console.log('false')
        this.edititems[0].desc = require("@/assets/img/touxiang.jpg");
        //this.show = false
      }
      this.edititems[1].desc = res.data[0].username;
      this.edititems[2].desc = res.data[0].id;
      this.edititems[3].desc = res.data[0].gender;
      this.edititems[5].desc = res.data[0].user_desc;
    },
    async upload(file) {
      const from = new FormData();
      from.append("file", file.file);
      //'file'由后端决定
      const res = await this.$http.post("/upload", from);
      //console.log(res)
      this.edititems[0].desc = res.data.url;
      this.model.user_img = res.data.url;
      //this.show = true
      //console.log(res.data.url)
      this.update();
    },
    async update() {
      const res = await this.$http.post(
        "/update/" + sessionStorage.getItem("id"),
        this.model
      );
      //console.log(res)
      if (res.data.code === 200) {
        this.$toast.success("修改成功");
      } else {
        this.$toast.fail("修改失败");
      }
    },
    change(i) {
      //console.log(i)
      if (i === 3 || i === 1 || i === 5) {
        this.rule = this.edititems[i].rule;
        this.isshow = true;
        this.title = "修改" + this.edititems[i].name;
        this.num = i;
      }
    },
    log(value) {
      //console.log(value)
      this.word = value;
    },
    submit() {
      if (this.word === "") {
        this.$toast.fail("格式不正确");
      } else {
        if (this.num === 1) {
          this.model.username = this.word;
          this.edititems[1].desc = this.word;
        } else if (this.num === 3) {
          //console.log(this.word)
          if (this.word === "男") {
            this.model.gender = 1;
            this.edititems[3].desc = "1";
          } else {
            this.model.gender = 0;
            this.edititems[3].desc = "0";
          }
        } else if (this.num === 5) {
          this.model.user_desc = this.word;
          this.edititems[5].desc = this.word;
        }
        this.update();
      }
      this.isshow = false;
      this.num = -1;
      this.word = "";
    },
    guan() {
      this.isshow = false;
      this.num = -1;
      this.word = "";
    },
  },
};
</script>
<style scoped>
.edit {
  height: 667px;
  background-color: #f4f4f4;
}
.items {
  margin: 15px 0;
}
.btns {
  padding: 15px;
  background-color: #fff;
  text-align: center;
}
</style>