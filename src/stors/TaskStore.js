import { defineStore } from "pinia"

export const useTaskStore = defineStore('TaskStore', {

  state: () => ({
     tasks:  [],
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
    
      async addTask(tsk) {
        this.tasks.push(tsk)
        const res = await fetch("http://localhost:3000/tasks", {
          method: "POST",
          body: JSON.stringify(tsk),
          headers: { "Content-Type": "application/json" }
        })
          if(res.error){
            console.log(res.error)
          }
      },
      async deleteTask(id) {
        this.tasks = this.tasks.filter(t => {
          return t.id !== id
        })

         const res = await fetch("http://localhost:3000/tasks/"+id, {
          method: "DELETE"
        })
          if(res.error){
            console.log(res.error)
        }
      },
      async toggleFav(id) {
        const tsk = this.tasks.find(t => t.id === id)
        tsk.isFav = !tsk.isFav

        const res = await fetch("http://localhost:3000/tasks/"+id, {
        method: "PATCH",
        body: JSON.stringify({isFav: tsk.isFav}),
        headers: { "Content-Type": "application/json" }
         })
        
        if(res.error){
          console.log(res.error)
          }
       }
      
    }

} )

