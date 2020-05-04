<template>
  <div class="custon»er">
    <el-tooltip effect="dark" content="咨询客服" placement="top">
      <div class="customerIcon" @click="isShowModal = true">
        <i class="el-icon-chat-line-square"></i>
      </div>
    </el-tooltip>
    <el-dialog title="咨询客服" :visible.sync="isShowModal" width="35%">
      <P>如有任何问题，请联系<b>Aditinistrator</b>咨询。</P>
      <P>咨询时间：工作日9:30 - 18:00</P>
      <img src="../assets/QR_Code.png" width="50%" />
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
/deep/ .el-dialog_header {
  border-bottom: 1px solid #e8e8e8;
}
/deep/ .el-dialog_body {
  padding: 10px 20px 20px 20px;
  text-align: center;
}
/deep/ .el-dialog {
  min-width: 450px;
}
</style>
