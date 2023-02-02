<template>
    <div class="summary">
        <div class="head">
            <div class="heading">Summary</div>
            <div class="head-btn"><img src="/../img/dots-icon.svg" width="24" height="24"></div>
        </div>
        <div v-if="true" class="chart-div">
            <canvas id="chart-canvas"></canvas>
        </div>
        <div v-else class="img-chart-plot">
            <img class='img-chart' src="/../img/summary-chart-icon.svg">
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

<script>
import Chart from 'chart.js/auto'

export default {
    props: {
        plotDataProp: {required: true, type: Array}
    },
    data() {
        return {
            summaryThisMonthPlotData: this.$root.$data.plotData[0],//data fetched from api, but is 
            summaryLastMonthPlotData: this.$root.$data.plotData[1],//in between 0 and 1 becouse of free subscription 
        };
    },
    methods: {
        drawChart() {
            const chartCtx = document.getElementById('chart-canvas').getContext('2d');
            const gradient = chartCtx.createLinearGradient(0, 0, 0, 250);
            gradient.addColorStop(0, 'rgba(116, 69, 251, 0.16)');
            gradient.addColorStop(1, 'rgba(116, 69, 251, 0)');
            new Chart(chartCtx, {
                type: "line",
                data: {
                    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                    datasets: [{
                        data: this.summaryThisMonthPlotData,
                        pointRadius: '0',
                        borderColor: '#7445FB',
                        borderWidth: 2,
                        fill: true,
                        backgroundColor: gradient,
                    },
                    {
                        data: this.summaryLastMonthPlotData,
                        pointRadius: '0',
                        borderColor: '#85858570',
                        borderWidth: 2,
                        borderDash: [5, 2]
                    }],
                },
                options: {
                    animation: {
                        duration: 0,
                        onProgress: this.drawChartPointer,
                        onComplete: this.drawChartPointer
                    },
                    maintainAspectRatio: false,
                    cubicInterpolationMode: 'monotone',
                    plugins: { legend: false, tooltip: { enabled: false } },
                    scales: {
                        x: {
                            grid: {
                                display: false
                            },
                            border: { display: false },
                            ticks: { display: false }
                        },
                        y: {
                            grid: {
                                color: '#85858564',
                                lineWidth: 1,
                                drawTicks: false
                            },
                            border: {
                                display: false,
                                dash: [2, 6],
                            },
                            ticks: {
                                color: 'rgba(0, 0, 0, 0.48)',
                                callback: function (value) {
                                    if (value > 9) return value + 'k  ';
                                    else if (value > 0) return value + 'k   ';
                                    else return value + '     ';
                                }
                            },
                            suggestedMin: 0,
                            suggestedMax: 30
                        }
                    }
                },

            });
        },
        drawChartPointer() {//to draw pointer after first render 
            const chartCtx = document.getElementById('chart-canvas').getContext('2d');
            chartCtx.fillStyle = '#00000010';//drawing pointing line
            chartCtx.fillRect(208, 60, 1, 130);
            chartCtx.fillStyle = '#0A041C';//drawing poiner window
            chartCtx.beginPath();
            chartCtx.roundRect(181, 13, 56, 32, 4);
            chartCtx.fill();
            chartCtx.stroke();
            chartCtx.fillStyle = '#FAFAFA';//drawing text in the pointer window
            chartCtx.font = 'normal 400 14px';
            chartCtx.textAlign = 'center';
            chartCtx.textBaseline = 'middle';
            chartCtx.fillText('$21,4k', 208, 30);
            const pointer = new Image();//image of pointer circle
            const triangle = new Image();//image of triangle
            triangle.onload = function () {
                chartCtx.drawImage(this, 203.5, 45);
            };
            pointer.onload = function () {
                chartCtx.drawImage(this, 203, 55);
            };
            triangle.src = '/../img/price-mark-triangle-icon.svg';
            pointer.src = '/../img/summary-plot-circle-pointer.svg'
        },
        fillSummaryPlotData() {//used data is fetched but between 0 and 1, so we adjust it to look nicer 
            for (let i = 0; i < 10; i++) {
                this.summaryThisMonthPlotData[i] = this.summaryThisMonthPlotData[i] * 30;
                this.summaryLastMonthPlotData[i] = this.summaryLastMonthPlotData[i] * 30;
            }
            this.summaryThisMonthPlotData[4] = 21;
        }
    },
    created() {
    },
    mounted() {
        this.fillSummaryPlotData();
        this.drawChart();
    }

}
</script>

<style scoped>
   .summary {
    box-sizing: border-box;
    width: 499px;
    height: 336px;
    background: #F7F7F9;
    border-radius: 16px;
    /* padding: 32px 32px 0px 32px; */
    padding-top: 32px;
   }
     .summary .head {
    display: flex;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    height: 24px;
    margin: 0px 32px 24px 32px;
    justify-content: space-between;
   }
   .summary .plot {
    position: relative;
    top: -162px;
    left: 13px;
   }
   .summary .img-chart-plot {
    height: 189px;
    padding-bottom: 24px;
    border-bottom: 1px solid #EEEEEE;
   }
   .summary .pointer-border {
    width: 264px;
    height: 157px;
    border-right: 1px solid #D5D5D6;
    position: relative;
    top: -297px;
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
    border-top: solid 1px #EEEEEE;
    display: flex;
    /* margin-left: 24px; */
    /* margin-top: 17px; */
    padding-top: 17px;
    padding-left: 24px;
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
   .summary .chart-div {
    margin: 24px 32px 24px 32px;
   }
   .summary .chart-div canvas{
    width: 435px;
    height: 189px;
   }
</style>