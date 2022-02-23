<template>
  <div class='site'>
    <div class='header'>
      <el-button type='primary' @click="$refs.add.show()">添加关注地块</el-button>
    </div>
    <div class='content'>
      <el-table :data='tableData' stripe style='width: 100%'>
        <el-table-column prop='name' label='地块名' width='180'>
        </el-table-column>
        <el-table-column prop='coordinateX' label='x坐标' width='180'>
        </el-table-column>
        <el-table-column prop='coordinateY' label='y坐标'> </el-table-column>
        <el-table-column prop='size' label='地块大小'> </el-table-column>
        <el-table-column prop='image' label='头像'> </el-table-column>
        <el-table-column prop='sales' label='周边一环在售地块数'>
        </el-table-column>
        <el-table-column prop='unsales' label='周边一环未出售地块数'>
        </el-table-column>
        <el-table-column prop='url' label='地块链接'> </el-table-column>
        <el-table-column fixed='right' label='操作' width='100'>
          <template slot-scope='scope'>
            <el-button @click='deleteSite(scope.row)' type='danger' size='small'
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Add ref='add' />
  </div>
</template>

<script>
import Add from './add'
export default {
  name: 'Site',
  components: {
    Add
  },
  data () {
    return {
      tableData: [
        {
          name: '2016-05-02',
          coordinateX: '王小虎',
          coordinateY: '上海市普陀区金沙江路 1518 弄',
          size: 100,
          image: '',
          sales: 12,
          unsales: 12,
          url: 'dds'
        },
        {
          name: '2016-05-04',
          coordinateX: '王小虎',
          coordinateY: '上海市普陀区金沙江路 1517 弄',
          size: 100,
          image: '',
          sales: 12,
          unsales: 12,
          url: 'ccc'
        },
        {
          name: '2016-05-01',
          coordinateX: '王小虎',
          coordinateY: '上海市普陀区金沙江路 1519 弄',
          size: 100,
          image: '',
          sales: 12,
          unsales: 12,
          url: 'xz'
        },
        {
          name: '2016-05-03',
          coordinateX: '王小虎',
          coordinateY: '上海市普陀区金沙江路 1516 弄',
          size: 100,
          image: '',
          sales: 12,
          unsales: 12,
          url: 'cx'
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
  .content {
    margin-top: 15px;
    .pagination {
      margin-top: 10px;
    }
  }
}
</style>
