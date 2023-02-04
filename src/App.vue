<template>
  <sidebar-component v-if="windowWidth > 1200" class="sidebar"
    @overviewSidebarTabClicked=overviewSidebarTabClicked()
    @buysellSidebarTabClicked=buysellSidebarTabClicked()
    @walletsSidebarTabClicked=walletsSidebarTabClicked()
    @communitySidebarTabClicked=reportingSidebarTabClicked()
    @reportingSidebarTabClicked=communitySidebarTabClicked()></sidebar-component>
  <main-body-component v-if="cryptoData[0][0] && plotData[0][0]"  class="main-body" :class="{ sidebarHidden: !(windowWidth > 1200) }" :overviewTabContent=this.overviewActivated :cryptoDataProp=this.cryptoData :plotDataProp=this.plotData></main-body-component>
  <!-- development mode,without need tos wait for data fetch -->
  <!-- <main-body-component v-if="true"  class="main-body" :class="{ sidebarHidden: !(windowWidth > 1200) }" :overviewTabContent=this.overviewActivated :cryptoDataProp=this.cryptoData :plotDataProp=this.plotData></main-body-component> -->
</template>

<script>
  import SidebarComponent from './components/SidebarComponent'
  import MainBodyComponent from './components/MainBodyComponent'
  import DataService from './services/DataService.js';


export default {
  name: 'App',
  components: {
    SidebarComponent,
    MainBodyComponent
  },
  methods: {
    onResize(){
      this.windowWidth = window.innerWidth;
    },
    async getFromServer() {
      await DataService.getCurrencies().then(data => { this.cryptoData = data;this.$forceUpdate(); });
      await DataService.getHistoricals().then(data => {this.plotData = data;this.$forceUpdate();});
    },
    overviewSidebarTabClicked(){
      this.overviewActivated = true;
      this.buysellActivated = false;
      this.walletsActivated = false;
      this.reportingActivated = false;
      this.communityActivated = false;
    },
    buysellSidebarTabClicked(){
      this.overviewActivated = false;
      this.buysellActivated = true;
      this.walletsActivated = false;
      this.reportingActivated = false;
      this.communityActivated = false;
    },
    walletsSidebarTabClicked(){
      this.overviewActivated = false;
      this.buysellActivated = false;
      this.walletsActivated = true;
      this.reportingActivated = false;
      this.communityActivated = false;
    },
    reportingSidebarTabClicked(){
      this.overviewActivated = false;
      this.buysellActivated = false;
      this.walletsActivated = false;
      this.reportingActivated = true;
      this.communityActivated = false;
    },
    communitySidebarTabClicked(){
      this.overviewActivated = false;
      this.buysellActivated = false;
      this.walletsActivated = false;
      this.reportingActivated = false;
      this.communityActivated = true;
    }
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      //  cryptoData: [['default','place','holder'],['default','place','holder']],
      overviewActivated: true,
      buysellActivated: false,
      walletsActivated: false,
      reportingActivated: false,
      communityActivated: false,
      cryptoData: [[],[]],
      plotData: [[],[],[],[]]
    };
  },
  created(){
    this.getFromServer();
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  beforeUnmount() { 
    window.removeEventListener('resize', this.onResize); 
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
  /* background-color: black;*/
  background-color: #000000;
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
  width: calc(100% - 264px);
  height: 100vh;
  border-radius: 0px 20px 20px 0px ;
  overflow: auto;
}
.main-body.sidebarHidden {
  width: 100%;
  border-radius: 20px 20px 20px 20px ;
}
</style>
