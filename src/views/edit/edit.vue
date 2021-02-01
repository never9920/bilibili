<template>
  <div class="edit">
    <navbar></navbar>
    <div>
      <edititem :edititems="edititems" class="items">
          <img v-if="imgdesc==='default'" src="~assets/img/touxiang.jpg">
          <img v-else :src="imgdesc">
      </edititem>
    </div>
    <div class="btns" @click="tuichu">退出登录</div>
    <div class="btns" @click="goback">返回空间</div>
  </div>
</template>

<script>
import navbar from 'components/content/navbar'
import edititem from './childcomps/edititem'
export default {
name:"edit",
  data () {
    return {
      edititems:[
        {name:'头像',type:'img'},
        {name:'昵称',desc:''},
        {name:'UID',desc:''},
        {name:'性别',desc:''},
        {name:'出生日期',desc:'01-01'},
        {name:'个性签名',desc:''},
        ],
        imgdesc:'',
    };
  },

  components: {
    navbar,
    edititem
  },

  created(){
    this.getedit()
  },

  mounted(){
    this.$bus.$on('load',async function(file){
      const from = new FormData()
      from.append('file',file.file)
      //'file'由后端决定
      const res = await this.$http.post('/upload',from)
      //console.log(res)
      this.imgdesc = res.data.url
      //console.log(res.data.url)
      console.log(this.imgdesc)
    })
  },

  destroyed(){
    this.$bus.$off('load')
  },

  computed: {},

  methods: {
    goback(){
      this.$router.back()
    },
    tuichu(){
      localStorage.clear();
      this.$router.push('/login')
    },
    async getedit(){
      const {data:res} = await this.$http.get('/user/' + localStorage.getItem('id'))
      //console.log(res)
      if(res[0].user_img){
        //console.log('true')
         this.imgdesc = res[0].user_img
      }else{
        //console.log('false')
        this.imgdesc = 'default'
      }
      this.edititems[1].desc = res[0].name
      this.edititems[2].desc = res[0].id
      this.edititems[5].desc = res[0].user_desc
    }
  }
}

</script>
<style scoped>
.edit{
  height: 667px;
  background-color: #f4f4f4;
}
.items{
  margin: 15px 0;
}
.btns{
  padding: 15px;
  background-color: #fff;
  text-align: center;
}
</style>