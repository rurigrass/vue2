export const pageDimensionsMixin = {
  created() {
    this.getPageDimensions();    
  },

  data() {
    return {
      pageHeight: 0,
      pageWidth: 0,
    };
  },
  methods: {
    getPageDimensions() {
      const body = document.body;
      const html = document.documentElement;

      this.pageHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      this.pageWidth = Math.min(window.innerWidth, 1280);
    },
  },
};
