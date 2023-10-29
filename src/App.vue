
<template>
 
 <main>

<!-- heading -->
<header>
  <img src="./assets/logo.svg" alt="logo">
  <h1>vue pinia proj - tasks </h1>
</header>

<!-- task list  -->

<div class="task-list">
  <div v-for="tsk in TaskStore.tasks" :key="tsk">
    <!-- <p> {{ tsk.title }} </p> -->
    <TaskDetails :tsk="tsk" />
  </div>

</div>

 </main>
 
</template>

 <script>

 import { useTskStore } from './stors/TaskStore';
 import TaskDetails from "./components/TaskDetails.vue"

 export default {

  components: {TaskDetails},
  setup() {
      const TaskStore = useTskStore()

      return { TaskStore }
        
    }

  
}

</script>
