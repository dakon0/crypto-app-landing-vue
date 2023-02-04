<template>
    <div class="tab-tyle-summary-cryptocurr" :class="{mobileMode: this.windowWidth<650}">
        <div class="logo-name">
            <div class="tab-logo">
                <img :src=logo_src width="32" height="32">
            </div>
            <div v-if="this.windowWidth>=550" class="name-abbreviation">
                <div class="abbreviation">{{ abbreviature }}
            </div>
            <div class="name">{{ curr_name }}</div>
        </div>
        </div>
        <div class="price">
            <div class="price-label">Price</div>
            <div class="price-number">${{ price }}</div>
        </div>
        <div class="change">
            <div class="change-label">Change</div>
            <div class="change-number" :class="{increase: Number(change) > 0 }">
                <div>{{ change }}%</div>
                <img v-if="Number(change) > 0 " src="/../img/increase-transparent-icon.svg"> 
                <img v-else src="/../img/decrease-transparent-icon.svg">
            </div>
        </div>
        <img v-if="windowWidth > 800" class="curve" :src=curve_src>
        <div class="sell-buy">
            <div class="sell">Sell</div>
            <div class="buy">Buy</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            logo_src: {required: true, type: String},
            abbreviature: {required: true, type: String},
            curr_name: {required: true, type: String},
            price: {required: true, type: String, default: 'default'},
            change: {required: true, type: String, default: 'default'},
            curve_src: {required: true, type: String}
        },
        data() {
            return {
                windowWidth: window.innerWidth
            };
  }
    }
</script>

<style scoped>
    .tab-tyle-summary-cryptocurr {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 20px 0px 20px;
        /* width: 976px; */
        height: 80px;
        background: #FFFFFF;
        border: 1px solid #EBEBF3;
        border-radius: 8px;
        margin: 0px 32px 8px 0px;
        text-align: left;
    }
    .mobileMode {
        padding-left: 2px;
        padding-right: 2px;
    }
    .tab-tyle-summary-cryptocurr .logo-name {
        display: flex;
    }
    .tab-tyle-summary-cryptocurr .tab-logo {
        box-sizing: border-box;
        width: 48px;
        height: 48px;
        margin-right: 16px;
        /* margin-left: 20px; */
        padding: 7px;
        border-radius: 40px;
        border: 1px solid #EBEBF3;
    }
    .tab-tyle-summary-cryptocurr .abbreviation {
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        color: #9896A1;
        margin-bottom: 6px;
    }
    .tab-tyle-summary-cryptocurr .name {
        font-weight: 600;
        font-size: 14px;
        line-height: 14px;
        color: #0A041C;
    }
    .tab-tyle-summary-cryptocurr .name-abbreviation {
        /* margin-right: 86px; */
        width: 60px;
    }
    .tab-tyle-summary-cryptocurr .price-label {
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        color: #9896A1;
        margin-bottom: 6px;

    }
    .tab-tyle-summary-cryptocurr .price-number {
        font-weight: 600;
        font-size: 14px;
        line-height: 14px;
        color: #0A041C;
    }
     .tab-tyle-summary-cryptocurr .price {
        /* margin-right: 107px; */
        width: 77px;
    }
     .tab-tyle-summary-cryptocurr .change-label {
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        color: #9896A1;
        margin-bottom: 6px;
    }
     .tab-tyle-summary-cryptocurr .change-number {
        display: flex;
        align-items: center;
        font-weight: 600;
        font-size: 14px;
        line-height: 14px;
        color: #EA4D4D;
    }
     .tab-tyle-summary-cryptocurr .increase  {
        display: flex;
        align-items: center;
        font-weight: 600;
        font-size: 14px;
        line-height: 14px;
        color: #2DC78F;
    }
     .tab-tyle-summary-cryptocurr .change-number div {
        margin-right: 7px;
    }
    .sell-buy {
        display: flex;
    }
    .sell {
        box-sizing: border-box;
        width: 55px;
        height: 40px;
        padding-top: 7px;
        padding-left: 15px;
        margin-right: 8px;
        background: #FFFFFF;
        border: 1px solid #EBEBF3;
        border-radius: 4px;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: #7445FB;
    }
    .buy {
        box-sizing: border-box;
        width: 56px;
        height: 40px;
        padding-top: 8px;
        padding-left: 16px;
        background: #7445FB;
        border-radius: 4px;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: #FFFFFF;
    }

</style>