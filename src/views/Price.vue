<template>
  <div class='site'>
    <div class='header' >
      <el-input v-model.number="form.x" placeholder="请输入X坐标" class="input-search" />
      <el-input v-model.number="form.y" placeholder="请输入Y坐标" class="input-search" />
      <el-button type='primary' @click="lookData">搜索</el-button>
    </div>
    <div class='content'>
      <el-table v-loading="loading" :data='tableData' stripe style='width: 100%'>
        <el-table-column prop='name' label='地块名' width='180'>
        </el-table-column>
        <el-table-column prop='x' label='x坐标' width='180'>
        </el-table-column>
        <el-table-column prop='y' label='y坐标'> </el-table-column>
        <el-table-column prop='ask_price' label='最后价格'> </el-table-column>
        <el-table-column prop='update_time' label='更新时间'> </el-table-column>
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
        x: '',
        y: ''
      },
      tableData: [],
      loading: false
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.loading = true
      this.$axios
        .get('/api/history_prices', {})
        .then(res => {
          this.tableData = res.data.items || []
          this.loading = false
        })
    },
    lookData () {
      const objData = this.form
      this.loading = true
      this.$axios
        .post('/api/history_prices', objData)
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
