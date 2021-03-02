<template>
  <div :id="chartId"></div>
</template>

<script>
const echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/line')
require('echarts/lib/component/tooltip')

export default {
  name: 'Linechart',
  // components: {},
  props: {
    chartId: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      default: '25px',
    },
    option: {
      type: Object,
      default: () => {
        return { data: [820, 962, 900, 999, 810, 910, 899], itemStyleColor: '#32d684', areaStyleColor: '#b2f0d1' }
      },
    },
  },
  data() {
    return {
      charts: '',
    }
  },
  mounted() {
    const div = document.getElementById(this.chartId) || null
    if (!div) return
    // 元素上设置的height在此时会变为‘’，再重新设置一遍height
    div.style.height = this.height
    this.charts = echarts.init(div)
    this.charts.setOption({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        show: false,
      },
      yAxis: {
        type: 'value',
        show: false,
        min: 700,
        max: 1000,
      },
      grid: {
        top: '2px',
        left: '8px',
        bottom: '0px',
        right: '8px',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          label: {
            backgroundColor: '#6a7985',
          },
        },
      },
      series: [
        {
          data: this.option.data,
          type: 'line',
          smooth: true,
          itemStyle: {
            opacity: 0,
            color: this.option.itemStyleColor,
          },
          areaStyle: {
            color: this.option.areaStyleColor,
          },
        },
      ],
    })
    window.addEventListener('resize', this.resizeFunc)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeFunc)
  },
  methods: {
    resizeFunc() {
      this.charts.resize()
    },
  },
}
</script>

<style lang="less" scoped></style>
