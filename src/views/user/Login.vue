<template>
  <div class="login" v-loading="loading" element-loading-background="rgba(248, 248, 249, 0.4)" :element-loading-text="$t('login.loading')">
    <div class="login-item" @click="handleClick({ name: 'home' })">
      <el-avatar :size="60" :src="require('@/assets/user.png')"></el-avatar>
    </div>
    <p class="login-item login-text">{{ $t('login.loginText') }}</p>
    <p v-if="invalidUser" class="error-text">
      <el-alert :title="$t('login.invalidInfo')" type="error" show-icon @close="invalidUser = false"></el-alert>
    </p>
    <section class="login-item">
      <el-form
        label-position="top"
        label-width="30px"
        ref="loginForm"
        :model="loginForm"
        :rules="rules"
        :hide-required-asterisk="true"
        class="login-form"
      >
        <el-form-item :label="$t('login.userNameEmail')" prop="name" for="name">
          <el-input size="medium" v-model="loginForm.name" id="name" maxlength="20">
            <i slot="prefix" class="el-icon-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item class="pwd-item" prop="password" for="password">
          <span slot="label">
            <span>{{ $t('login.password') }}</span>
            <el-link type="primary" :underline="false" class="forget-pwd" @click="handleClick({ name: 'forgetPwd' })">{{
              $t('login.forgetPwd')
            }}</el-link>
          </span>
          <el-input size="medium" v-model="loginForm.password" show-password id="password" maxlength="20">
            <i slot="prefix" class="el-icon-lock"></i>
          </el-input>
        </el-form-item>
        <el-button type="success" size="medium" class="signin-btn" @click="submitForm">{{ $t('login.signin') }}</el-button>
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
// import Loading from '@/components/Loading.vue'

export default {
  name: '',
  components: {
    Footer,
  },
  data() {
    return {
      loginForm: {
        name: '',
        password: '',
      },
      invalidUser: false,
      loading: false,
    }
  },
  computed: {
    rules() {
      this.$nextTick(() => {
        this.$refs.loginForm.clearValidate()
      })
      return {
        name: [{ required: true, message: this.$t('login.inputName'), trigger: 'blur' }],
        password: [{ required: true, message: this.$t('login.inputPassword'), trigger: 'blur' }],
      }
    },
  },
  methods: {
    handleClick(payload) {
      this.$router.push(payload)
    },
    submitForm() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.invalidUser = false
          setTimeout(() => {
            this.$router.push({ name: 'home' })
          }, 3000)
        } else {
          this.invalidUser = true
        }
      })
    },
  },
}
</script>

<style lang="less" scoped>
@import '../../common/theme/less/variables';

.login {
  position: relative;
  height: calc(100vh - 1.3rem - 0.6rem);

  .el-avatar {
    cursor: pointer;
  }
  .login-item {
    display: flex;
    justify-content: center;
    margin: 1.3rem 0;
  }
  .login-text {
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
  .login-form {
    .form-card(27);
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
    font-weight: 500;
  }
  /deep/ .pwd-item .el-form-item__label {
    display: block;
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
  .forget-pwd {
    float: right;
  }
  .signin-btn {
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

<style lang="less">
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji';
  background: #f8f8f9;
}
</style>
