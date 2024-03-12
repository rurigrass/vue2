Vue.component("task-list", {
  template: `
   <div>
    <task v-for='task in tasks'>
  {{task.description}}
    </task>
  </div>`,

  data() {
    return {
      tasks: [
        { description: "Go to the store", completed: true },
        { description: "make food", completed: false },
        { description: "clean toilet", completed: false },
        { description: "brush teeth", completed: true },
      ],
    };
  },
});

Vue.component("task", {
  template:
    "<li><slot></slot><div>{{count}}<button @click='count++'>Add</button></div></li>",

  data() {
    return {
      count: 0,
    };
  },
});

new Vue({
  el: "#root",
});
