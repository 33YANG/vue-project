<template>
  <HttpError label="404" info="抱歉，您访问的页面不存在！" img-url="url('https://file.iviewui.com/iview-pro/icon-404.svg')"></HttpError>
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
