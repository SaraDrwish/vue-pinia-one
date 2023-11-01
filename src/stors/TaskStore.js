import { defineStore } from "pinia"

export const useTaskStore = defineStore('TaskStore', {

  state: () => ({
    tasks: 
      [],
     loading : false
  }),
  getters: {
    fav() {
      // this refers to the state object 
      //filter return a new arr
      return this.tasks.filter(t => t.isFav)
    },
    favCount() {
      return this.tasks.reduce((prevs, curnt) => {
        return curnt.isFav ? prevs + 1 : prevs
      }, 0)
    },
    totCount: (state) => {
      return state.tasks.length
    }
    
   },
    
  actions: {
      
    async getTaskes() {
      this.loading = true
      const res = await fetch("http://localhost:3000/tasks")      
      const data = await res.json()
      this.tasks = data
      this.loading = false
     },
    
      addTask(tsk) {
        this.tasks.push(tsk)
      },
      deleteTask(id) {
        this.tasks = this.tasks.filter(t => {
          return t.id !== id
        })
      },
      toggleFav(id) {
        const tsk = this.tasks.find(t => t.id === id)
        tsk.isFav = !tsk.isFav
      }
  
    }

} )

