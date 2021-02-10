<template>
  <div>
    <navbar :picsrc="imgsrc"></navbar>
    <div class="seticon">
      <vicon name="setting-o" class="icons" @click.native="tocate"></vicon>
      <vtab :tabs="hometab" :homecurrent="current" @change="change" :btns="true">
        <vlist
          @load="loadmore"
          :finished="hometab[current].finished"
          :care="hometab[current].loading"
          v-if="show"
          @changecare="changecare"
        >
          <listitem
            v-if="show"
            :hometab="hometab[current].list"
            :current="current"
            class="list"
          ></listitem>
        </vlist>
      </vtab>
    </div>
  </div>
</template>

<script>
import navbar from "components/content/navbar";
import vtab from "components/vant/vtab.vue";
import listitem from "./childcomps/listitem";
import vlist from "../../components/vant/vlist";
import vicon from "../../components/vant/vicon.vue";
export default {
  name: "home",
  data() {
    return {
      imgsrc: "",
      hometab: [],
      current: 0,
      show: false,
    };
  },

  components: {
    navbar,
    vtab,
    listitem,
    vlist,
    vicon,
  },

  created() {
    this.getuser(), this.gethome();
  },

  activated(){
    this.gethome()
  },

  computed: {
    homedate() {
      return this.hometab[this.current].list;
    },
  },

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
        const newcate = JSON.parse(sessionStorage.getItem("newcate"));
        this.current = 0
        this.changedata(newcate)
      } else {
        const { data: res } = await this.$http.get("/category");
        //console.log(res)
        this.changedata(res);
        //console.log(typeof(this.current))
      }
    },
    changedata(val) {
      const category = val.map((item, index) => {
        item.list = [];
        item.page = -1;
        item.loading = false;
        item.finished = false;
        return item;
      });
      this.hometab = category;
      for (let i in this.hometab) {
        this.getdetail(i);
      }
      //console.log(this.hometab)
    },
    async getdetail(id) {
      const page = this.hometab[id].page + 1;
      const { data: res } = await this.$http.get(
        "/detail/" + this.hometab[id]._id,
        {
          params: { page, pagesize: 10 },
        }
      );
      this.hometab[id].list.push(...res);
      this.hometab[id].page += 1;
      this.hometab[id].loading = false;
      if (res.length < 10) {
        this.hometab[id].finished = true;
      }
      this.show = true;
      //console.log(this.hometab)
    },
    change(val) {
      //console.log(val)
      this.current = val;
      //this.getdetail(val)
    },
    loadmore() {
      setTimeout(() => {
        this.getdetail(this.current);
      }, 1000);
    },
    changecare(val) {
      //console.log(val);
      this.hometab[this.current].loading = val;
    },
    tocate() {
      //console.log('kkk')
      this.$router.push("/category");
    },
  },
};
</script>
<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.seticon {
  position: relative;
}
.icons {
  position: absolute;
  right: 0;
  z-index: 1;
  background-color: #fff;
  height: 44px;
  display: flex;
  align-items: center;
  width: 30px;
  justify-content: center;
}
</style>