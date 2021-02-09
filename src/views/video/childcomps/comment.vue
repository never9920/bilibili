<template>
  <div class="comment">
    <div>
      <p>
        <span>评论</span>
        <span class="num">({{ numlength }})</span>
      </p>
    </div>
    <div class="mine">
      <img :src="picsrc" />
      <input
        type="text"
        placeholder="说点什么吧"
        v-model="content"
        ref="cominput"
      />
      <button @click="checkuser">发表</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  data() {
    return {
      content: "",
    };
  },

  props: {
    picsrc: {
      type: String,
    },
    numlength: {
      type: Number,
    },
    status: {
      type: Number,
    },
  },

  watch: {
    status() {
      this.content = "";
    },
  },

  components: {},

  computed: {},

  methods: {
    checkuser() {
      if (!localStorage.getItem("id") && !localStorage.getItem("token")) {
        this.$toast.fail("请先登录");
        this.$router.push("/login");
        return;
      }
      this.$emit("posttext", this.content);
    },
    inputfoc() {
      //console.log(this.users)
      this.$refs.cominput.focus();
    },
  },
};
</script>
<style scoped>
.comment {
  padding: 30px 10px;
}
.num {
  color: #aaa;
  margin-left: 10px;
}
.mine img {
  height: 25px;
  width: 25px;
  border-radius: 50%;
}
.mine {
  padding-left: 10px;
  display: flex;
}
.mine input {
  outline: none;
  border: 0;
  background-color: #f4f4f4;
  border-radius: 12.5px;
  padding: 0 10px 0 15px;
  margin-left: 10px;
  font-size: 12px;
  width: 60%;
}
.mine button {
  outline: none;
  border: 0;
  border-radius: 12px;
  background-color: #fb7299;
  color: white;
  font-size: 12px;
  padding: 0 15px;
  margin-left: 10px;
}
</style>