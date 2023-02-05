<template>
    <div class="sidebar-content">
        <div>
            <div class="logo">
                <div><img src="img/logo-img.svg"></div>
                <div><p class="logo-name">Payte</p></div>
            </div>
            <div class="sidebar-tabs">
                <sidebar-tab icon_src="/../img/overview-icon.svg" label="Overview" notifications="9+" :active=overviewTabActive @click=overviewTabClicked()></sidebar-tab>
                <sidebar-tab icon_src="/../img/buy-sell-tab-icon.svg" label="Buy/Sell" notifications="" :active=buysellTabActive @click=buysellTabClicked()></sidebar-tab>
                <sidebar-tab icon_src="/../img/wallets-tab-icon.svg" label="Wallets" notifications="" :active=walletsTabActive @click=walletsTabClicked()></sidebar-tab>
                <sidebar-tab icon_src="/../img/bundles-tab-icon.svg" label="Bundles" notifications="" :active=bundlesTabActive @click=bundlesTabClicked()></sidebar-tab>
                <sidebar-tab icon_src="/../img/reporting-tab-icon.svg" label="Reporting" notifications="5+" :active=reportingTabActive @click=reportingTabClicked()></sidebar-tab>
                <sidebar-tab icon_src="/../img/community-tab-icon.svg" label="Community" notifications="" :active=communityTabActive @click=communityTabClicked()></sidebar-tab>
            </div>
            <div class="favorites">
                <div class="favorites-head">
                    <p>Favorites</p>
                    <div class="favorites-dots-btn"><img class src="/../img/dots-icon.svg"></div> 
                </div>
                <sidebar-favorites-tab logo="/../img/bitcoin-favorites-icon.svg" abbreviation="BTC" full_name="Bitcoin" :curve_src=curveSources :change=this.change[0]></sidebar-favorites-tab> 
                <sidebar-favorites-tab logo="/../img/ripple-favorites-icon.svg" abbreviation="XRP" full_name="Ripple" :curve_src=curveSources :change=this.change[3]></sidebar-favorites-tab> 
            </div>
        </div>
        <div class="user-profile-tab">
            <div class="profile-photo">
                <img src="/../img/a-portrait-of-businessman.png">
            </div>
            <div class="name-email">
                <div class="name">Marc Webber</div>
                <div class="email">marc@riot.com</div>
            </div>
            <div class="user-dots-btn">
                <img class src="/../img/dots-icon.svg">
            </div>
        </div>
    </div>
</template>

<script>
import SidebarTab from './SidebarTab.vue'
import SidebarFavoritesTab from './SidebarFavoritesTab.vue'
export default {
    components: {
        SidebarTab,
        SidebarFavoritesTab
    },
    props: {
    },
    data() {
        return {
            favorites: {},
            overviewTabActive: true,
            buysellTabActive: false,
            walletsTabActive: false,
            bundlesTabActive: false,
            reportingTabActive: false,
            communityTabActive: false,
            change: this.$root.$data.cryptoData[1],
            curveSources: ['/../img/ripple-small-curve.svg', '/../img/btc-small-curve.svg'] //images for decresing and increasing changes
        }
    },
    methods: {
        overviewTabClicked(){
            this.overviewTabActive = true;
            this.buysellTabActive = false;
            this.walletsTabActive = false;
            this.bundlesTabActive = false;
            this.reportingTabActive = false;
            this.communityTabActive = false;
            this.$emit('overviewSidebarTabClicked');
        },
        buysellTabClicked(){
            this.overviewTabActive = false;
            this.buysellTabActive = true;
            this.walletsTabActive = false;
            this.bundlesTabActive = false;
            this.reportingTabActive = false;
            this.communityTabActive = false;
            this.$emit('buysellSidebarTabClicked');

        },
        walletsTabClicked(){
            this.overviewTabActive = false;
            this.buysellTabActive = false;
            this.walletsTabActive = true;
            this.bundlesTabActive = false;
            this.reportingTabActive = false;
            this.communityTabActive = false;
            this.$emit('walletsSidebarTabClicked');
        },
        bundlesTabClicked(){
            this.overviewTabActive = false;
            this.buysellTabActive = false;
            this.walletsTabActive = false;
            this.bundlesTabActive = true;
            this.reportingTabActive = false;
            this.communityTabActive = false;
            this.$emit('bundlesSidebarTabClicked');
        },
        reportingTabClicked(){
            this.overviewTabActive = false;
            this.buysellTabActive = false;
            this.walletsTabActive = false;
            this.bundlesTabActive = false;
            this.reportingTabActive = true;
            this.communityTabActive = false;
            this.$emit('reportingSidebarTabClicked');
        },
        communityTabClicked(){
            this.overviewTabActive = false;
            this.buysellTabActive = false;
            this.walletsTabActive = false;
            this.bundlesTabActive = false;
            this.reportingTabActive = false;
            this.communityTabActive = true;
            this.$emit('communitySidebarTabClicked');
        },
    },
    mounted() {
    }
}
</script>

<style>
    /* .chart-div {
        background-color: rgba(0, 0, 0, 0.411);
        width: 80px;
        height: 28px;
    } */
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
        align-items: center;
        justify-content: space-between;
        /* padding-left: 24px; */
        /* padding-right: 24px; */
        margin: 24px;
    }
    .favorites-head p {
        font-weight: 600;
        font-size: 14px;    
        line-height: 14px;
        color: #9896A1;
        margin: 0;
    }
    .favorites-head .favorites-dots-btn {
        width: 24px;
        height: 24px;
    }
    .sidebar-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .user-profile-tab {
        display: flex;
        align-items: center;
        margin: 0px 24px 24px 24px;
        /* position: absolute; */
        /* top: calc(100vh - 84px); */
        /* left: 0px; */
    }
    .user-profile-tab .profile-photo {
        background: #FFFFFF;
        border: 1px solid #E9EAEF;
        border-radius: 36px;
        width: 40px;
        height: 40px;
        overflow: hidden;
        margin-right: 12px;
    }
    .user-profile-tab .profile-photo img{
        margin-top: 5px;
    }
    .user-profile-tab .name-email {
        text-align: left;
        width: 89px;
        height: 34px;
        margin-right: 51px;
    }
    .user-profile-tab .name-email .name{
        font-weight: 600;
        font-size: 14px;
        line-height: 14px;
        color: #0A041C;
        margin-bottom: 6px;
    }
    .user-profile-tab .name-email .email{
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        color: #9896A1;
    }
</style>
