<template>
  <HttpError label="403" info="抱歉，您没有访问权限！" img-url="url('https://file.iviewui.com/iview-pro/icon-403.svg')"></HttpError>
</template>

<script>
import HttpError from '@/components/HttpError.vue'

export default {
  components: {
    HttpError,
  },
}
</script>

<style lang="less" scoped></style>
