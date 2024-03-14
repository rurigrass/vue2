Vue.component("coupon", {
  template: `
  <input placeholder="Enter your coupon code" @blur="onCouponApplied"></input>
  `,

  data() {
    return {};
  },

  methods: {
    onCouponApplied() {
      this.$emit("applied");
    },
  },

  created() {},

  mounted() {},
});
