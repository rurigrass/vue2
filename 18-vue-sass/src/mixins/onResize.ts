export const onResizeMixin = {
  created() {
    this.getDimensions();
  },
  data() {
    return {
      dimensions: {
        height: 0,
        width: 0,
        pageHeight: 0,
        pageWidth: 0
      },
    };
  },
  methods: {
    getDimensions() {
      this.dimensions.height = window.innerHeight;
      this.dimensions.width = Math.min(window.innerWidth, 1280);
      // this.dimensions.height = Math.min(window.innerWidth, 1280) : this.dimensions.width = window.innerWidth
      this.dimensions.pageHeight = this.dimensions.width;
    },
  },
};

