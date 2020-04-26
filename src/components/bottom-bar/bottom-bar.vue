<template>
  <footer class="bottom-bar">
    <router-link to="/" class="bar-item" replace exact>
      <div class="bar-item-icon">
        <span class="icon is-home"></span>
      </div>
      <span class="bar-item-label">首页</span>
    </router-link>
    <router-link to="/" class="bar-item" replace exact>
      <div class="bar-item-icon">
        <span class="icon is-order"></span>
      </div>
      <span class="bar-item-label">订单</span>
    </router-link>
    <router-link to="/" class="bar-item" replace exact>
      <div class="bar-item-icon">
        <span class="icon is-withdraw"></span>
      </div>
      <span class="bar-item-label">提现</span>
    </router-link>
    <router-link to="/" class="bar-item" replace exact>
      <div class="bar-item-icon">
        <span class="icon is-user"></span>
      </div>
      <span class="bar-item-label">我的</span>
    </router-link>
  </footer>
</template>

<script>
  export default {
    name: 'bottom-bar'
  }
</script>

<style lang="stylus" scoped>
  @import "@stylus/variable"
  @import "@stylus/mixin"

  .bottom-bar
    position fixed
    bottom 0
    left 0
    z-index 1
    display flex
    width 100%
    background $color-white
    top-1px-border($color-border)

  .bar-item
    display flex
    flex-direction column
    justify-content center
    align-items center
    flex 1
    padding 8px 0

    &.router-link-active
      .bar-item-icon .icon
        background $color-theme

      .bar-item-label
        background $color-theme

  .bar-item-icon
    width 24px
    height 24px

  .bar-item-label
    display inline-block
    margin-top 4px
    line-height 1
    font-size $font-size-small
    color $color-light
</style>
