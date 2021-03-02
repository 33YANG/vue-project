<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import 'element-ui/lib/theme-chalk/display.css' // Element 额外提供了一系列类名，用于在某些条件下隐藏元素
import '@/common/theme/less/theme.less'
import '@/common/theme/less/adapt.less'

export default {
  name: 'App',
  components: {},
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="less" scoped></style>
