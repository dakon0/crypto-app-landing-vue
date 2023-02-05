<template>
     <div class="tab-body" :class="{tabIsChosen: active}" @click="tab">
        <div class="image-container"><img :src=icon_src width="20" height="20"></div>
        <div class="name-notifications">
            <span class="tab-name">{{ label }}</span>
            <div v-if="notifications" class="notifications">{{ notifications }}</div>
            <div v-else class="no-notifications">9+</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            icon_src: {required: true, type: String},
            label: {required: true, type: String},
            notifications: {required: false, type: String},
            active: {required: true, type: Boolean}
        }
    }
</script>

<style scoped>
    .tab-body {
        display: flex;
        align-items: center;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        box-sizing: border-box;
        width: 244px;
        height: 44px;
        margin: 0px 10px 12.5px 10px; 
        border-radius: 4px;
        color: rgba(10, 4, 28, 0.4);
        background: #F7F7F9;
        border: solid 1px #F7F7F9;
    }

    .tabIsChosen {
        background: #FFFFFF;
        color: #0A041C;
        border: 1px solid #EBEBF3;

    }
    
    .image-container {
        width: 24px;
        height: 24px;
        margin-left: 14px;
    }
    .name-notifications {
        display: flex;
        justify-content: space-between;
        width: 180px;
        margin-left: 15px;
        margin-right: 14px;
    }
    .tab-name {
        width: 85px;
        text-align: left;
    }
    .notifications {
        box-sizing: border-box;
        width: 23px;
        height: 17px;
        background-color: #F7F7F9;
        color: #F7F7F9;
        font-size: 10px;
        font-weight: 700;
        line-height: 10px;
        border-radius: 30px;
        margin-top: 4px;
        padding: 3px 5px 4px 5px;
    }
    .tabIsChosen .notifications {
        background-color: #EA4D4D;
        color: #FFFFFF;
    }
    .no-notifications {
        box-sizing: border-box;
        width: 23px;
        height: 17px;
        background-color: #F7F7F9;
        color: #F7F7F9;
        font-size: 10px;
        font-weight: 700;
        line-height: 10px;
        border-radius: 30px;
        padding: 3px 5px 4px 5px;
    }
    .tabIsChosen .no-notifications {
        background-color: #FFFFFF;
        color: #FFFFFF;
    }
</style>