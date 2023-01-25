<template>
    <div class="summary">
        <div class="head">
            <div class="heading">Summary</div>
            <div class="head-btn"><img src="/../img/dots-icon.svg" width="24" height="24"></div>
        </div>
        <div class="chart-plot">
            <img class='chart' src="/../img/summary-chart-icon.svg">
            <img class='plot' src="/../img/summary-plot.svg">
            <div class="pointer-wall"></div>
            <div class="point-in-plot"></div>
            <div class="price-mark">
                <div class="rect">$7,5k</div>
                <img src="/../img/price-mark-triangle-icon.svg">
            </div>
            <div class="timestamp">17 May</div>
        </div>
        <div class="plot-labels">
            <div class="this-month-sign"></div>
            <div class="this-month">This month</div>
            <div class="last-month-sign"></div>
            <div>Last month</div>
        </div>
    </div>
</template>

<script></script>

<style scoped>
   .summary {
    width: 499px;
    height: 336px;
    background: #F7F7F9;
    border-radius: 16px;
   }
     .summary .head {
    display: flex;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    height: 24px;
    margin: 32px 32px 24px 32px;
    justify-content: space-between;
   }
   .summary .plot {
    position: relative;
    top: -162px;
    left: 13px;
   }
   .summary .chart-plot {
    height: 189px;
    padding-bottom: 24px;
    border-bottom: 1px solid #EEEEEE;
   }
   .summary .pointer-wall {
    width: 264px;
    height: 157px;
    border-right: 1px solid #D5D5D6;
    position: relative;
    top: -297px;
   }
   .summary .point-in-plot {
    box-sizing: border-box;
    position: relative;
    top: -458px;
    left: 259px;
    height: 11px;
    width: 11px;
    background: #FAFAFA;
    border: 2px solid #7445FB;
    border-radius: 10px;
   }
   .summary .price-mark {
    position: relative;
    top: -510px;
    left: 236px;
    width: 56px;
   }
   .summary .price-mark .rect {
    width: 56px;
    height: 22px;
    background: #0A041C;
    border-radius: 4px;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
    color: #FAFAFA;
    padding-top: 10px;
   }
   .summary .price-mark img {
    position: relative;
    top: -11px;
   }
   .summary .timestamp {
    position: relative;
    top: -375px;
    left: 40px;
    font-weight: 400;
    font-size: 12px;
    line-height: 10px;
    color: #0A041C;
   }
   .summary .plot-labels {
    display: flex;
    margin-left: 24px;
    margin-top: 17px;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 10px;
    color: #9896A1;
   }
   .summary .plot-labels .this-month-sign {
    width: 8px;
    height: 8px;
    border-radius: 10px;
    background: #7445FB;
    margin-right: 8px;
   }
   .summary .plot-labels .last-month-sign {
    width: 8px;
    height: 8px;
    border-radius: 10px;
    background: #D5D5D6;
    margin-right: 8px;
   }
   .summary .plot-labels .this-month {
    margin-right: 12px;
   }
</style>