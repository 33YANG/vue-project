<template>
  <div id="setting-drawer">
    <el-drawer :visible.sync="drawer" :direction="drawerDirection" :size="drawerSize" :show-close="false">
      <div slot="title" class="drawer-title">{{ $t('settingDrawer.setting') }}</div>
      <div class="drawer-body">
        <el-form label-position="right" :label-width="drawerLabelWidth" :model="settingForm">
          <el-form-item :label="$t('settingDrawer.selectLanguage')" class="default-lang">
            <el-radio-group v-model="settingForm.language" size="small" @change="changeLanguage">
              <el-radio label="zh">中文</el-radio>
              <el-radio label="en">English</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item :label="$t('settingDrawer.colorTheme')" class="default-theme">
            <el-radio-group v-model="settingForm.colorTheme" size="small" @change="changeTheme" :disabled="isDisableDefaultTheme">
              <el-radio label="iView-golden" border class="iView-color">{{ $t('settingDrawer.iviewGolden') }}</el-radio>
              <el-radio label="vue-green" border class="Vue-color">{{ $t('settingDrawer.vueGreen') }}</el-radio>
            </el-radio-group>
          </el-form-item>
          <section class="customize-section">
            <el-form-item :label="$t('settingDrawer.customizeColor')" class="customize-color">
              <el-button type="primary" size="small" plain @click="showCustomizeColor" v-show="!isShowCustomizeColorPanel" style="margin: 3px 5px"
                >{{ $t('settingDrawer.customize') }}
                <i class="el-icon-plus el-icon--right"></i>
              </el-button>
              <transition name="fade" mode="out-in">
                <div v-show="isShowCustomizeColorPanel">
                  <div v-for="item of customizeColorItem" :key="item" class="form-item-color">
                    <i class="el-icon-edit"></i>
                    <span class="label-title">{{ $t('settingDrawer.' + item) }}</span>
                    <el-color-picker v-model="settingForm.color[item]" size="mini" @change="customizeColor"></el-color-picker>
                  </div>
                  <div class="form-item-color-btn">
                    <el-button type="primary" size="small" plain @click="confirmCustomize">{{ $t('common.sure') }}</el-button>
                    <el-button size="small" plain @click="cancelCustomizeColor">{{ $t('common.cancle') }}</el-button>
                  </div>
                </div>
              </transition>
            </el-form-item>
            <transition name="fade">
              <el-form-item
                :label="$t('settingDrawer.customizeName')"
                class="save-customize"
                v-show="isShowCustomizeColorPanel && isShwoCustomizeName"
              >
                <el-button v-show="!isShowCustomizeNameInput" size="small" plain @click="handleCustomizeName">
                  <i class="el-icon-document el-icon--left"></i>{{ $t('settingDrawer.saveAs') }}
                </el-button>
                <el-input
                  v-show="isShowCustomizeNameInput"
                  ref="inputCustomizeName"
                  :placeholder="$t('settingDrawer.customizePlaceholder')"
                  v-model.trim="customizeName"
                  size="small"
                  clearable
                  maxlength="15"
                >
                  <el-button slot="append" size="small" @click="saveCustomizeName">{{ $t('settingDrawer.save') }}</el-button>
                </el-input>
              </el-form-item>
            </transition>
            <transition name="fade">
              <el-form-item
                v-show="isShowCustomizeColorPanel && currentCustomized.length > 0"
                :label="$t('settingDrawer.savedCustomize')"
                class="customized"
              >
                <el-tag
                  v-for="(item, index) of currentCustomized"
                  :key="index"
                  closable
                  :type="item.type"
                  @close="handleCustomizeTagDelete(index)"
                  @click="handleCustomizeTagSelect(index)"
                  >{{ item.label }}</el-tag
                >
              </el-form-item>
            </transition>
          </section>
        </el-form>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { loadLanguageAsync } from '@/plugins/i18n'

export default {
  // name: '',
  // components: {},
  data() {
    return {
      drawerSize: '350px',
      drawerLabelWidth: '90px',
      drawerDirection: 'rtl',
      viewportWidth: document.body.clientWidth,
      isShowCustomizeColorPanel: false, // 是否显示定制主题面板
      isDisableDefaultTheme: false, // 是否禁用默认的两个主题 定制时则需要禁用默认的主题
      settingForm: {
        language: 'zh',
        colorTheme: this.$store.state.themeColor.themeClass,
        color: {
          theme: 'customize-style',
          topTextColor: '',
          topActiveTextColor: '',
          topBackgroundColor: '',
          leftTextColor: '',
          leftActiveTextColor: '',
          leftBackgroundColor: '',
        },
      },
      customizeColorItem: [
        // 可以定制的颜色项
        'topTextColor',
        'topActiveTextColor',
        'topBackgroundColor',
        'leftTextColor',
        'leftActiveTextColor',
        'leftBackgroundColor',
      ],
      customizeName: '', // 自定义输入的定制主题名
      isShowCustomizeNameInput: false, // 是否显示输入定制主题名的输入框
      isShwoCustomizeName: true, // 是否显示自定义输入后的定制主题名Tag
      currentCustomized: [
        // 已定制的主题名集合
        {
          label: '定制主题一',
          type: 'info',
          color: {
            theme: 'customize-style',
            topTextColor: '#fff',
            topActiveTextColor: '#D4E329',
            topBackgroundColor: '#545c64',
            leftTextColor: '#fff',
            leftActiveTextColor: '#41B883',
            leftBackgroundColor: '#545c64',
          },
        },
        {
          label: '定制主题二',
          type: 'info',
          color: {
            theme: 'customize-style',
            topTextColor: '#fff',
            topActiveTextColor: '#E1A524',
            topBackgroundColor: '#545c64',
            leftTextColor: '#fff',
            leftActiveTextColor: '#41B883',
            leftBackgroundColor: '#545c64',
          },
        },
        {
          label: '定制主题三',
          type: 'info',
          color: {
            theme: 'customize-style',
            topTextColor: '#fff',
            topActiveTextColor: '#C577E7',
            topBackgroundColor: '#545c64',
            leftTextColor: '#fff',
            leftActiveTextColor: '#41B883',
            leftBackgroundColor: '#545c64',
          },
        },
      ],
    }
  },
  created() {
    const isCustomizeStyle = this.$store.state.themeColor.themeClass
    const themeLabel = JSON.parse(localStorage.getItem('themeLabel')) ? JSON.parse(localStorage.getItem('themeLabel')) : null
    if (isCustomizeStyle === 'customize-style') {
      this.isShowCustomizeColorPanel = true
      this.isDisableDefaultTheme = true
      this.setOrClearColor('getState')
      // 处理定制的主题被选中
      this.currentCustomized.forEach((item, index) => {
        if (item.label === themeLabel) {
          this.currentCustomized[index].type = 'primary'
        }
      })
    }
    // 获得当前已选择的语言
    const language = localStorage.getItem('lang')
    if (language && this.settingForm.language !== language) {
      this.settingForm.language = language
      this.changeLanguage(language)
    }
    // 监视window视窗宽度改变
    const resourceVue = this
    window.onresize = () => {
      resourceVue.viewportWidth = document.body.clientWidth
      resourceVue.handleDrawerSize()
    }
    this.handleDrawerSize()
  },
  methods: {
    changeLanguage(val) {
      localStorage.setItem('lang', val)
      loadLanguageAsync(val) // 更改页面语言
      this.handleDrawerSize()
    },
    handleDrawerSize() {
      if (this.viewportWidth < 600) {
        this.drawerSize = '500px'
        this.drawerLabelWidth = '122px'
        this.drawerDirection = 'btt' // bottom to top
      } else {
        if (this.viewportWidth > 680) {
          this.$store.commit('openLeftsideDrawer', false) // 确保当屏幕变宽时 自适应的左导航内容会隐藏
        }
        this.drawerDirection = 'rtl' // right to left
        if (this.settingForm.language === 'en') {
          this.drawerSize = '420px'
          this.drawerLabelWidth = '122px'
        } else if (this.settingForm.language === 'zh') {
          this.drawerSize = '350px'
          this.drawerLabelWidth = '90px'
        }
      }
    },
    changeTheme(val) {
      // 重置定制的样式
      this.isShowCustomizeColorPanel = false
      Object.keys(this.settingForm.color).forEach(item => {
        if (item !== 'theme') {
          this.settingForm.color[item] = ''
        }
      })
      this.currentCustomized.forEach((item, index) => {
        this.currentCustomized[index].type = 'info'
      })
      this.$store.commit('themeColor/changeThemeColor', { theme: val })
      this.setOrClearColor('clear')
      localStorage.removeItem('themeLabel')
    },
    async showCustomizeColor() {
      this.isDisableDefaultTheme = true
      this.settingForm.colorTheme = null
      this.isShowCustomizeColorPanel = true
      await this.getCustomizedTheme()
    },
    getCustomizedTheme() {
      // 从服务器获取已保存的定制主题
      return new Promise(resolve => {
        // this.currentCustomized = this.currentCustomized
        resolve()
      })
    },
    confirmCustomize() {
      this.$store.commit('openSettingDrawer', false)
    },
    cancelCustomizeColor() {
      this.isShowCustomizeColorPanel = false
      this.isDisableDefaultTheme = false
      this.isShowCustomizeNameInput = false
      this.settingForm.colorTheme = this.$store.state.themeColor.themeClass
    },
    customizeColor() {
      this.$store.commit('themeColor/changeThemeColor', this.settingForm.color)
    },
    handleCustomizeName() {
      this.isShowCustomizeNameInput = true
      this.$nextTick(() => {
        this.$refs.inputCustomizeName.$refs.input.focus()
      })
    },
    saveCustomizeName() {
      // this.isShwoCustomizeName = false
      let isRepeat = false
      this.isShowCustomizeNameInput = false
      // 判断已定制的主题的长度
      if (this.currentCustomized.length > 4) {
        this.$message({ type: 'warning', message: this.$t('settingDrawer.customizeNumberInfo'), showClose: true })
        this.customizeName = ''
        return
      }
      // 将其他的主题设置为非选中样式
      this.currentCustomized.forEach((item, index) => {
        this.currentCustomized[index].type = 'info'
      })
      if (this.customizeName) {
        this.currentCustomized.forEach(item => {
          if (item.label === this.customizeName) {
            isRepeat = true
            this.$message({ type: 'warning', message: this.$t('settingDrawer.customizeNameSame'), showClose: true })
          }
        })
        if (!isRepeat) {
          this.currentCustomized.push({
            label: this.customizeName,
            type: 'primary',
            color: this.cloneDeep(this.settingForm.color),
          })
          // 更换主题颜色
          this.$store.commit('themeColor/changeThemeColor', this.settingForm.color)
          // this.setOrClearColor('getState')
          localStorage.setItem('themeLabel', JSON.stringify(this.customizeName))
        }
        this.customizeName = ''
      }
    },
    handleCustomizeTagSelect(clickItemIndex) {
      this.currentCustomized.forEach((item, index) => {
        this.currentCustomized[index].type = index === clickItemIndex ? 'primary' : 'info'
      })
      // 点击时提交主题更换命令
      this.$store.commit('themeColor/changeThemeColor', this.currentCustomized[clickItemIndex].color)
      // 获取最新颜色
      this.setOrClearColor('getState')
      // 储存当前定制的主题名到本地缓存中
      localStorage.setItem('themeLabel', JSON.stringify(this.currentCustomized[clickItemIndex].label))
    },
    handleCustomizeTagDelete(index) {
      this.$confirm(this.$t('settingDrawer.deleteCustomizeThemeInfo'), this.$t('common.info'), {
        confirmButtonText: this.$t('common.sure'),
        cancelButtonText: this.$t('common.cancle'),
        type: 'warning',
      })
        .then(() => {
          this.currentCustomized.splice(index, 1)
          if (this.currentCustomized.length < 1) this.isShwoCustomizeName = true
          this.$message({
            type: 'success',
            message: this.$t('common.deleteSuccess'),
            showClose: true,
          })
        })
        .catch(e => {
          if (e !== 'cancel') {
            this.$message({
              type: 'error',
              message: this.$t('common.deleteFail'),
              showClose: true,
            })
          }
        })
    },
    setOrClearColor(key) {
      if (key === 'clear') {
        this.settingForm.color.topTextColor = null
        this.settingForm.color.topActiveTextColor = null
        this.settingForm.color.topBackgroundColor = null
        this.settingForm.color.leftTextColor = null
        this.settingForm.color.leftActiveTextColor = null
        this.settingForm.color.leftBackgroundColor = null
      } else if (key === 'getState') {
        this.settingForm.color.topTextColor = this.topTextColor
        this.settingForm.color.topActiveTextColor = this.topActiveTextColor
        this.settingForm.color.topBackgroundColor = this.topBackgroundColor
        this.settingForm.color.leftTextColor = this.leftTextColor
        this.settingForm.color.leftActiveTextColor = this.leftActiveTextColor
        this.settingForm.color.leftBackgroundColor = this.leftBackgroundColor
      }
    },
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.openDrawer
      },
      set(val) {
        this.$store.commit('openSettingDrawer', val)
      },
    },
    ...mapState('themeColor', [
      'topTextColor',
      'topActiveTextColor',
      'topBackgroundColor',
      'leftTextColor',
      'leftActiveTextColor',
      'leftBackgroundColor',
    ]),
  },
}
</script>

<style lang="less">
@import '../common/theme/less/variables.less';

#setting-drawer {
  .el-drawer {
    overflow: auto;
  }
  // ::-webkit-scrollbar {
  //   display: none;
  // }
  .drawer-title {
    margin-bottom: 15px;
  }
  .drawer-body {
    margin: 16px 12px;
  }
  .el-drawer__header {
    margin-bottom: 0;
  }
  .el-radio.is-bordered.is-checked.iView-color {
    border-color: @iView_golden_customer_icon_color;
    .el-radio__input.is-checked .el-radio__inner {
      border-color: @iView_golden_customer_icon_color;
      background: @iView_golden_customer_icon_color;
    }
    .el-radio__input.is-checked + .el-radio__label {
      color: @iView_golden_customer_icon_color;
    }
  }
  .el-radio__inner:focus {
    outline: none;
  }
  .el-radio__inner:hover {
    border-color: #c7c7c7;
  }
  .el-radio:focus:not(.is-focus):not(:active):not(.is-disabled) .el-radio__inner {
    box-shadow: none;
  }
  .el-radio.is-bordered.is-checked.Vue-color {
    border-color: @vue_color;
    .el-radio__input.is-checked .el-radio__inner {
      border-color: @vue_color;
      background: @vue_color;
    }
    .el-radio__input.is-checked + .el-radio__label {
      color: @vue_color;
    }
    .el-radio:focus:not(.is-focus):not(:active):not(.is-disabled) .el-radio__inner {
      box-shadow: 0 0 2px 2px @vue_color;
    }
  }
  .customize-section {
    border-bottom: 0.6px solid #e8e8e8;
    .el-form-item {
      margin-bottom: 10px;
      // padding-bottom: 10px;
    }
  }
  .default-theme.el-form-item,
  .default-lang.el-form-item {
    border-bottom: 0.6px solid #e8e8e8;
    margin-bottom: 10px;
    padding-bottom: 10px;
    .el-radio {
      margin: 3px 6px 3px 4px;
    }
  }
  .default-theme .el-radio:hover {
    border-color: #c7c7c7;
  }
  // .el-form-item.customize-color {
  //   margin-bottom: 0;
  // }
  .save-customize {
    .el-input .el-button {
      color: #606266;
      box-sizing: border-box;
      &:hover {
        background: #dadada;
      }
    }
    .el-input {
      margin-top: 5px;
    }
    .el-form-item__content {
      padding: 0 5px;
    }
  }
  .customized {
    .el-form-item__content {
      padding: 0 5px;
    }
    .el-tag {
      margin-right: 8px;
      &:hover {
        cursor: pointer;
      }
    }
    .el-tag--info:hover {
      border-color: #ced1d8;
    }
  }
  .form-item-color {
    display: flex;
    align-items: center;
    color: #72767b;
    padding: 0 7px;
    &:hover {
      background: #ecf5ff;
      border-radius: 5px;
      cursor: pointer;
    }
  }
  .form-item-color-btn {
    margin: 8px 0;
    .el-button {
      margin: 0 5px;
    }
  }
  .label-title {
    margin: 0 5px;
  }
  // transition fade 样式
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.6s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
