export const onResizeMixin = {
  created() {
    this.getDimensions();
  },
  data() {
    return {
      dimensions: {
        height: 0,
        width: 0
      },
    };
  },
  methods: {
    getDimensions() {
      this.dimensions.width = Math.min(window.innerWidth, 1280);
      this.dimensions.height = window.innerHeight;
    },
  },
};

