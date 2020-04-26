<template>
  <header class="top-bar">
    <go-back v-if="showBack"></go-back>
    <h1 class="title">{{title}}</h1>
  </header>
</template>

<script>
  import GoBack from '../go-back/go-back'

  export default {
    name: 'top-bar',
    components: { GoBack },
    data () {
      return {
        showBack: false,
        title: ''
      }
    }
  }
</script>

<style lang="stylus" scoped>
  @import "../../stylus/variable.styl"
  @import "../../stylus/mixin.styl"

  .top-bar
    position fixed
    top 0
    left 0
    right 0
    z-index 1
    padding 8px 16px
    background $color-white
    bottom-1px-border($color-border)

    .title
      margin 0
      line-height 32px
      text-align center
      font-size $font-size-large-x
      font-weight 400
      color $color-dark
</style>
