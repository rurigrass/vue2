export const screenDimensionsMixin = {
    created() {
      this.getScreenDimensions();
    },
    data() {
      return {
        screenHeight: 0,
        screenWidth: 0,
      };
    },
    methods: {
      getScreenDimensions() {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        console.log("ScreenDimensionMIXIN ", this.screenHeight, this.screenWidth);
      }
       

    },
  };