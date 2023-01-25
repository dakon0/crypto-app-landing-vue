<template>
    <div>
       <top-bar-component></top-bar-component>
        <div class="balance-summary">
            <current-balance-tile></current-balance-tile>
            <summary-tile></summary-tile>
        </div>
        <div class="tab-tile">
            <tab-tile-bar></tab-tile-bar>
            <tab-tile-summary-cryptocurr logo_src="/../img/bitcoin-favorites-icon.svg" abbreviature="BTC" curr_name="Bitcoin" :price=this.cryptoData[0][0] :change=this.cryptoData[1][0] curve_src="/../img/btc-longer-curve.svg"></tab-tile-summary-cryptocurr>
            <tab-tile-summary-cryptocurr logo_src="/../img/ethereum-favorites-icon.svg" abbreviature="ETH" curr_name="Ethereum" :price=this.cryptoData[0][1] :change=this.cryptoData[1][1] curve_src="/../img/ethereum-longer-curve.svg"></tab-tile-summary-cryptocurr>
            <tab-tile-summary-cryptocurr logo_src="/../img/ripple-favorites-icon.svg" abbreviature="ADA" curr_name="Cardano" :price=this.cryptoData[0][2] :change=this.cryptoData[1][2] curve_src="/../img/btc-longer-curve.svg"></tab-tile-summary-cryptocurr>
            <tab-tile-summary-cryptocurr logo_src="/../img/bitcoin-favorites-icon.svg" abbreviature="BTC" curr_name="Bitcoin" :price=this.cryptoData[0][0] :change=this.cryptoData[1][0] curve_src="/../img/btc-longer-curve.svg"></tab-tile-summary-cryptocurr>
        </div>
    </div>
</template>

<script>
    import TopBarComponent from "./TopBarComponent.vue"
    import CurrentBalanceTile from "./CurrentBalanceTile.vue"
    import SummaryTile from "./SummaryTile.vue"
    import TabTileBar from "./TabTileBar.vue"
    import TabTileSummaryCryptocurr from "./TabTileSummaryCryptocurr.vue"
    import DataService from '../services/DataService.js';


    export default {
        components: {
            TopBarComponent,
            CurrentBalanceTile,
            SummaryTile,
            TabTileBar,
            TabTileSummaryCryptocurr
        }, 
        data(){
            return {
                cryptoData: []
            };
        },
        created() {
            this.getFromServer(); 
        },
        methods: {
            async getFromServer() {
                DataService.getCurrencies().then(data => {this.cryptoData = data});
            }
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
   .tab-tile {
        width: 1040px;
        height: 504px;
        box-sizing: border-box;
        border-radius: 16px;
        background: #F7F7F9; 
        margin-top: 32px;   
        margin-left: 68px;
        margin-right: 68px;
        padding-top: 32px;
        padding-left: 32px;
    }
</style>