<template>
  <div class="app-wrapper">
    <AppAside class="sidebar-container"></AppAside>
    <div class="main-container">
      <AppHeader class="head"></AppHeader>
      <AppMain class="main"></AppMain>
    </div>
  </div>
</template>

<script setup>
import AppAside from './Aside'
import AppMain from './Main'
import AppHeader from './Navbar'
</script>
<style scoped lang="scss">
.app-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  .sidebar-container {
    width: 210px;
    height: 100%;
    background-color: rgba(0, 21, 41);
    overflow-y: auto;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    -ms-overflow-style: none; /* IE 10+ */
    // scrollbar-width: none; /* Firefox */
  }

  .main-container {
    width: 100%;
    height: 100%;
    margin-left: 210px;
    // position: fixed;
    // top: 50px;
    // right: 0;
    .head {
      height: 50px;
      background-color: #fff;
      padding: 0 20px;
      border-bottom: 1px solid #ddd;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: fixed;
      right: 0;
      top: 0;
      bottom: 5px;
      // z-index: 9999;
      left: 210px;
    }
    .main {
      // display: flex;
      // align-items: center;
      // justify-content: center;
      // height: calc(100vh - 50px);
      z-index: 99;
      margin-top: 70px;
      height: 100%;
    }
  }
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
