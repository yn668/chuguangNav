<template>
       <el-menu
          active-text-color="#409eff"
          mode="horizontal"
          class="el-menu-vertical-demo handnav"
        >
          <template v-for="item in itemsData">
            <!-- 二级 -->
            <el-submenu v-if="item.children" :index="item.name" :key="item.key">
              <template slot="title">
                 <a :href="'#' + item.name"> 
                    <i :class="item.icon"></i>
                <span>{{item.name}}</span></a>
              
              </template>
              <el-menu-item-group v-for="item2 in item.children" :key="item2.key">
                <el-menu-item :index="item2.name" :key="item2.key"> <a :href="'#' + item2.name"> <i :class="item2.icon"></i><span slot="title">{{ item2.name }}</span></a></el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item v-else :index="item.name" :key="item.key">
               <a :href="'#' + item.name">
                  <i :class="item.icon"></i>
              <span slot="title">{{item.name}}</span></a>
             
            </el-menu-item>
          </template>
        </el-menu>
</template>

<script>

import itemsData from '../assets/data.json'
export default {

    name: 'HanderNav',
    components: {
    },
    data(){
        return {
        itemsData:itemsData,
        }
    },
    created(){},
    mounted(){},
    computed: {},
    methods: {
         handleSelect(menu) {
         console.log(menu)
      }
    }
}
</script>

<style scoped>
.handnav {
  display: flex;
  position: fixed;
  width: 100vw;
  z-index: 9999;
  top: 0;
  padding: 2px 200px;
  flex-direction: row !important;
  flex-wrap: nowrap;
}
a {
  outline: none;
  text-decoration: none;
}
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}
span {
  margin-left: 8px;
}

</style>