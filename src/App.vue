
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

<!-- loading -->

<div class="loading" v-if="loading">
  loading task ......
</div>


<!-- task list  -->

<div class="task-list" v-if="filter === 'all' " >
   <h4> you have {{  totCount }} to do : </h4>
  <div v-for="tsk in tasks " :key="tsk" >
    <TaskDetails :tsk="tsk" />
  </div>
</div>

  <div class="class-list"  v-if="filter === 'fav'">
       <h4> you have  {{ favCount }} fav tasks to do </h4>
      <div v-for="tsk in fav" :key="tsk">
          <TaskDetails :tsk="tsk" />
      </div>
  </div>

  <button @click="TaskStore.$reset">reset</button>

 </main>
 
</template>

 <script>

 import { ref } from 'vue';
 import TaskDetails from "./components/TaskDetails.vue";
 import TaskForm from "./components/TaskForm.vue";
 import { useTaskStore } from './stors/TaskStore';
import { storeToRefs } from 'pinia';

 export default {

  components: {TaskDetails , TaskForm},
  setup() {
     const TaskStore = useTaskStore()

     const { tasks , loading ,  fav , favCount , totCount  } = storeToRefs(TaskStore)

     // fetch taskes 
     TaskStore.getTaskes()


     const filter = ref('all')

      return { TaskStore , filter  ,  tasks, loading, fav, favCount, totCount }  
    }

}

</script>
