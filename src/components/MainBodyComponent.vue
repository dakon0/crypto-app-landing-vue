<template>
    <div>
        <top-bar-component ></top-bar-component>
        <div v-show="overviewTabContent" class="overview">
            <div class="balance-summary" :class="{mobileMode: this.windowWidth < 650}">
                <current-balance-tile></current-balance-tile>
                <summary-tile v-if="windowWidth > 1000" :plotDataProp=this.plotDataProp></summary-tile>
            </div>
            <div class="tab-tile" :class="{mobileMode: this.windowWidth < 650}">
                <tab-tile-bar @summaryTabActivated = summaryTabActivated()
                            @tableTabActivated = tableTabActivated()
                            @chartsTabActivated = chartsTabActivated()
                            @reportingTabActivated = reportingTabActivated()
                            @analisisTabActivated = analisisTabActivated()></tab-tile-bar>
                <div v-if="summaryTabShowContent" class="tab-tile-summary">
                    <tab-tile-summary-cryptocurr logo_src="/../img/bitcoin-favorites-icon.svg" abbreviature="BTC"
                        curr_name="Bitcoin" :price=this.cryptoData[0][0] :change=this.cryptoData[1][0]
                        :curve_src=this.curveSources></tab-tile-summary-cryptocurr>
                    <tab-tile-summary-cryptocurr logo_src="/../img/ethereum-favorites-icon.svg" abbreviature="ETH"
                        curr_name="Ethereum" :price=this.cryptoData[0][1] :change=this.cryptoData[1][1]
                        :curve_src=this.curveSources></tab-tile-summary-cryptocurr>
                    <tab-tile-summary-cryptocurr logo_src="/../img/ripple-favorites-icon.svg" abbreviature="ADA"
                        curr_name="Cardano" :price=this.cryptoData[0][2] :change=this.cryptoData[1][2]
                        :curve_src=this.curveSources></tab-tile-summary-cryptocurr>
                    <tab-tile-summary-cryptocurr logo_src="/../img/xrp-logo-icon.png" abbreviature="XRP"
                        curr_name="Ripple" :price=this.cryptoData[0][3] :change=this.cryptoData[1][3]
                        :curve_src=this.curveSources></tab-tile-summary-cryptocurr>
                </div>
                <div v-else-if="tableTabShowContent"></div>
                <div v-else-if="chartsTabShowContent"></div>
                <div v-else-if="reportingTabShowContent"></div>
                <div v-else-if="analisisTabShowContent"></div>

            </div>
            <div v-if="windowWidth <= 1000" class="summary-tile-bottom" :class="{mobileModeSummaryTile: this.windowWidth < 650}">
                <summary-tile :plotDataProp=this.plotDataProp></summary-tile>
            </div>

            <div class="exp-chart">
                <canvas id="canvas"></canvas>
            </div>

 

        </div>
        <div class="blurring" :class="{pageIsTall: this.windowHeight > 1000}"></div>  
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
        overviewTabContent: {required:true, type: Boolean},
        cryptoDataProp: {required:true, type: Array},
        plotDataProp: {required: true, type: Array}
    },
    data() {
        return {
            cryptoData: this.$root.$data.cryptoData,
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight,
            curveSources: ['/../img/btc-longer-curve.svg','/../img/ethereum-longer-curve.svg'],
            summaryTabShowContent: true,
            tableTabShowContent: false,
            chartsTabShowContent: false,
            reportingTabShowContent: false,
            analisisTabShowContent: false,
        };
    },
    methods: {
        summaryTabActivated(){
            this.summaryTabShowContent = true;
            this.tableTabShowContent = false;
            this.chartsTabShowContent = false;
            this.reportingTabShowContent = false;
            this.analisisTabShowContent = false;
        },
        tableTabActivated(){
            this.summaryTabShowContent = false;
            this.tableTabShowContent = true;
            this.chartsTabShowContent = false;
            this.reportingTabShowContent = false;
            this.analisisTabShowContent = false;
        },
        chartsTabActivated(){
            this.summaryTabShowContent = false;
            this.tableTabShowContent = false;
            this.chartsTabShowContent = true;
            this.reportingTabShowContent = false;
            this.analisisTabShowContent = false;
        },
        reportingTabActivated(){
            this.summaryTabShowContent = false;
            this.tableTatabShowContent = false;
            this.chartsTabShowContent = false;
            this.reportingTabShowContent = true;
            this.analisisTabShowContent = false;
        },
        analisisTabActivated(){
            this.summaryTabShowContent = false;
            this.tableTabShowContent = false;
            this.chartsTabShowContent = false;
            this.reportingTabShowContent = false;
            this.analisisTabShowContent = true;
        },
        onResize(){
            this.windowWidth = window.innerWidth;
            this.windowHeight = window.innerHeight;
        }
        
    },
    created() {
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
    min-height: 504px;
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
/* .overview {
    position: relative;
} */
.blurring {
    position: fixed;
    bottom: 0;
    box-sizing: border-box;
    max-width: 1176px;
    width: 100%;
    height: 136px;
    border-radius: 0 0 20px 20px;
    background: linear-gradient(180deg, rgba(139, 167, 32, 0) 0%, rgba(255, 255, 255, 1) 100%);
}
.blurring.pageIsTall{
    /* position: absolute; */
    /* top: calc(100% - 150px); */
    position: fixed;
    top: 850px
}
.mobileMode{
    margin-left: 2px;
    margin-right: 2px;
    padding-left: 2px;
}
.mobileModeSummaryTile {
    margin-left: 2px;
    margin-right: 2px;
}
.mobileMode .tab-bar {/* .tab-bar element is located in TabTileBar.vue */
    margin-left: 4px;
}
</style>