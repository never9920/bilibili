<template>
  <div>
      <navbar :picsrc="imgsrc"></navbar>
      <vtab :tabs="hometab" :homecurrent="current" @change="change">
        <listitem v-if="show" :hometab="hometab[current].list" :current="current"></listitem>
      </vtab>
  </div>
</template>

<script>
import navbar from 'components/content/navbar'
import vtab from 'components/vant/vtab.vue';
import listitem from './childcomps/listitem'
export default {
name:"home",
  data () {
    return {
        imgsrc:'',
        hometab:[],
        current:0,
        show:false
    };
  },

  components: {
      navbar,
      vtab,
      listitem
  },

  created(){
      this.getuser(),
      this.gethome()
  },

  computed: {
    homedate(){
      return this.hometab[this.current].list
    }
  },

  methods: {
      async getuser(){
          if(localStorage.getItem('id')){
              const {data:res} = await this.$http.get('/user/' + localStorage.getItem('id'))
              //console.log(res)
              this.imgsrc = res[0].user_img
              if(!this.imgsrc){
                this.imgsrc = require('@/assets/img/touxiang.jpg')
              }
              //console.log(this.imgsrc)
          }else{
            this.imgsrc = require('@/assets/img/touxiang.jpg')
            //console.log(this.imgsrc)
          }
      },
      async gethome(){
        const {data:res} = await this.$http.get('/category')
        //console.log(res)
        //console.log(typeof(this.current))
        this.changedata(res)
      },
      changedata(val){
        const category = val.map((item,index) => {
          item.list = []
          item.page = -1
          return item
        })
        this.hometab = category
        for(let i in this.hometab){
          this.getdetail(i)
        }
        //console.log(this.hometab)
      },
      async getdetail(id){
        const page = this.hometab[id].page + 1
        const {data:res} = await this.$http.get('/detail/' + this.hometab[id]._id,{
          params:{page,pagesize:10}
        })
        this.hometab[id].list.push(...res)
        this.hometab[id].page+=1
        this.show = true
        console.log(this.hometab)
      },
      change(val){
        //console.log(val)
        this.current = val
        //this.getdetail(val)
      },
  }
}

</script>
<style scoped>
</style>