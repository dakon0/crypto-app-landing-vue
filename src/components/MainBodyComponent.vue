<template>
    <div>
        <top-bar-component></top-bar-component>
        <div class="balance-summary">
            <current-balance-tile></current-balance-tile>
            <summary-tile v-if="windowWidth > 940" :plotDataProp=this.plotDataProp></summary-tile>
        </div>
        <div class="blurring"></div>
        <div class="tab-tile">
            <tab-tile-bar></tab-tile-bar>
            <tab-tile-summary-cryptocurr logo_src="/../img/bitcoin-favorites-icon.svg" abbreviature="BTC"
                curr_name="Bitcoin" :price=this.cryptoData[0][0] :change=this.cryptoData[1][0]
                curve_src="/../img/btc-longer-curve.svg"></tab-tile-summary-cryptocurr>
            <tab-tile-summary-cryptocurr logo_src="/../img/ethereum-favorites-icon.svg" abbreviature="ETH"
                curr_name="Ethereum" :price=this.cryptoData[0][1] :change=this.cryptoData[1][1]
                curve_src="/../img/ethereum-longer-curve.svg"></tab-tile-summary-cryptocurr>
            <tab-tile-summary-cryptocurr logo_src="/../img/ripple-favorites-icon.svg" abbreviature="ADA"
                curr_name="Cardano" :price=this.cryptoData[0][2] :change=this.cryptoData[1][2]
                curve_src="/../img/btc-longer-curve.svg"></tab-tile-summary-cryptocurr>
            <tab-tile-summary-cryptocurr logo_src="/../img/bitcoin-favorites-icon.svg" abbreviature="BTC"
                curr_name="Bitcoin" :price=this.cryptoData[0][0] :change=this.cryptoData[1][0]
                curve_src="/../img/btc-longer-curve.svg"></tab-tile-summary-cryptocurr>
        </div>
        <div v-if="windowWidth <= 940" class="summary-tile-bottom">
            <summary-tile :plotDataProp=this.plotDataProp></summary-tile>
        </div>
        <div class="exp-chart">
            <canvas id="canvas"></canvas>
        </div>
    </div>
</template>

<script>
import TopBarComponent from "./TopBarComponent.vue"
import CurrentBalanceTile from "./CurrentBalanceTile.vue"
import SummaryTile from "./SummaryTile.vue"
import TabTileBar from "./TabTileBar.vue"
import TabTileSummaryCryptocurr from "./TabTileSummaryCryptocurr.vue"


export default {
    components: {
        TopBarComponent,
        CurrentBalanceTile,
        SummaryTile,
        TabTileBar,
        TabTileSummaryCryptocurr
    },
    props: {
        cryptoDataProp: {required:true, type: Array},
        plotDataProp: {required: true, type: Array}
    },
    data() {
        return {
            // cryptoData: [['default','place','holder'],['default','place','holder']],
            cryptoData: this.$root.$data.cryptoData,
            windowWidth: window.innerWidth
        };
    },
    methods: {
        
        
    },
    created() {
    }

}
</script>

<style scoped>
.chart {
    height: 500px;
    width: 500px;
    /* background-color: aquamarine; */
}
.balance-summary {
    display: flex;
    margin-top: 32px;
    margin-left: 68px;
    margin-right: 68px;
}

.balance-summary .summary {
    margin-left: 32px;
}

.summary-tile-bottom {
    margin-top: 32px;
    margin-left: 68px;
}
.tab-tile {
    max-width: 1200px;
    box-sizing: border-box;
    border-radius: 16px;
    background: #F7F7F9;
    margin-top: 32px;
    margin-left: 68px;
    margin-right: 68px;
    padding-top: 32px;
    padding-left: 32px;
}
.blurring {
    /* max-width: 1200px; */
    box-sizing: border-box;
    position: fixed;
    /* margin-left: 68px; */
    /* margin-right: 68px; */
    height: 15%;
    /* width: calc(100% - 136px); */
    width: calc(100%);
    bottom: 0px;
    background: linear-gradient(180deg, rgba(139, 167, 32, 0) 0%, rgba(255, 255, 255, 1) 100%);
    pointer-events: none;
}
</style>