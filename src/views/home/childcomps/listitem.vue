<template>
  <div>
    <div v-for="(item, i) in hometab" :key="i" class="detail" @click="tovideo(item)">
      <div class="itemimg">
        <img v-if="item.img" :src="item.img" class="detailimg" />
        <span class="video">
          <img src="~assets/img/bofang.svg" />
          168万
        </span>
        <span class="comment">
          <img src="~assets/img/comment.svg" />
          66万
        </span>
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
    tovideo(val){
      this.$router.push('/video/' + val.id)
    }
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
  background: linear-gradient(180deg,white 70% ,rgba(0, 0, 0, 0.85));
}

.itemimg {
  position: relative;
}
.video {
  position: absolute;
  left: 5px;
  bottom: 10px;
  color: white;
  font-size: 14px;
  display: flex;
}
.video img {
  width: 14px;
  height: 14px;
  margin: 3px 2px;
}
.comment {
  position: absolute;
  right: 5px;
  bottom: 10px;
  color: white;
  font-size: 14px;
  display: flex;
}
.comment img {
  width: 14px;
  height: 14px;
  margin: 3px 2px;
}
</style>