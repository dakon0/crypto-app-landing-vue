<template>
    <div class="top-bar" :class="{mobileMode: windowWidth<710}">
        <div v-if="windowWidth > 710" class="search-input">
            <img src="/../img/search-input-icon.svg" width="12" height="12">
            <form>
                <input type="search" placeholder="Search">
            </form>
        </div>
        <div v-else class="placeholder"></div>
        <div class="notifications-menu">
            <div v-if="windowWidth > 710" class="notifications">
                <img src="/../img/ring-icon.svg" width="20" height="20">
                <img class="notification-identifier" src="/../img/notification-identifier-icon.svg" width="12" height="12">
            </div>
            <div class="menu-bar" v-if="menu_render">
                <div class="home">Home</div>
                <div class="profile">Profile</div>
                <div class="wallet">Wallet</div>
                <div class="orders">Orders</div>
            </div>
            <div class="menu" @click="hamburgerClicked">
                <img src="/../img/menu-burger-icon.svg" width="14" height="14">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                menu_render: false,
                windowWidth: window.innerWidth,

            };
        },
        methods: {
            hamburgerClicked(){
                this.menu_render = !this.menu_render;
            },
            onResize(){
                this.windowWidth = window.innerWidth;
            },
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

<style scoped>
     .top-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 49px 68px 0px 68px;
        /* margin-left: 68px; */
        /* margin-top: 49px; */
    }
    .search-input {
        box-sizing: border-box;
        width: 232px;
        height: 48px;
        background: #F7F7F9;
        border-radius: 8px;
        display: flex;
        align-items: center;
        padding: 18px 20px;
    }
    .top-bar input[type=search] {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #9896A1;
        background: #F7F7F9;
        border: none;
        margin-left: 10px;
    }
    .notifications {
        box-sizing: border-box;
        width: 48px;
        height: 48px;
        padding: 14px;
        background: #F7F7F9;
        border-radius: 8px;
        margin-right: 16px;
    }
    .menu {
        box-sizing: border-box;
        width: 48px;
        height: 48px;
        padding-top: 15px;
        background: #F7F7F9;
        border-radius: 8px;
    }

    .notifications-menu {
        display: flex;
        /* position: absolute; */
        /* left: calc(100vw - 180px); */
        /* top: 50px; */
    }
    .notification-identifier {
        position: relative;
        top: -42px;
        left: 21px;
    }
    .menu-bar {
        display: flex;
        /* position: relative; */
        /* left: -500px; */
    }
    .menu-bar div{
        box-sizing: border-box;
        width: 80px;
        height: 48px;
        margin-right: 10px;
        padding: 14px;
        background: #b5b5bb;
        border-radius: 8px;
    }
    .mobileMode .menu-bar div{
        margin-right: 0px;
    }

</style>