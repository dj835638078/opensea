<template>
  <div class='site'>
    <div class='header'>
      <el-button type='primary' @click="$refs.add.show()">添加关注地块</el-button>
    </div>
    <div class='content'>
      <el-table v-loading="loading" :data='tableData' stripe style='width: 100%'>
        <el-table-column prop='image' label='头像'>
          <template slot-scope="scope">
            <img :src="scope.row.image" alt="img" style="width: 40px;height:40px;display: inline-block;">
          </template>
        </el-table-column>
        <el-table-column prop='name' label='地块名' width='180'>
        </el-table-column>
        <el-table-column prop='coordinateX' label='x坐标' width='180'>
        </el-table-column>
        <el-table-column prop='coordinateY' label='y坐标'> </el-table-column>
        <el-table-column prop='size' label='地块大小'> </el-table-column>
        <el-table-column prop='sales' label='周边一环在售地块数'>
        </el-table-column>
        <!-- <el-table-column prop='unsales' label='周边一环未出售地块数'>
        </el-table-column> -->
        <!-- <el-table-column prop='url' label='地块链接'>
          <template slot-scope="scope">
            <a :href="scope.row.url" target="_blank" style="cursor:pointer;">
              {{ scope.row.url }}
            </a>
          </template>
        </el-table-column> -->
        <el-table-column fixed='right' label='操作' width='100'>
          <template slot-scope='scope'>
            <el-button @click='deleteSite(scope.row)' type='danger' size='small'
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <Add ref='add' @refresh="getData" />
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
      tableData: [],
      loading: false
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
      this.$axios
        .post('/api/monitor_lands', dataObj)
        .then(res => {
          this.getData()
        })
    },
    getData () {
      this.loading = true
      this.$axios
        .get('/api/monitor_lands', {})
        .then(res => {
          this.tableData = res.data.items || []
          this.loading = false
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
