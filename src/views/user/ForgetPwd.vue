<template>
  <div class="forget-pwd" v-loading="loading" element-loading-background="rgba(248, 248, 249, 0.4)" :element-loading-text="$t('forgetPwd.loading')">
    <div class="forget-pwd-item" @click="handleClick({ name: 'home' })">
      <el-avatar :size="60" :src="require('@/assets/user.png')"></el-avatar>
    </div>
    <p class="forget-pwd-item forget-pwd-text">{{ $t('forgetPwd.forgetPassword') }}</p>
    <p v-if="invalidEmail" class="error-text">
      <el-alert :title="$t('forgetPwd.invalidInfo')" type="error" show-icon @close="invalidEmail = false"></el-alert>
    </p>
    <section v-show="showForgetPwd" class="forget-pwd-item">
      <el-form
        label-position="top"
        label-width="30px"
        ref="forgetPwdForm"
        :model="forgetPwdForm"
        :rules="forgetPwdFormRules"
        :hide-required-asterisk="true"
        class="forget-pwd-form"
      >
        <el-form-item :label="$t('forgetPwd.forgetPwdLabel')" prop="forgetPwd" for="forgetPassword">
          <el-input size="medium" v-model="forgetPwdForm.email" id="forgetPassword">
            <i slot="prefix" class="el-icon-message"></i>
          </el-input>
        </el-form-item>
        <el-button type="success" size="medium" class="forget-pwd-btn" @click="handleForgetPwdBtnClick">{{ $t('forgetPwd.sendEmail') }}</el-button>
      </el-form>
    </section>
    <p class="new-user">
      {{ $t('login.newToVue') }}
      <el-link type="primary" :underline="true" class="link" @click="handleClick({ name: 'signup' })">{{ $t('login.createNewCount') }}</el-link>
    </p>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'

export default {
  name: '',
  components: {
    Footer,
  },
  data() {
    return {
      invalidEmail: false,
      loading: false,
      forgetPwdForm: {
        email: '',
      },
      showForgetPwd: true,
    }
  },
  computed: {
    forgetPwdFormRules() {
      this.$nextTick(() => {
        this.$refs.forgetPwdForm.clearValidate()
      })
      return {
        forgetPwd: [
          // { required: true, message: 'required', trigger: 'blur' },
          // { pattern: /[1-9]+/, message: 'Invalid email' },
        ],
      }
    },
  },
  methods: {
    handleClick(payload) {
      this.$router.push(payload)
    },
    handleForgetPwdBtnClick() {
      this.$refs.forgetPwdForm.validate(valid => {
        if (valid) {
          this.loading = true
          setTimeout(() => {
            this.$router.push('/resetPwd?action=FromforgetPwd')
          }, 3000)
        } else {
          // console.log('invalid')
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
@import '../../common/theme/less/variables';

.forget-pwd {
  position: relative;
  height: calc(100vh - 1.3rem - 0.6rem);

  .el-avatar {
    cursor: pointer;
  }
  .forget-pwd-item {
    display: flex;
    justify-content: center;
    margin: 1.3rem 0;
  }
  .forget-pwd-text {
    font-size: 1.5rem;
    font-weight: 400;
    color: #4c4545;
  }
  .error-text {
    width: 32 * @default_rem_10px;
    margin: 0 auto;
  }
  .form-card(@height) {
    padding: 1rem;
    box-sizing: border-box;
    width: 32 * @default_rem_10px;
    height: @height * @default_rem_10px;
    background: #fff;
    border: 1px solid #e4e4e4;
    border-radius: 5px;
    // box-shadow: 0px 0px 10px 1px #e4e4e4;
  }
  .forget-pwd-form {
    .form-card(20);
  }
  .new-user {
    width: 32 * @default_rem_10px;
    margin: 1rem auto;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    border-radius: 5px;
    border: 1px solid #e4e4e4;
    color: #3c3d40;
    .link {
      margin: 0 5px;
      padding-top: 3px;
    }
  }
  .el-form-item {
    margin-bottom: 0.8rem;
  }
  /deep/ .el-form-item__label {
    padding: 0 !important;
    font-weight: 600;
    line-height: 30px;
    margin: 1.5px 0;
  }
  /deep/ .el-footer {
    // margin-top: 11rem;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  /deep/ .el-input__prefix {
    margin-left: 0.3rem;
  }
  .forget-pwd-btn {
    position: relative;
    overflow: hidden;
    margin: 0.8rem 0;
    width: 100%;
    background: none;
    border: transparent;
    border-right-color: #f6ca9d;
    background-color: #f6ca9d;
    background-image: linear-gradient(45deg, #41b883, #f6ca9d);
    // &:hover {
    //   background-image: linear-gradient(45deg, #6fbb99, #f0d9c2);
    // }
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: radial-gradient(circle, #41b883 15%, transparent 10%);
      background-repeat: no-repeat;
      background-position: 50%;
      transform: scale(10, 10);
      opacity: 0;
      transition: transform 0.6s, opacity 1s;
    }
    &:active::after {
      transform: scale(0, 0);
      opacity: 0.3;
      transition: 0s;
    }
  }
}
</style>
