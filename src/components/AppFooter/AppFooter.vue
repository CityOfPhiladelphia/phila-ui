<template>
  <footer class="footer is-primary">
    <div class="has-text-centered">
      <ul>
        <li><a href="">Feedback</a></li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'AppFooter',
}
</script>
<style lang="scss" scoped>
  #app {
    padding-bottom: 46px;
    .footer {
      position: fixed;
      bottom: 0;
      width: 100%;
      padding: rem-calc(10px);

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          display: inline-block;
          vertical-align: middle;
          margin: 0 1rem;
        }
      }
    }
  }
</style>
