<template>
  <sidebar-component class="sidebar"></sidebar-component>
  <main-body-component class="main-body"></main-body-component>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
  import SidebarComponent from './components/SidebarComponent'
  import MainBodyComponent from './components/MainBodyComponent'

export default {
  name: 'App',
  components: {
    // HelloWorld
    SidebarComponent,
    MainBodyComponent
  }
}
</script>

<style>
@import url('https://fonts.cdnfonts.com/css/sf-pro-display');
#app {
  font-family: 'SF Pro Display', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
}
html {
  background-color: black;
}

body {
  margin: 0px;
}
.sidebar {
  background-color: #F7F7F9;
  width:264px;
  height: 100vh;
  border-radius: 20px 0px 0px 20px ;
}

.main-body {
  background:  #FFFFFF;
  width: calc(100vw - 264px);
  /* width: 100%; */
  height: 100vh;
  border-radius: 0px 20px 20px 0px ;
}

</style>
