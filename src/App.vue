
<template>
 
 <main>

<!-- heading -->
<header>
  <img src="./assets/logo.svg" alt="logo">
  <h2>vue pinia proj - tasks </h2>
</header>

<!-- new task form -->

<div class="new-task-form">
  <TaskForm />
</div>

<!-- nav filter  -->

<nav class="filter">
  <button @click="filter = 'all' ">all tasks</button>
  <button @click="filter = 'fav' " >fav tasks</button>
</nav>

<!-- task list  -->

<div class="task-list" v-if="filter === 'all' " >
  <!-- <h4>all tasks : </h4> -->
  <h4> you have {{  TaskStore.totCount }} to do : </h4>
  <div v-for="tsk in TaskStore.tasks " :key="tsk" >
    <TaskDetails :tsk="tsk" />
  </div>
</div>

  <div class="class-list"  v-if="filter === 'fav'">
      <!-- <h4>fav tasks : </h4> -->
      <h4> you have  {{ TaskStore.favCount }} fav tasks to do </h4>
      <div v-for="tsk in TaskStore.fav" :key="tsk">
          <TaskDetails :tsk="tsk" />
      </div>
  </div>

 </main>
 
</template>

 <script>

 import { ref } from 'vue';
 import TaskDetails from "./components/TaskDetails.vue";
 import TaskForm from "./components/TaskForm.vue";
 import { useTskStore } from './stors/TaskStore';

 export default {

  components: {TaskDetails , TaskForm},
  setup() {
     const TaskStore = useTskStore()
    //  const newTask = ref('')
     const filter = ref('all')

      return { TaskStore , filter  }
        
    }

  
}

</script>

<style>

/* .task-list{
  margin: auto;
  text-align: center;
  background-color: lightblue;
  padding: 2%;
  border-radius: 2rem;
} */

.task-list h4{
  text-align: center;
  margin: 2%;
  padding: 2%;
}


</style>
