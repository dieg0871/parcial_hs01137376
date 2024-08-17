//Options API
// Muestra por pantalla un bien venido y el nombre
  const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Bien Venido Diego'
      }
    }
  }).mount('#app1')
