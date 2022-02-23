<template>
  <el-dialog
    title="添加地快"
    :visible.sync="dialogVisible"
    width="30%"
  >
    <div class="input-box">
      <div class="flex">
        <span class="width-name">名称：</span>
        <el-input v-model="form.name" placeholder="请输入名称"></el-input>
      </div>
      <div class="flex">
        <span class="width-name">X坐标：</span>
        <el-input v-model="form.coordinateX" placeholder="请输入X坐标"></el-input>
      </div>
      <div class="flex">
        <span class="width-name">Y坐标：</span>
        <el-input v-model="form.coordinateY" placeholder="请输入Y坐标"></el-input>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="add">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>

export default {
  data () {
    return {
      dialogVisible: false,
      form: {
        name: '',
        coordinateX: '',
        coordinateY: ''
      }
    }
  },
  methods: {
    show () {
      this.dialogVisible = true
    },
    add () {
      this.dialogVisible = false
      const dataObj = {
        ...this.form, type: 'add'
      }
      console.log(dataObj)
    }
  }
}
</script>
<style scoped>
.flex {
  display: flex;
  margin-bottom: 10px;
}
.width-name {
  display: inline-block;
  width: 80px;
}
</style>
