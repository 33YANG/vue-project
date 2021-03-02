<template>
  <HttpError label="500" info="抱歉，服务器出错了！" img-url="url('https://file.iviewui.com/iview-pro/icon-500.svg')"></HttpError>
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
