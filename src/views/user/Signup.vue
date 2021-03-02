<template>
  <div class="signup">
    <div class="signup-item" @click="handleClick({ name: 'home' })">
      <el-avatar :size="60" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>
    <p class="signup-item signup-text">{{ $t('signup.signupText') }}</p>
    <div class="signup-item signup-form">
      <el-form label-position="top" label-width="30px" :model="loginForm">
        <el-form-item :label="$t('signup.userName')" for="name" required>
          <el-input size="medium" v-model="loginForm.name" id="name"></el-input>
        </el-form-item>
        <el-form-item :label="$t('signup.email')" for="email" required>
          <el-input size="medium" v-model="loginForm.name" id="email"></el-input>
        </el-form-item>
        <el-form-item :label="$t('signup.password')" for="password" required>
          <el-input size="medium" v-model="loginForm.password" show-password id="password"></el-input>
        </el-form-item>
        <el-button type="success" size="medium" class="signup-btn">{{ $t('signup.signup') }}</el-button>
      </el-form>
    </div>
    <p class="new-user">
      {{ $t('signup.newToVue') }}
      <el-link type="primary" :underline="true" class="link" @click="handleClick({ name: 'login' })">{{ $t('signup.createNewCount') }}</el-link>
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
      loginForm: {
        name: '',
        password: '',
      },
    }
  },
  methods: {
    handleClick(payload) {
      this.$router.push(payload)
    },
  },
}
</script>

<style lang="less" scoped>
@import '../../common/theme/less/variables';

.signup {
  .el-avatar {
    cursor: pointer;
  }
  .signup-item {
    display: table;
    margin: 1.3rem auto;
  }
  .signup-text {
    font-size: 1.5rem;
    font-weight: 400;
    color: #4c4545;
  }
  .signup-form {
    width: 32 * @default_rem_10px;
    height: 25 * @default_rem_10px;
    background: #fff;
    border: 1px solid #e4e4e4;
    border-radius: 5px;
    // box-shadow: 0px 0px 10px 1px #e4e4e4;
  }
  .new-user {
    width: 34 * @default_rem_10px;
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
      // padding-top: 3px;
    }
  }
  .el-form {
    margin: 1rem;
  }
  .el-form-item {
    margin-bottom: 0.6rem;
  }
  /deep/ .el-form-item__label {
    padding: 0 !important;
    font-weight: 500;
  }
  /deep/ .pwd-item .el-form-item__label {
    display: block;
  }
  /deep/ .el-footer {
    margin-top: 11rem;
  }
  .signup-btn {
    position: relative;
    overflow: hidden;
    margin: 0.8rem 0;
    width: 100%;
    background: none;
    border: transparent;
    border-right-color: #f6ca9d;
    background-image: linear-gradient(45deg, #41b883, #f6ca9d);
    &:hover {
      // background-image: linear-gradient(45deg, #6fbb99, #f0d9c2);
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: radial-gradient(circle, #41b883 10%, transparent 10%);
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
