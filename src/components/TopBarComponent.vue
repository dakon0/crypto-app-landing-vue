<template>
    <div class="top-bar">
        <div class="search-input">
            <img src="/../img/search-input-icon.svg" width="12" height="12">
            <form>
                <input type="search" placeholder="Search">
            </form>
        </div>
        <div class="notifications-menu">
            <div class="notifications">
                <img src="/../img/ring-icon.svg" width="20" height="20">
                <img class="notification-identifier" src="/../img/notification-identifier-icon.svg" width="12" height="12">
            </div>
            <div class="menu">
                <img src="/../img/menu-burger-icon.svg" width="20" height="20">
            </div>
        </div>
    </div>
</template>

<script></script>

<style scoped>
     .top-bar {
        display: flex;
        align-items: center;
        margin-left: 68px;
        margin-top: 49px;
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
        padding: 14px;
        background: #F7F7F9;
        border-radius: 8px;
    }

    .notifications-menu {
        display: flex;
        position: absolute;
        left: calc(100vw - 180px);
    }
    .notification-identifier {
        position: relative;
        top: -42px;
        left: 21px;
    }

</style>