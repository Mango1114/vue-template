<template>
  <div id="app">
    <div class="container" :class="{'is-show-header':showHeader,'is-show-footer':showFooter}">
      <top-bar v-show="showHeader">
        <go-back v-show="showBack" slot="left"></go-back>
        {{title}}
      </top-bar>
      <bottom-bar v-show="showFooter"></bottom-bar>
    </div>
  </div>
</template>

<script>
  import TopBar from '@/components/top-bar/top-bar'
  import BottomBar from '@/components/bottom-bar/bottom-bar'
  import GoBack from '@/components/go-back/go-back'

  export default {
    name: 'App',
    components: { TopBar, BottomBar, GoBack },
    computed: {
      showHeader () {
        return this.$route.meta.showHeader
      },
      showBack () {
        return this.$route.meta.showBack
      },
      title () {
        return this.$route.meta.title
      },
      showFooter () {
        return this.$route.meta.showFooter
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container
    min-height 100vh

  &.is-show-header
    padding-top 48px

  &.is-show-footer
    padding-bottom 56px
</style>
