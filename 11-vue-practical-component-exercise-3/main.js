Vue.component("tabs", {
  template: `
  <div>
  <div class="tabs-container">
  <ul class="tabs-list">
  <li class="tabs-item" v-for="tab in tabs" :class="{'is-active' : tab.isActive}">
  <a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
  </li>
  </ul>
  </div>
  <div classname="tabs-details">
  <slot></slot>
  </div>
  </div>
  `,

  data() {
    return { tabs: [] };
  },

  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.name === selectedTab.name
          ? (tab.isActive = true)
          : (tab.isActive = false);
      });
    },
  },

  created() {
    this.tabs = this.$children;
  },

  mounted() {
    // console.log(this.tabs);
  },
});

Vue.component("tab", {
  template: `
  <div class="tab" v-show="isActive">
  <slot></slot>
  </div>
  `,

  props: { name: { required: true } },

  data() {
    return {
      isActive: false,
    };
  },

  computed: {
    href() {
      return "#" + this.name.toLowerCase().replace(/ /g, "-");
    },
  },

  mounted() {
    this.isActive = this.selected;
  },
});
