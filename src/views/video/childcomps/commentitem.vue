<template>
  <div class="comitem">
    <div class="item" v-for="(item, i) in commdentdata" :key="i">
      <div class="itemimg">
        <img
          v-if="item.userinfo && item.userinfo.user_img"
          :src="item.userinfo.user_img"
          alt=""
        />
        <img v-else src="~assets/img/touxiang.jpg" alt="" />
      </div>
      <div class="iteminfo">
        <p>
          <span v-if="item.userinfo && item.userinfo.name" class="name">{{
            item.userinfo.name
          }}
          <img v-if="reid === item.user_id" src="~assets/img/up.svg">
          </span>
          <span v-else>此用户未命名</span>
          <span v-if="item.comment_date">{{ item.comment_date }}</span>
          <span v-else>04-17</span>
        </p>
        <div class="text" v-if="item.comment_content">
          {{ item.comment_content }}
          <span class="publish" @click="userpub(item)">回复</span>
        </div>
        <div class="text" v-else>
           此用户什么都没说 
          <span class="publish" @click="userpub(item)">回复</span>
        </div>
        <div v-if="item.child.length!==0">
        <secondcom :child="item.child" @userpub="userpub" class="bgc" :reid="reid"></secondcom>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import secondcom from "./secondcom";
export default {
  name: "commentitem",
  data() {
    return {
      commdentdata: [],
    };
  },

  props:{
    status:{
      type:Number
    },
    reid:{
      type:Number
    }
  },

  created() {
    this.getcomitem();
  },

  watch: {
    $route() {
      this.getcomitem();
    },
    status(){
      this.getcomitem()
    },
  },

  components: {
    secondcom
  },

  computed: {},

  methods: {
    async getcomitem() {
      //console.log(this.$route.params.id);
      const { data: res } = await this.$http.get(
        "/comment/" + this.$route.params.id
      );
      //console.log(res);
      if(res){
        this.$emit('getnumber',res.length)
      }
      this.commdentdata = this.changedata(res);
      //console.log(this.commdentdata);
    },
    changedata(data) {
      function fn(temp) {
        let arr1 = [];
        for (var i = 0; i < data.length; i++) {
          if (data[i].parent_id == temp) {
            arr1.push(data[i]);
            data[i].child = fn(data[i].comment_id);
          }
        }
        return arr1;
      }
      return fn(null);
    },
    userpub(id){
      this.$emit('userpub',id)
    }
  },
};
</script>
<style scoped>
.comitem {
  padding: 0 20px;
}
.item {
  display: flex;
  border-bottom: 1px solid #e7e7e7;
  padding: 10px 0;
}
.itemimg img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.iteminfo p {
  display: flex;
  justify-content: space-between;
  justify-items: center;
  font-size: 13px;
  color: #555;
  margin-bottom: 5px;
}
.iteminfo {
  flex: 1;
  margin-left: 10px;
}
.text {
  font-size: 13px;
  margin: 10px 0;
}
.publish{
  position: absolute;
  right: 20px;
  color: #475ef0;
}
.bgc{
  background-color: rgb(221, 221, 221);
  border-radius: 10px;
  max-height: 145px;
  padding: 5px 0;
  overflow: scroll;
}
.iteminfo img{
  height: 16px;
  width: 16px;
  margin-left: 5px;
}
.name{
  display: flex;
}
</style>