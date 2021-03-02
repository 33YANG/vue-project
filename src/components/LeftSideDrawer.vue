<template>
  <div class="leftside-drawer">
    <el-drawer :visible.sync="leftsideDrawer" direction="ltr" size="180px" :show-close="false">
      <div slot="title" class="drawer-title"></div>
      <div class="drawer-body">
        <LeftSide :isDrawer="true"></LeftSide>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import LeftSide from '@/components/LeftSide.vue'

export default {
  name: 'LeftSideDrawer',
  components: {
    LeftSide,
  },
  data() {
    return {}
  },
  methods: {},
  computed: {
    leftsideDrawer: {
      get() {
        return this.$store.state.leftsideDrawer
      },
      set(val) {
        this.$store.commit('openLeftsideDrawer', val)
      },
    },
  },
}
</script>

<style lang="less" scoped>
.leftside-drawer {
  .el-drawer {
    overflow: auto;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  /deep/ .el-drawer__header {
    display: none;
  }
}
</style>
