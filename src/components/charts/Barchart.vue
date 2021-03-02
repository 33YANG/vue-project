<template>
  <div id="barChart"></div>
</template>

<script>
const echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/bar')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/grid')
require('echarts/lib/component/title')

export default {
  name: 'Barchart',
  // components: {},
  props: {
    width: {
      type: String,
      default: '880px',
    },
    height: {
      type: String,
      default: '300px',
    },
  },
  data() {
    return {
      charts: '',
    }
  },
  mounted() {
    const div = document.getElementById('barChart') || null
    if (!div) return
    // 元素上设置的height在此时会变为‘’，再重新设置一遍height
    div.style.height = this.height
    // div.style.width = this.width
    this.charts = echarts.init(div)
    this.charts.setOption({
      title: {
        text: '访问量趋势',
        textStyle: {
          fontWeight: 600,
          fontSize: 14,
        },
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          axisTick: {
            alignWithLabel: true,
          },
          axisLine: {
            lineStyle: {
              color: '#777888',
            },
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            lineStyle: {
              color: '#ebebeb',
            },
          },
        },
      ],
      series: [
        {
          name: '直接访问',
          type: 'bar',
          barWidth: '80%',
          data: [9728, 4578, 12768, 4982, 9665, 5489, 3288, 13422, 6753, 7463, 8162, 6545],
          itemStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: '#68ccfe', // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: '#1495eb', // 100% 处的颜色
                },
              ],
            },
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
      // console.log('Triggle Resize')
    },
  },
}
</script>

<style lang="less" scoped></style>
