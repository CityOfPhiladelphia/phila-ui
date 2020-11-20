export default {
  install (Vue, options) {

    const isMobile = function () {
      return window.matchMedia('(max-width: 767px)').matches;
    };

    const isTablet = function () {
      return window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches;

    };

    const isDesktop = function () {
      return window.matchMedia('(min-width: 1024px)').matches;
    };

    const isWideScreen = function () {
      return window.matchMedia('(min-width: 1152px)').matches;
    };

    Vue.mixin({
      data () {
        return {
          isMobile: false,
          isTablet: false,
          isDesktop: false,
          isWideScreen: false,
        };
      },
      created () {
        this.checkState();
        window.addEventListener("resize", this.handleWindowResize);
      },
      methods: {
        checkState () {
          this.isMobile = isMobile();
          this.isTablet = isTablet();
          this.isDesktop = isDesktop();
          this.isWideScreen = isWideScreen();
        },
        handleWindowResize () {
          this.checkState();
        },
      },
    });

  },
};