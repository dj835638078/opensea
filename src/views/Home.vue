<template>
  <div style="display: flex; justify-content: center;">
    <div id='main' style="width: 1100px;height:1100px;"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
// import ecStat from 'echarts-stat'
// import dataSource from '../../public/data'
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {},
  mounted () {
    this.init()
  },
  methods: {
    getPrice (value, price) {
      let flag
      switch (value) {
        case 0:
          flag = '无'
          break
        case 1:
          flag = 'ETH:'
          break
        case 2:
          flag = 'SAND:'
          break
        case 3:
          flag = '其他:'
          break
      }
      return flag + price
    },
    init () {
      // const vm = this
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)
      var option
      // var ROOT_PATH = 'http://172.16.32.22:5678'
      const dataURL = '/api/opensea_lands'
      const xhr = new XMLHttpRequest()
      xhr.open('GET', dataURL, true)
      // xhr.responseType = 'arraybuffer'
      myChart.showLoading()
      xhr.onload = function (e) {
        myChart.hideLoading()
        var rawData = JSON.parse(this.response).data.items
        var COLORS = [
          '#CCCCCC',
          '#B22222',
          '#FF4500',
          '#F4A460',
          '#FFDEAD',
          '#FFFF00',
          '#ADFF2F',
          '#32CD32',
          '#3CB371',
          '#2E8B57'
        ]
        var pieces = []

        var CLUSTER_COUNT = 10
        var DIENSIION_CLUSTER_INDEX = 2
        for (var i = 0; i < CLUSTER_COUNT; i++) {
          pieces.push({
            value: i,
            label: 'level ' + i,
            color: COLORS[i]
          })
        }
        option = {
          title: {
            left: 'center',
            text:
              echarts.format.addCommas(Math.round(rawData.length)) + ' Points',
            subtext: 'Fake data'
          },
          tooltip: {
            show: true,
            formatter: function (arg) {
              const data = arg.data
              // const imgEth = `<img style='width:30px;height:30px;display: inline-block;position: relative;top:10px'; src=${require('../../public/imgs/eth.png')}/>`
              const str = `x轴: ${data[0]}<br />
                          y轴: ${data[1]}<br />
                          Level: ${data[2]}
                          `
              return str
            }
          },
          toolbox: {
            right: 20,
            feature: {
              dataZoom: {}
            }
          },
          grid: {
            right: 70,
            bottom: 70
          },
          xAxis: {
            name: 'X',
            type: 'value',
            axisTick: { show: false }, // 刻度
            axisLine: { show: false, onZero: true }, // 坐标轴线
            splitLine: { show: true }, // 网格线
            max: 410,
            min: -410,
            interval: 1,
            boundaryGap: [0, '100%'], // 留白
            triggerEvent: true, // 是否交互
            alignWithLabel: true
          },
          yAxis: {
            name: 'Y',
            type: 'value',
            axisTick: { show: false },
            axisLine: { show: false, onZero: true },
            splitLine: { show: true },
            max: 410,
            min: -410,
            interval: 1,
            boundaryGap: [0, '100%'],
            triggerEvent: true,
            alignWithLabel: true
          },
          visualMap: {
            type: 'piecewise',
            top: 'middle',
            left: -5,
            dimension: DIENSIION_CLUSTER_INDEX,
            pieces: pieces
          },
          dataZoom: [
            {
              type: 'inside',
              start: 48,
              end: 53
            },
            {
              type: 'slider',
              showDataShadow: false,
              handleIcon:
                'path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
              handleSize: '80%'
            },
            {
              type: 'inside',
              orient: 'vertical',
              start: 48,
              end: 53
            },
            {
              type: 'slider',
              orient: 'vertical',
              showDataShadow: false,
              handleIcon:
                'path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
              handleSize: '80%'
            }
          ],
          animation: false,
          series: [
            {
              type: 'scatter',
              data: rawData,
              dimensions: ['x', 'y'],
              symbolSize: 20,
              itemStyle: {
                opacity: 1,
                color: function (params) {
                  return COLORS[params.data[2]]
                }
              },
              blendMode: 'source-over',
              large: true,
              largeThreshold: 500
            }
          ]
        }
        myChart.setOption(option)
      }
      xhr.send()
      option && myChart.setOption(option)
    }
  }
}
</script>
