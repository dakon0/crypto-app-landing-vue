<template>
    <div>
        <div class="logo">
            <div><img src="img/logo-img.svg"></div>
            <div><p class="logo-name">Payte</p></div>
        </div>
        <div class="sidebar-tabs">
            <sidebar-tab icon_src="/../img/overview-icon.svg" label="Overview" notifications="9+" :active=true></sidebar-tab>
            <sidebar-tab icon_src="/../img/buy-sell-tab-icon.svg" label="Buy/Sell" notifications="" :active=false></sidebar-tab>
            <sidebar-tab icon_src="/../img/wallets-tab-icon.svg" label="Wallets" notifications="" :active=false></sidebar-tab>
            <sidebar-tab icon_src="/../img/reporting-tab-icon.svg" label="Reporting" notifications="" :active=false></sidebar-tab>
            <sidebar-tab icon_src="/../img/community-tab-icon.svg" label="Community" notifications="" :active=false></sidebar-tab>
        </div>
        <div class="favorites">
            <div class="favorites-head">
                <p>Favorites</p>
                <img src="/../img/favorites-dots-icon.svg"> 
            </div>
            <p> {{ favorites }}</p>
        </div>
    </div>
</template>

<script>
import SidebarTab from './SidebarTab.vue'
import DataService from '@/services/DataService.js';
export default {
    components: {
        SidebarTab
    },
    data() {
    return {
      favorites: {}
    }
  },
    created() {
        this.getFromServer(); 
    },
    methods: {
    async getFromServer() {
            DataService.getFavorites().then(data => {this.favorites = data.data[1].name});
        }
    }
}
</script>

<style>
    .logo {
        display: flex;
        align-items: center;
        width: 112px;
        height: 24px;
        margin-top: 40px;
        margin-left: 24px;
    }
    .logo-name {
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 24px;
        color: #0A041C;
    }
    .sidebar-tabs {
        margin-top: 63px;/* vertical space between logo and tabs */
        border-bottom: solid 1px #EBEBF3;
    }
    .favorites-head {
        display: flex;
        justify-content: space-between;
        padding-left: 24px;
        padding-right: 24px;
    }
    .favorites-head p {
        font-weight: 600;
        font-size: 14px;    
        line-height: 14px;
        color: #9896A1;
    }
</style>
