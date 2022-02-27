<template>
  <div id='main' style="width: 1000px;height:1000px;"></div>
</template>

<script>
import * as echarts from 'echarts'
import ecStat from 'echarts-stat'
import dataSource from '../../public/data'
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
      const vm = this
      var chartDom = document.getElementById('main')
      var myChart = echarts.init(chartDom)
      var option
      echarts.registerTransform(ecStat.transform.clustering)
      const data = dataSource
      var CLUSTER_COUNT = 6
      var DIENSIION_CLUSTER_INDEX = 2
      var COLOR_ALL = [
        '#37A2DA',
        '#e06343',
        '#37a354',
        '#b55dba',
        '#b5bd48',
        '#8378EA',
        '#96BFFF'
      ]
      var pieces = []
      for (var i = 0; i < CLUSTER_COUNT; i++) {
        pieces.push({
          value: i,
          label: i,
          color: COLOR_ALL[i]
        })
      }
      option = {
        dataset: [
          {
            source: data
          },
          {
            transform: {
              type: 'ecStat:clustering',
              // print: true,
              config: {
                clusterCount: CLUSTER_COUNT,
                outputType: 'single',
                outputClusterIndexDimension: DIENSIION_CLUSTER_INDEX
              }
            }
          }
        ],
        tooltip: {
          show: true,
          formatter: function (arg) {
            const data = arg.data
            // const imgEth = `<img style='width:30px;height:30px;display: inline-block;position: relative;top:10px'; src=${require('../../public/imgs/eth.png')}/>`
            const str = `x轴: ${data[0]}<br />
                         y轴: ${data[1]}<br />
                         价格: ${vm.getPrice(data[4], data[2])}
                        `
            return str
          }
        },
        visualMap: {
          type: 'piecewise',
          top: 'middle',
          min: 0,
          max: CLUSTER_COUNT,
          left: 10,
          splitNumber: CLUSTER_COUNT,
          dimension: DIENSIION_CLUSTER_INDEX
          // pieces: pieces
        },
        grid: {
          left: 120
        },
        xAxis: {
        },
        yAxis: {},
        dataZoom: [{
          type: 'inside'// 鼠标滚轮缩放
        }],
        // dataZoom: [{ //下方缩放
        //   type: 'slider',
        //   show: true,
        //   realtime: true,
        //   start: 0,
        //   end: 100
        // }],
        // toolbox: { // 右上角框选缩放
        //   show: true,
        //   feature: {
        //     dataZoom: {
        //       yAxisIndex: 'none'
        //     }
        //   }
        // },
        series: {
          type: 'scatter',
          encode: { tooltip: [0, 1] },
          symbolSize: 15,
          itemStyle: {
            borderColor: '#555'
          },
          datasetIndex: 1
        }
      }

      option && myChart.setOption(option)
    }
  }
}
</script>
