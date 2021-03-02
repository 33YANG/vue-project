<template>
  <el-footer>
    <div class="link">
      <el-link href="#" type="info">{{ $t('footer.officialSite') }}</el-link>
      <el-link href="#" type="info">{{ $t('footer.community') }}</el-link>
      <el-link href="#" type="info">{{ $t('footer.professionalEdition') }}</el-link>
    </div>
    <div>
      <span class="text"
        >{{ $t('footer.techCompany') }} |
        <el-link href="#" type="info">{{ $t('footer.infoNumber') }}</el-link>
      </span>
      <!-- <el-divider direction="vertical"></el-divider> -->
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
  padding: 8px;
  div {
    text-align: center;
    // margin: 10px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .link {
    margin-bottom: 10px;
    .el-link {
      margin: 0 22px;
    }
  }
  .text {
    font-size: small;
    color: #909399;
    margin: 3px;
    font-weight: 500;
    .el-link {
      margin-top: -3px;
      padding: 3px 0;
      &::after {
        border-bottom: none;
      }
    }
  }
}
</style>
