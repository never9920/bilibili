<template>
  <div id="search">
    <div class="navbar">
      <img src="~assets/img/fan.svg" @click="tohome"/>
      <div class="center">
        <vicon name="search" class="icon" size="16px"></vicon>
        <input type="text"
        placeholder="请输入需要搜索的内容"
        v-model="content"
        @blur="clear"/>
      </div>
      <div class="text" @click="tohome">取消</div>
    </div>
  </div>
</template>

<script>
import vicon from "components/vant/vicon";
export default {
  name: "search",
  data() {
    return {
    content:''
    };
  },

  components: {
    vicon,
  },

  computed: {},

  methods: {
      clear(){
          this.content =''
      },
      tohome(){
          this.$router.push('/home')
      }
  },
};
</script>
<style scoped>
.navbar {
  display: flex;
  height: 44px;
  padding: 0 15px;
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  align-items: center;
  justify-content: space-between;
}
.navbar img {
  width: 16px;
  height: 16px;
}
.center{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.icon{
    height: 16px;
    width: 16px;
}
.center input{
    background-color: #f4f4f4;
    border: none;
    color: #555;
    height: 60%;
    border-radius: 14px;
}
.text{
    color:#fb7299
}
</style>