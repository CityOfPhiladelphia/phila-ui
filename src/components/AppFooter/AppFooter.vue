<template>
  <footer class="footer is-primary">
    <div class="has-text-centered">
      <ul>
        <li v-for="item in footerList">
          <a :href=item.href :target=item.target> {{ item.message }} </a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'AppFooter',
  props: {
    footerList: {
      type: Array,
      default : function() {
        return [
          {
            message: "Feedback",
            href: "https://www.phila.gov",
            target: "_blank",
          },
        ]
      },
    },
  },
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
