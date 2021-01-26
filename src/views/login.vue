<template>
  <div id="login">
      <vnavbar title="bilibili注册"></vnavbar>
      <vfield label="姓名"
      style="margin:15px 0"
      placeholder="请输入姓名"
      rule="^.{6,16}$"
      @log="res=>name=res" />
      <vfield label="账号"
      placeholder="请输入账号"
      rule="^.{6,16}$"
      @log="res=>username=res" />
      <vfield label="密码"
      placeholder="请输入密码"
      type="password"
      rule="^.{6,16}$"
      @log="res=>password=res" />
      <vbtns 
      type="danger" 
      size="large" 
      :round="true" 
      text="注册" 
      style="margin:15px 10px"></vbtns>
  </div>
</template>

<script>
import vbtns from '../components/vant/vbtns.vue';
import vfield from '../components/vant/vfield.vue';
import vnavbar from '../components/vant/vnavbar.vue';
export default {
name:"login",
  data () {
    return {
        name:'',
        username:'',
        password:'',
    };
  },

  components: {
    vnavbar,
    vfield,
    vbtns,
  },

  computed: {},

  methods: {}
}

</script>
<style scoped>
.login{
    background: red;
}
</style>