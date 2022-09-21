<template>
  <div class="app">
    <div
      class="box"
      :style="
        min > 760
          ? { margin: '120px 0px 15px 0px' }
          : { margin: '0px 0px 15px 0px' }
      "
    >
      <el-input
        placeholder="请输入搜索内容"
        v-model="keywords"
        autofocus="true"
        clearable
        class="input-with-select"
        :style="min > 760 ? { width: '40%' } : { width: '100%' }"
        @keyup.enter.native="search"
      >
        <el-dropdown
          trigger="hover"
          slot="prepend"
          placement="bottom"
          @command="changedata"
        >
          <span class="el-dropdown-link">
            <img :src="scdata.img" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="(item, index) in options"
              :key="item.value"
              :command="index"
            >
              <img :src="item.img" :alt="item.label" />
              {{ item.label }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button
          round
          slot="append"
          @click="search"
        ><i class="el-icon-search" style="color: #4e6ef2;font-size: 18px;"></i></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
    name: '',
    components: {},
    data(){
      return {
        keywords:'',
        scdata:{
          url: 'https://www.baidu.com/s?wd',
          label: '百度',
          img:'https://hao.tendcode.com/static/img/icon_baidu.png'
        },
        options: [{
          url: 'https://www.baidu.com/s?wd',
          label: '百度',
          img:'https://hao.tendcode.com/static/img/icon_baidu.png'
        }, {
          url: 'https://google.com/search?q',
          label: '谷歌',
          img:'https://hao.tendcode.com/static/img/icon_google.png'
        }, {
          url: 'https://cn.bing.com/search?q',
          label: '必应',
          img:'	https://hao.tendcode.com/static/img/icon_bing.png'
        },{
          url: 'https://github.com/search?q',
          label: 'Github',
          img:'https://hao.tendcode.com/static/img/github.png'
        }, {
          url: 'https://www.zhihu.com/search?q',
          label: '知乎',
          img:'	https://hao.tendcode.com/static/img/zhihu.ico'
        }, {
          url: 'https://search.bilibili.com/all?keyword',
          label: 'B站',
          img:'	https://img.ichuguang.com/imgs/2022/09/79a71fc211b0e518.png'
        }],
        min:''
        }
    },
    created(){
       this.min = window.screen.width
    },
    mounted(){},
    computed: {},
    methods: {
        search() {
            let url = `${this.scdata.url}=${this.keywords}`
             window.open(url, '_blank')
             this.keywords = ''
        },
         // 选择表单变化的时候同步数据，同时添加到session
         changedata(command) {
           this.scdata = this.options[command]
        }

    }
}
</script>

<style scoped>
img {
  width: 2rem;
  margin: 0 0.2rem -0.2rem 0;
}
.el-select .el-input {
  width: 200px;
}
.el-select {
  width: 80px;
}
/* .input-with-select .el-input-group__prepend {
  border-radius: 20px !important;
  background-color: #fff;
} */
.el-button {
  border-radius: 10px;
  background-color: rgb(80, 31, 31);
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>