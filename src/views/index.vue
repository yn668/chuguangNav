<template>
  <div class="page-container">
    <div class="sidebar-menu toggle-others fixed" v-if="min < 760">
      <div class="sidebar-menu-inner">
        <header class="logo-env">
          <!-- logo -->
          <div class="logo">
            <a href="#" class="logo-expanded">
              <img src="../assets/images/logo@2x.png" width="100%" alt="" />
            </a>
            <a href="#" class="logo-collapsed">
              <img
                src="../assets/images/logo-collapsed@2x.png"
                width="40"
                alt=""
              />
            </a>
          </div>
          <div class="mobile-menu-toggle visible-xs">
            <a href="#" data-toggle="user-info-menu">
              <i class="linecons-cog"></i>
            </a>
            <a href="#" data-toggle="mobile-menu">
              <i class="fa-bars"></i>
            </a>
          </div>
        </header>
        <!-- 侧边栏 -->
        <ul id="main-menu" class="main-menu">
          <li v-for="(menu, idx) in items" :key="idx">
            <a :href="'#' + transName(menu)" class="smooth" @click="moveSlow">
              <i :class="menu.icon"></i>
              <span class="title">{{ transName(menu) }}</span>
            </a>
            <ul v-if="menu.children">
              <li v-for="(submenu, idx) in menu.children" :key="idx">
                <a
                  :href="'#' + transName(submenu)"
                  class="smooth"
                  @click="moveSlow"
                >
                  <span class="title">{{ transName(submenu) }}</span>
                  <span
                    v-show="submenu.is_hot"
                    class="label label-pink pull-right hidden-collapsed"
                    >Hot</span
                  >
                </a>
              </li>
            </ul>
          </li>
          <!-- 关于本站 -->
          <li class="submit-tag">
            <router-link to="/about">
              <i class="linecons-heart"></i>
              <span class="tooltip-blue">关于本站</span>
              <span class="label label-Primary pull-right hidden-collapsed"
                >♥︎</span
              >
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- 主体 -->
    <div class="main-content">
      <nav class="navbar user-info-navbar" role="navigation" v-if="min > 760">
        <HanderNav :transName="transName"></HanderNav>
      </nav>
      <Search></Search>
      <div v-for="(item, idx) in items" :key="idx">
        <div v-if="item.web">
          <WebItem :item="item" :transName="transName" />
        </div>
        <div v-else v-for="(subItem, idx) in item.children" :key="idx">
          <WebItem :item="subItem" :transName="transName" />
        </div>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import HanderNav from '../components/HanderNav.vue'
import Search from '../components/Search.vue'
import WebItem from '../components/WebItem.vue'
import Footer from '../components/Footer.vue'
import itemsData from '../assets/data.json'

export default {
  name: 'Index',
  components: {
    WebItem,
    Footer,
    Search,
    HanderNav
  },
  data() {
    return {
      items: itemsData,
      lang: {},
      langList: [
        {key: 'zh', name: '简体中文', flag: './assets/images/flags/flag-cn.png'},
        {key: 'en', name: 'English', flag: './assets/images/flags/flag-us.png'}
      ],
      min:''
    }
  },
  created() {
    this.lang = this.langList[0]
     this.min = window.screen.width
  },
  methods: {
    transName(webItem) {
      return this.lang.key === 'en' ? webItem.en_name : webItem.name;
    },
    moveSlow() {

    }
  }
}
</script>

<style>
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    --webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    border-radius: 5px;
    height: 8px;
    background: rgb(17, 18, 17);
    --webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}

::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255,0,0,0.4);
}
</style>
