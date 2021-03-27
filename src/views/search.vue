<template>
  <div class="search">
    <div class="navbar">
      <div class="mine">
        <vicon name="search" size="16px" class="icons"></vicon>
        <input
          type="text"
          placeholder="请输入要搜索的内容"
          ref="insearch"
          v-model="content"
        />
      </div>
      <button @click="goback">取消</button>
    </div>
    <div class="tishi">
      <div v-for="(item, i) in resou" :key="i" class="item" @click="chinput(item.name)">
        {{ i + 1 }}.{{ item.name }}
      </div>
    </div>
    <div class="xia">
      <div class="title">
        <div>搜索历史</div>
        <div v-show="isshow" style="color:#aaa" @click="chstyle">展开</div>
        <div v-show="!isshow" style="color:#aaa" @click="chstyle">收起</div>
      </div>
      <div class="lishi" :class="{active:isshow}">
        <div v-for="(item,i) in lishi" :key="i" class="his" @click="chinput(item.name)">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import vicon from "components/vant/vicon.vue";
export default {
  name: "search",
  data() {
    return {
      content: "",
      resou: [
        { name: "最高检报告点名辣笔小球" },
        { name: "70国支持中方涉港举措 外交部回应" },
        { name: "代表建议设立汉字日" },
        { name: "最高法报告点名赵正永和赖小民" },
        { name: "赵立坚介绍中国版国际旅行健康证明" },
        { name: "台湾遇缺水危机 民进党办祈雨法会" },
        { name: "沙特石油重镇遇袭 国际油价大涨" },
        { name: "代表建议关注农村未婚男青年诉求" },
        { name: "袁隆平宋应星跨越300多年的握手" },
        { name: "刘雯成首个有芭比形象的亚洲模特" },
      ],
      lishi:[
        {name:'前端工作者'},
        {name:'前端项目'},
        {name:'电商项目'},
        {name:'vue建设后台'},
        {name:'element-ui'},
        {name:'vant插件'},
        {name:'仿bilibili'},
        {name:'html'},
        {name:'css'},
        {name:'javascript'},
        {name:'vue全家桶'},
        ],
      isshow:true
    };
  },

  mounted() {
    this.focusinput();
  },

  components: { vicon },

  computed: {},

  methods: {
    goback() {
      this.$router.back();
    },
    focusinput() {
      this.$refs.insearch.focus();
    },
    chstyle(){
      this.isshow = !this.isshow
    },
    chinput(name){
      this.content = name
    }
  },
};
</script>
<style scoped>
.navbar {
  display: flex;
  padding: 7px 10px;
  height: 30px;
  box-shadow: 0 2px 2px #f1f1f1;
  background-color: #fb7299;
}
.mine {
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 5px;
  width: 80%;
  margin-right: 10px;
  border-radius: 15px;
}
.mine input {
  outline: none;
  border: 0;
  padding: 0 10px 0 15px;
  font-size: 12px;
  width: 100%;
  height: 100%;
}
.navbar button {
  outline: none;
  border: 0;
  background-color: #fb7299;
  color: #fff;
  font-size: 12px;
  width: 50px;
  margin-left: 5px;
  border-radius: 15px;
  border: solid 1px #f4f4f4;
}
.tishi {
  display: flex;
  padding: 20px 10px;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.item {
  width: 45%;
  margin: 5px 0;
  color: #aaa;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.xia{
  padding: 0 10px;
}
.title{
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}
.lishi{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.his{
  font-size: 12px;
  background-color: #f2f2f2;
  padding: auto;
  padding: 8px 10px;
  margin: 5px 5px 5px 0;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
.active{
  height: 80px;
  overflow: hidden;
}
</style>