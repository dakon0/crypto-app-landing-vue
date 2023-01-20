<template>
     <div class="overview">
        <div class="image-container"><img :src=icon_src></div>
        <span class="tab-name">{{ label }}</span>
        <div class="notifications">9+</div>
    </div>
</template>

<script>
    export default {
        props: {
            icon_src: {required: true, type: String},
            label: {required: true, type: String},
            notifications: {required: true, type: String}
        }
    }
</script>

<style>
    .overview {
        display: flex;
        align-items: center;
        /* border: solid black; */
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        color: #0A041C;
        box-sizing: border-box;
        width: 244px;
        height: 44px;
        margin: 0px 10px 0px 10px; 
        border-radius: 4px;
        background: #FFFFFF;
        border: 1px solid #EBEBF3;
    }

    .image-container {
        width: 24px;
        height: 24px;
        margin-right: 12px;
        margin-left: 14px;
    }
    .tab-name {
        margin-right: 90px;
    }
    .notifications {
        /* width: 23px; */
        /* height: 17px; */
        background-color: #EA4D4D;
        color: #FFFFFF;
        font-size: 10px;
        font-weight: 700;
        line-height: 10px;
        border-radius: 30px;
        padding: 3px 5px 4px 5px;
        margin-right: 14px;
    }
</style>