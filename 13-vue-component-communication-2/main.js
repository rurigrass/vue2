window.Event = new Vue();

Vue.component("coupon", {
  template: `
  <input type="text" @blur="onBlur"></input>
  `,

  data() {
    return {};
  },

  methods: {
    onBlur() {
      Event.$emit("applied");
    },
  },

  created() {
    Event.$on("applied", () => console.log("Handling it"));
  },

  mounted() {},
});
