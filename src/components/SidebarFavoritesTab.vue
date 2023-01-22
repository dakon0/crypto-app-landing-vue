<template>
    <div class="favorites-element">
        <div class="image"><img :src=logo></div>
        <div class="names">
            <div class="abbreviation">{{ abbreviation }}</div>
            <div class="full-name">{{ full_name }}</div>
        </div>
        <div class="curve">
            <img :src=curve_src>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            logo: {required: true, type: String},
            abbreviation: {required: true, type: String},
            full_name: {required: true, type: String},
            curve_src: {required: true, type: String}
        }
    }
</script>

<style>
    .favorites-element {
        display: flex;
        align-items: center;
        margin: 24px;
        margin-left: 24px;
        margin-right: 24px;
    }
    .favorites-element .image {
        width: 32px;
        height: 32px;
        background: #FFFFFF;
        border: 1px solid #EBEBF3;
        border-radius: 20px;
        margin-right: 12px;
    }
    .favorites-element .image img {
        padding: 6px;
    }

    .names {
        text-align: left;
        margin-right: 55px;
    }
    .names .abbreviation {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #9896A1; 
    }

    .names .full-name {
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        color: #0A041C; 
    }
    .curve {
        /* background: black; */
        width: 80px;
        height: 28px;

    }
</style>