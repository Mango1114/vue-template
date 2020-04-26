<template>
  <!-- 自定义提示弹框 -->
  <div class="toast">
    <div class="content">{{content}}</div>
  </div>
</template>

<script>
  export default {
    name: 'toast',
    data () {
      return {
        content: '',
        duration: 3000
      }
    },
    mounted () {
      setTimeout(() => {
        this.$destroy()
        this.$el.parentNode.removeChild(this.$el)
      }, this.duratio)
    }
  }
</script>

<style lang="stylus" scoped>
  @import "@stylus/variable"
  .toast
    position fixed
    bottom 25%
    left 50%
    z-index 999
    max-width 60%
    border-radius 5px
    padding 10px 15px
    line-height 1.5
    text-align center
    word-wrap break-word
    word-break break-all
    background rgba(0, 0, 0, .6)
    transform rotateX(-50%)

  .content
    margin 0
    font-size $font-size-medium
    color $color-white
</style>
