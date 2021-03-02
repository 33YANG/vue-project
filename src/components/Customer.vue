<template>
  <div class="customer">
    <el-tooltip effect="dark" content="咨询客服" placement="top">
      <div class="customerIcon" @click="isShowModal = true">
        <i class="el-icon-chat-line-square"></i>
      </div>
    </el-tooltip>
    <el-dialog title="咨询客服" :visible.sync="isShowModal" width="500px" class="width-auto-zoom">
      <p>如有任何问题，请联系<b>Administrator</b>咨询。</p>
      <p>咨询时间：工作日 9:30 - 18:00</p>
      <img src="../assets/QR_Code.png" width="50%" />
      <!-- <img src="../assets/user.png" width="50%" /> -->
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {
      isShowModal: false,
    }
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.customerIcon {
  display: flex;
  align-items: center;
  font-size: 23px;
  justify-content: center;
  position: fixed;
  cursor: pointer;
  left: calc(100vw - 78px);
  top: calc(100vh - 78px);
  width: 48px;
  height: 48px;
  border-radius: 8px;
}

/deep/ .el-dialog__header {
  border-bottom: 1px solid #e8e8e8;
}

/deep/ .el-dialog__body {
  padding: 10px 20px 20px 20px;
  text-align: center;
}
/deep/ .el-dialog {
  border-radius: 6px;
}
</style>
