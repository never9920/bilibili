<template>
  <div>
    <div class="item" v-for="(item, i) in child" :key="i">
      <div class="itemimg">
        <img
          v-if="item.userinfo && item.userinfo.user_img"
          :src="item.userinfo.user_img"
          alt=""
        />
        <img v-else src="~assets/img/touxiang.jpg" alt="" />
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
      </div>
      <div class="text" v-if="temp">
        回复 <span style="color: #475ef0">{{ item.parent_user_info.name }}</span
        >：{{ item.comment_content }}
        <span class="publish" @click="userpub(item)">回复</span>
      </div>
      <div class="text" v-else>{{ item.comment_content }}
        <span class="publish" @click="userpub(item)">回复</span>
      </div>
      <secondcom :child="item.child" :temp="true" @userpub="userpub" :reid="reid"></secondcom>
    </div>
  </div>
</template>

<script>
export default {
  name: "secondcom",
  data() {
    return {};
  },

  props: {
    child: {
      type: Array,
    },
    temp: {
      type: Boolean,
      default: false,
    },
    reid:{
      type:Number
    }
  },

  components: {},

  computed: {},

  methods: {
    userpub(id){
      this.$emit('userpub',id)
    }
  },
};
</script>
<style scoped>
.itemimg img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
}
.itemimg {
  display: flex;
}
.itemimg p {
  flex: 1;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  font-size: 13px;
  color: #555;
  margin-bottom: 5px;
  margin-left: 10px;
}
.text {
  font-size: 13px;
  margin: 10px 0;
  display: flex;
}
.publish{
  color: #475ef0;
   margin-left:auto
}
.name img{
  height: 16px;
  width: 16px;
  margin-left: 5px;
}
.name{
  display: flex;
}
</style>