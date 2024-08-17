//Options API
// Inicializa el contador en 0 y proporciona un método para incrementar el contador en 1.

const { createApp } = Vue

createApp({
  data() {
    return {
      count: 0 // Inicializar el contador en 0
    }
  },
  methods: {
    increment() {
      this.count++ // Método para incrementar el contador
    }
  }
}).mount('#app2') 
