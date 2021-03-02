<template>
  <div class="iView">
    <img alt="iView logo" src="https://file.iviewui.com/icon/viewprologo.png" width="100px" height="100px" />
    <h1 id="h1">h1</h1>
    <h1 id="h2">h2</h1>
    <h1 id="h3">h3</h1>
    <h1 id="h4">h4</h1>
    <h1>h5</h1>
    <h1>h6</h1>
    <h1>h7</h1>
    <h1>h8</h1>
    <h1>h9</h1>
    <h1>h10</h1>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data() {
    return {}
  },
  mounted() {
    this.axios
      .get('http://localhost:3000/iview?name=xiaoming')
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.error(err)
      })
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.iView {
  text-align: center;
}
</style>
