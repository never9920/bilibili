<template>
  <div>
    <div class="item">
      <div class="itemimg">
        <img src="~assets/img/touxiang.jpg" alt="" />
      </div>
      <div class="iteminfo">
        <p>
          <span>xx</span>
          <span>04-17</span>
        </p>
        <div>
          接口已开放公网供大家使用,项目持续更新,有任何问题或者想实现的功能都可以在下方留言:
          接口:http://112.74.99.5:3000/web/api
          源码:https://github.com/githubchx12380/bilibili
        </div>
      </div>
    </div>
    <div class="item">
      <div class="itemimg">
        <img src="~assets/img/touxiang.jpg" alt="" />
      </div>
      <div class="iteminfo">
        <p>
          <span>xx</span>
          <span>04-17</span>
        </p>
        <div>
          接口已开放公网供大家使用,项目持续更新,有任何问题或者想实现的功能都可以在下方留言:
          接口:http://112.74.99.5:3000/web/api
          源码:https://github.com/githubchx12380/bilibili
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "secondcom",
  data() {
    return {};
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style scoped>
.itemimg img {
  width: 35px;
  height: 35px;
}
.item {
  display: flex;
  padding: 10px 0;
}
.itemimg {
  margin-right: 10px;
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
}
.iteminfo div {
  font-size: 13px;
}
</style>