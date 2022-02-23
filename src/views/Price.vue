<template>
  <div class='site'>
    <div class='header' >
      <el-input v-model="form.coordinateX" placeholder="请输入X坐标" class="input-search" />
      <el-input v-model="form.coordinateY" placeholder="请输入Y坐标" class="input-search" />
      <el-button type='primary' @click="getData">搜索</el-button>
    </div>
    <div class='content'>
      <el-table :data='tableData' stripe style='width: 100%'>
        <el-table-column prop='name' label='地块名' width='180'>
        </el-table-column>
        <el-table-column prop='coordinateX' label='x坐标' width='180'>
        </el-table-column>
        <el-table-column prop='coordinateY' label='y坐标'> </el-table-column>
        <el-table-column prop='history' label='历史信息'> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Price',
  components: {
  },
  data () {
    return {
      form: {
        coordinateX: '',
        coordinateY: ''
      },
      tableData: [
        {
          name: '2016-05-02',
          coordinateX: '王小虎',
          coordinateY: '上海市普陀区金沙江路 1518 弄',
          history: []
        },
        {
          name: '2016-05-04',
          coordinateX: '王小虎',
          coordinateY: '上海市普陀区金沙江路 1517 弄',
          history: []
        },
        {
          name: '2016-05-01',
          coordinateX: '王小虎',
          coordinateY: '上海市普陀区金沙江路 1519 弄',
          history: []
        },
        {
          name: '2016-05-03',
          coordinateX: '王小虎',
          coordinateY: '上海市普陀区金沙江路 1516 弄',
          history: []
        }
      ]
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    deleteSite (row) {
      const type = 'delete'
      const { name, coordinateX, coordinateY } = row
      const dataObj = {
        name, coordinateX, coordinateY, type
      }
      console.log(dataObj)
    },
    getData () {
      console.log(this.form)
      this.$axios
        .get('/api/monitor_lands', {})
        .then(res => {
          console.log(res)
        })
    }
  }
}
</script>

<style scoped lang='scss'>
.site {
  .header {
    display: flex;
    .input-search {
      width: 300px;
      margin-right: 20px;
    }
  }
  .content {
    margin-top: 15px;
    .pagination {
      margin-top: 10px;
    }
  }
}
</style>
