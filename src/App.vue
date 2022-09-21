<template>
  <div id="app">
    <vue-particles
      color="#9ab4cd"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="star"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.8"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="bubble"
      :clickEffect="true"
      clickMode="repulse"
      class="lizi"
    >
    </vue-particles>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#particles-js {
  width: 100%;
  height: calc(100% - 100px);
  position: absolute;
}
</style>
