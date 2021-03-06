import enLocale from 'element-ui/lib/locale/lang/en'

export default {
  common: {
    sure: 'OK',
    cancle: 'Cancle',
    info: 'Info',
    deleteSuccess: 'Delete success',
    deleteFail: 'Delete Failed',
  },
  login: {
    loginText: 'Login to Vue Project',
    resetPassword: 'Reset your password',
    invalidInfo: 'Invalid user-name/email or password!',
    loading: 'Logining...',
    userNameEmail: 'Username or Email',
    inputName: 'Please input the name or email',
    password: 'Password',
    inputPassword: 'Please input the password',
    forgetPwd: 'Forget password ?',
    signin: 'Login',
    newToVue: 'New to Vue Project ?',
    createNewCount: 'Create an account',
  },
  forgetPwd: {
    forgetPassword: 'Forget password',
    forgetPwdLabel: "Please enter your account's registered email, we will send you a forget password email.",
    invalidInfo: 'Not found this email registered!',
    loading: 'Loading...',
    sendEmail: 'Send email',
  },
  resetPwd: {
    resetPassword: 'Reset Password',
    resetPwdLabel: 'Please enter the 6 verification codes that we just emailed to you.',
    invalidInfo: 'Invalid verification code',
    loading: 'Reseting...',
  },
  signup: {
    signupText: 'Create your account',
    userName: 'Username',
    email: 'Email',
    password: 'Password',
    forgetPwd: 'Forget password ?',
    signup: 'Create account',
    newToVue: 'Already have an account ?',
    createNewCount: 'Login to Vue Project',
  },
  nav: {
    userName: 'User',
  },
  settingDrawer: {
    save: 'Save',
    saveAs: 'Save As',
    setting: 'Setting',
    selectLanguage: 'Select Language',
    colorTheme: 'Color Theme',
    iviewGolden: 'iView Golden',
    vueGreen: 'Vue Green',
    customizeColor: 'Customize Color',
    customize: 'Customize',
    topTextColor: 'Top-Text-Color',
    topActiveTextColor: 'Top-Text-Active-Color',
    topBackgroundColor: 'Top-Background-Color',
    leftTextColor: 'Left-Text-Color',
    leftActiveTextColor: 'Left-Active-Text-Color',
    leftBackgroundColor: 'Left-Background-Color',
    customizeName: 'Customize Name',
    savedCustomize: 'Saved Customize',
    customizePlaceholder: 'Input customize name...',
    customizeNumberInfo: 'No more than 5 themes!',
    customizeNameSame: 'Customize name duplicate!',
    deleteCustomizeThemeInfo: 'This operation will permanently delete the customized theme, whether to continue?',
  },
  footer: {
    officialSite: 'Official Website',
    community: 'Community',
    professionalEdition: 'Professional Edition',
    techCompany: `Copyright © ${new Date().getFullYear()} BeiJing moumoumou Technology Co., Ltd`,
    infoNumber: 'Beijing ICP No.11082652-6',
  },
  ...enLocale,
}
