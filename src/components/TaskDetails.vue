<template>
  <div class="task">
    <h2>{{ tsk.title }}</h2>
    <div class="icons">
      <i @click="TaskStore.deleteTask(tsk.id)"  class="material-icons material-symbols-outlined"> delete </i>
      <i @click="TaskStore.toggleFav(tsk.id)" :class="{active:tsk.isFav}" class="material-symbols-outlined material-icons"> favorite </i>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "../stors/TaskStore"
  export default {
  props: ["tsk"],
  setup() {
    const TaskStore = useTaskStore()

    return {TaskStore}
    }
  }
</script>

<style>


.task{
  margin: 2% auto;
  /* text-align: center; */
  padding: 1%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: whitesmoke;
  width: 45%;
  border-radius: 2rem;
}
.icons .active{
  /* background-color: red; */
  color: red;
}
.icons{
display: flex;
justify-content: space-evenly;
}
.material-icons{
  text-align: right;
  display: flex;
  margin-left: 1.5rem;
}
.task i {
  cursor: pointer;
  font-size: 19px;
  color: rgb(135, 96, 135);
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
 


</style>