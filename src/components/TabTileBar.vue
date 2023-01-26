<template>
    <div class="tab-bar">
        <div class="summary activated">Summary</div>
        <div class="table">Table</div>
        <div class="charts">Charts</div>
        <div class="reporting">Reporting</div>
        <div class="analisis">Analisis</div>
    </div>
</template>

<script>

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