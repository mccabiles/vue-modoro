<template>
  <body class="container">
    <div class="columns">
      <div class="column is-one-third">
        <task-list
          :tasks="tasks"
          v-model="newTask" 
          @on:view="viewTask"
          @on:save="createTask"
          @on:delete="deleteTask"
        />
      </div>

      <div class="column">
        <router-view></router-view>
      </div>
    </div>
  </body>
</template>

<script>
import Task from '@/models/Task';
import TaskList from "@/components/TaskList";
export default {
  name: "Home",
  components: {
    TaskList
  },

  data() {
    return {
      newTask: "",
      tasks: {},
    };
  },

  mounted () {
    this.getTasks();
  },

  methods: {
    getTasks () {
      this.tasks = Task.getAllTasks();
    },

    createTask() {
      Task.createTask(this.newTask);
      this.newTask = "";
      this.getTasks();
    },

    deleteTask(task) {
      Task.delete(task.id);
      this.getTasks();
    },

    viewTask(task) {
      this.$router.push({ name: 'view', params: { id: task.id }});
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 16px;
}
</style>
