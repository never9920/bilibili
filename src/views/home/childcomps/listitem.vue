<template>
  <div>
    <div
      v-for="(item, i) in hometab"
      :key="i"
      class="detail"
      @click="tovideo(item)"
    >
      <div class="itemimg">
        <img
          v-if="item.img"
          :src="item.img"
          class="detailimg"
          :onerror="changeimg"
        />
        <div class="kankan">
          <span class="video">
            <img src="~assets/img/bofang.svg" />
            168万
          </span>
          <span class="comment">
            <img src="~assets/img/comment.svg" />
            66万
          </span>

          <span class="time"> 00:30 </span>
        </div>
      </div>
      <div>{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "listitem",
  data() {
    return {
      value: [],
      changeimg: 'this.src="' + require("@/assets/img/tidai.jpg") + '"',
    };
  },

  props: {
    hometab: {
      type: Array,
    },
  },

  watch: {
    hometab(val) {
      this.value = val;
    },
  },

  components: {},

  computed: {},

  methods: {
    tovideo(val) {
      this.$router.push("/video/" + val.id);
    },
  },
};
</script>
<style scoped>
.detail {
  width: 45%;
  font-size: 12 px;
}
.detailimg {
  width: 100%;
  height: 95px;
  margin: 5px 0;
  border-radius: 5px;
}
.itemimg {
  position: relative;
}
.kankan {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85));
  display: flex;
  color: white;
  align-items: center;
  position: absolute;
  bottom: 0px;
  width: 100%;
  font-size: 10px;
}
.kankan img {
  width: 14px;
  height: 14px;
}
.video,
.comment {
  margin-left: 7px;
  display: flex;
  align-items: center;
}
.time {
  flex: 1;
  text-align: right;
  padding-right: 5px;
}
</style>