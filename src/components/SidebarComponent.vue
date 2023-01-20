<template>
    <div>
        <div class="logo">
            <div><img src="../img/logo-img.svg"></div>
            <div><p class="logo-name">Payte</p></div>
        </div>
        <!-- <sidebar-tabs class="sidebar-tabs"></sidebar-tabs> -->
        <div class="sidebar-tabs">
            <sidebar-tab icon_src="/../img/overview-icon.svg" label="Overview" notifications="9+"></sidebar-tab>
        </div>
    </div>
</template>

<script>
// import SidebarTabs from './SidebarTabs.vue'
import SidebarTab from './SidebarTab.vue'
export default {
    components: {
        // SidebarTabs,
        SidebarTab
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
    }
</style>