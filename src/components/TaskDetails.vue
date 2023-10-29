<template>
  <div class="task">
    <h2>{{ tsk.title }}</h2>
    <div class="icons">
      <!-- <i class="material-icons">delete</i> -->
      <!-- <span class="material-symbols-outlined"> delete </span> -->
      <i class="material-symbols-outlined"> delete </i>
      <i class="material-symbols-outlined"> favorite </i>
      <!-- <i class="material-icons">favorite</i> -->
      
    </div>
  </div>
</template>

<script>
  export default {
    props : ["tsk"]
  }
</script>

<style>
.task{
  margin: auto;
  text-align: center;
  padding: 1%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.icons{
/* text-align: right; */
display: inline-block;
}
.material-icons{
  text-align: right;
  padding: 1%;
  display: inline-block;
}
.task i {
  margin: 1%;
  cursor: pointer;
  font-size: 19px;
  color: rgb(66, 34, 66);
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
 


</style>