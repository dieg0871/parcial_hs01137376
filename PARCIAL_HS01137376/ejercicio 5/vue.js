//Composition API
// Esta aplicación permite gestionar una lista de tareas. 
// El usuario puede agregar nuevas tareas y eliminar tareas existentes.

const { createApp, ref } = Vue

createApp({
  setup() {
    
    const listaDeTareas = ref([]) // Lista de tareas
    const nuevaTarea = ref('') // Nueva tarea 

    // Función para agregar una nueva tarea
    const agregarTarea = () => {
      if (nuevaTarea.value.trim()) { 
        listaDeTareas.value.push(nuevaTarea.value.trim())
        nuevaTarea.value = '' 
      }
    }

    // Función para eliminar una tarea
    const eliminarTarea = (indice) => {
      listaDeTareas.value.splice(indice, 1)
    }

    return {
      listaDeTareas,
      nuevaTarea,
      agregarTarea,
      eliminarTarea
    }
  }
}).mount('#app5')
