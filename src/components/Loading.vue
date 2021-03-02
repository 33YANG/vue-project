<template>
  <div class="loading">
    <div class="loading-icon">
      <el-avatar :size="60" :src="require('@/assets/user.png')"></el-avatar>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.loading {
  position: absolute;
  z-index: 2000;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  text-align: center;
  background: rgba(207, 207, 207, 0.37);
}
.loading-icon {
  position: absolute;
  width: 100%;
  top: 50%;
  text-align: center;
}
</style>

