<template>
  <div class="http-error">
    <el-row>
      <el-col :xs="24" :sm="14" :md="14">
        <div class="http-error-img" :style="{ 'background-image': imgUrl }"></div>
      </el-col>
      <el-col :xs="24" :sm="10" :md="10">
        <div class="text">
          <h1>{{ label }}</h1>
          <p>{{ info }}</p>
          <el-button type="primary" @click="$router.push('/home')">回到首页</el-button>
          <el-button type="default" @click="$router.go(-1)">后退</el-button>
        </div>
      </el-col>
    </el-row>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: 'HttpError',
  props: {
    label: {
      type: Number,
      default: 404,
    },
    info: {
      type: String,
      default: 'Exception Error',
    },
    imgUrl: {
      type: String,
      required: true,
    },
  },
  components: {
    Footer,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.http-error {
  .text {
    margin: 1rem;
  }

  @media screen and (max-width: 768px) {
    .text {
      margin: 1rem;
      text-align: center;
    }
  }

  h1 {
    margin-bottom: 24px;
    color: #515a6e;
    font-weight: 600;
    font-size: 72px;
    line-height: 72px;
  }

  p {
    margin-bottom: 16px;
    color: #808695;
    font-size: 20px;
    line-height: 28px;
  }

  /deep/ .el-row {
    width: 100%;
    margin: 5rem 0;
  }

  /deep/ .el-button {
    margin: 1rem 1rem 0 0;
    font-size: 18px;
  }
}
.http-error-img {
  float: right;
  width: 90%;
  max-height: 450px;
  height: 450px;
  margin: 1rem;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
  // background-image: url('https://file.iviewui.com/iview-pro/icon-404.svg');
}
.footer {
  // display: fix;
  position: fixed;
  bottom: 1.2%;
  // left: 36%;
  width: 100%;
  margin: 0 auto;
}
</style>
