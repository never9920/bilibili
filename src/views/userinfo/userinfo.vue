<template>
  <div class="userinfo">
    <navbar :picsrc="picsrc"></navbar>
    <img src="~assets/img/bgc.png" class="image" />
    <userdetail @picchange="picchange"></userdetail>
    <vtab :tabs="tabs" :current="current" @change="change" class="vtab"></vtab>
  </div>
</template>

<script>
import navbar from "components/content/navbar.vue";
import userdetail from "./childcomps/userdetail.vue";
import vtab from "components/vant/vtab";
export default {
  name: "userinfo",
  data() {
    return {
      tabs: [
        { title: "动态", name: "dongtai" },
        { title: "视屏", name: "shiping" },
      ],
      current: "dongtai",
      picsrc: "",
    };
  },

  components: {
    navbar,
    userdetail,
    vtab,
  },

  computed: {},

  methods: {
    change(val) {
      this.current = val;
    },
    picchange(val) {
      this.picsrc = val;
      //console.log(this.picsrc)
    },
  },
};
</script>
<style scoped>
.image {
  width: 100%;
  height: 90px;
}
.vtab {
  border-top: solid 1px #f4f4f4;
}
</style>