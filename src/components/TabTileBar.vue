<template>
    <div class="tab-bar">
        <div class="summary" :class="{activated: summaryTabActivated}" @click="activateSummaryTab">Summary</div>
        <div class="table" :class="{activated: tableTabActivated}" @click="activateTableTab">Table</div>
        <div class="charts" :class="{activated: chartsTabActivated}" @click="activateChartsTab">Charts</div>
        <div class="reporting" :class="{activated: reportingTabActivated}" @click="activateReportingTab">Reporting</div>
        <div class="analisis" :class="{activated: analisisTabActivated}" @click="activateAnalisisTab">Analisis</div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                summaryTabActivated: true,
                tableTabActivated: false,
                chartsTabActivated: false,
                reportingTabActivated: false, 
                analisisTabActivated: false, 
            };
        },
        methods: {
            activateSummaryTab() {
                this.summaryTabActivated= true;
                this.tableTabActivated = false;
                this.chartsTabActivated= false;
                this.reportingTabActivated= false;
                this.analisisTabActivated= false;
                this.$emit('summaryTabActivated');
            },
            activateTableTab() {
                this.summaryTabActivated= false;
                this.tableTabActivated = true;
                this.chartsTabActivated= false;
                this.reportingTabActivated= false;
                this.analisisTabActivated= false;
                this.$emit('tableTabActivated');
            },
            activateChartsTab() {
                this.summaryTabActivated= false;
                this.tableTabActivated = false;
                this.chartsTabActivated= true;
                this.reportingTabActivated= false;
                this.analisisTabActivated= false;
                this.$emit('chartsTabActivated');

            },
            activateReportingTab() {
                this.summaryTabActivated= false;
                this.tableTabActivated = false;
                this.chartsTabActivated= false;
                this.reportingTabActivated= true;
                this.analisisTabActivated= false;
                this.$emit('reportingTabActivated');

            },
            activateAnalisisTab() {
                this.summaryTabActivated= false;
                this.tableTabActivated = false;
                this.chartsTabActivated= false;
                this.reportingTabActivated= false;
                this.analisisTabActivated= true;
                this.$emit('analisisTabActivated');
            },

        }
    }
</script>

<style scoped>
    .tab-bar {
        display: flex;
        font-weight: 400;
        color: #9896A1;
        font-size: 16px;
        line-height: 24px;
        padding-bottom: 1px;
        border-bottom: solid 1px #EBEBF3;
        margin-bottom: 32px;
    }
    .tab-bar div{
        margin-right: 24px;
    }
    .activated {
        font-weight: 500;
        color: #0A041C;
        padding-bottom: 11px;
        border-bottom: #7445FB solid 4px;
    }
</style>