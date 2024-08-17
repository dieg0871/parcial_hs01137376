//Options API
// Esta aplicación permite mostrar y ocultar un mensaje usando un botón con un ícono de ojo.
const { createApp } = Vue

createApp({
  data() {
    return {
      mostrarMensaje: true, // Controlar la visibilidad del mensaje
      mensaje: '¡Hola, este es el ejercicio 3!' // El mensaje a mostrar/ocultar
    }
  },
  methods: {
    alternarMensaje() {
      this.mostrarMensaje = !this.mostrarMensaje // Método para mostrar/ocultar el mensaje
    }
  }
}).mount('#app3') // Montar en el div con id="app3"
