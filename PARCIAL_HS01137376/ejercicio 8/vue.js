//Composition API
//crea un componente llamado MensajeCondicional que muestra un mensaje diferente 
//según el valor de una condición. El componente incluye un botón que alterna el estado de la condición
const { createApp, ref } = Vue

// Definir el componente
const MensajeCondicional = {
  template: `
    <div>
      <!-- Mostrar un mensaje diferente según el valor de la condición -->
      <h1 v-if="condicion">¿Hola como estas?</h1>
      <h1 v-else>Bien y tu.</h1>
      <!-- Botón para cambiar la condición -->
      <button @click="cambiarCondicion">Cambiar Condición</button>
    </div>
  `,
  setup() {
    // Estado reactivo para la condición
    const condicion = ref(true) // Inicialmente la condición es verdadera

    // Función para alternar el valor de la condición
    const cambiarCondicion = () => {
      condicion.value = !condicion.value
    }

    // Retornar los datos y métodos a la instancia de Vue
    return {
      condicion,
      cambiarCondicion
    }
  }
}

// Crear la aplicación y registrar el componente
createApp({
  components: {
    'mensaje-condicional': MensajeCondicional // Registrar el componente
  }
}).mount('#app8') // Montar en el div con id="app"
