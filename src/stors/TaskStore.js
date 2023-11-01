import { defineStore } from "pinia"

export const useTskStore = defineStore('TaskStore', {

  state: () => ({
    tasks: 
      [
        {title:"task one " , id : 1 , isFav:true},
        {title:"task two " , id : 2 ,  isFav:false}
      ]
  }),
  getters: {
    fav() {
      // this refers to the state object 
      //filter return a new arr
      return  this.tasks.filter(t => t.isFav) 
    },
    favCount(){
      return this.tasks.reduce((prevs, curnt) => {
        return curnt.isFav ? prevs + 1 : prevs
      }, 0)
    },
    totCount: (state) => {
      return state.tasks.length
  },
    actions: {
      addTask(tsk) {
       this.tasks.push(tsk)
      }
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(t => {
        return t.id !== id 
      })
    },
    toggleFav(id) {
      const tsk = this.tasks.find(t => t.id ===  id )
        tsk.isFav = !tsk.isFav
    }
  
  }
  
})

