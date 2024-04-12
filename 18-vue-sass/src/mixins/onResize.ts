export const onResizeMixin = {
  created() {
    this.getDimensions();
  },
  data() {
    return {
      dimensions: {
        screen: {
          height: 0,
          width: 0,
        },
        page: {
          height: 0,
          width: 0,
        },
      },
    };
  },
  methods: {
    getDimensions() {
      const body = document.body;
      const html = document.documentElement;
  
      this.dimensions.page.height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      this.dimensions.page.width = Math.min(window.innerWidth, 1280);
      this.dimensions.screen.height = window.innerHeight;
      this.dimensions.screen.width = window.innerWidth;
    },
  },
};
