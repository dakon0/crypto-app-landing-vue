<template>
    <div>
       <top-bar-component></top-bar-component>
        <div class="balance-summary">
            <div class="current-balance">
                <div class="head">
                    <div class="heading">Current Balance</div>
                    <div class="head-btn"><img src="/../img/dots-icon.svg" width="24" height="24"></div>
                </div>
                <p class="current-balance-number"><span class="dollar">$</span><span class="price">21 432.23</span></p>
                <div class="change-to-last-month">
                    <img src="/../img/increase-balance-icon.svg">
                    <div>12% vs lsast month</div>
                </div>
                <div class="invest-report-buttons">
                    <div class="invest">Quich Invest</div>
                    <div class="report">Show Report</div>
                </div>
            </div>
            <div class="summary"></div>
        </div>
    </div>
</template>

<script>
    import TopBarComponent from "./TopBarComponent.vue"

    export default {
        components: {
            TopBarComponent
        }
    }
</script>

<style scoped>
   .current-balance {
    width: 509px;
    height: 336px;
    background: #F7F7F9;
    border-radius: 16px;
    margin-right: 32px;
   }
   .current-balance .head {
    display: flex;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    height: 24px;
    margin: 32px 32px 40px 32px;
    justify-content: space-between;
   }
   .current-balance .current-balance-number {
    font-weight: 300;
    font-size: 56px;
    line-height: 56px;
    margin-top: 40px;
    margin-left: 32px;
    margin-bottom: 16px;
    text-align: left;
   } 
   .current-balance .current-balance-number .dollar{
    color: #9896A1;
   }
   .current-balance .current-balance-number .price{
    color: #0A041C;
    }
    .change-to-last-month {
        display: flex;
        align-items: center;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: #2DC78F;
        margin-left: 32px;
        margin-bottom: 72px;
    }
    .invest-report-buttons{
        display:flex;
        align-items: center;
        margin-left: 32px;
    }
    .invest-report-buttons .invest{
        box-sizing: border-box;
        width: 109px;
        height: 40px;
        background: #7445FB;
        border-radius: 4px;
        padding-top: 8px;
        margin-right: 8px;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color:#FFFFFF;
    }
    .invest-report-buttons .report{
        box-sizing: border-box;
        width: 112px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #EBEBF3;
        padding-top: 8px;
        border-radius: 4px;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: #7445FB;

    }

   .summary {
    width: 499px;
    height: 336px;
    background: #F7F7F9;
    border-radius: 16px;
   }
   .balance-summary {
    display: flex;
    margin-top: 32px;
    margin-left: 68px;
   }
</style>