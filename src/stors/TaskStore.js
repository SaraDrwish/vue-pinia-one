import { defineStore } from "pinia"

export const useTskStore = defineStore('tasksStore', {

  state: () => ({
    tasks: 
      [
        {title:"task one " , id : 1 , isFav:"true"},
        {title:"task two " , id : 2 ,  isFav:"false"}
      ]

    
  })


  
})


 