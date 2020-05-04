<template>
  <el-footer>
    <div class="link">
      <el-link href="#" type="info">官网</el-link>
      <el-link href="#" type="info">社区</el-link>
      <el-link href="#" type="info">专业版</el-link>
    </div>
    <div>
      <span class="text">Copyright © 2020 北京mouiiounou科技有限公司</span>
      <el-divider direction="vertical"></el-divider>
      <el-link hrefs="#" type="info">京ICP备11082652号-6</el-link>
    </div>
  </el-footer>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style lang="less" scoped>
.el-footer {
  div {
    text-align: center;
    // margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .link {
    margin-bottom: 8px;
    .el-link {
    margin: 0 22px;
    }
  }
  .text {
    font-size: small;
    color: #909399;
  }
}
</style>
