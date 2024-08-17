//Composition API
//Muestra  un mensaje cuando el valor de una variable cambia
const { createApp, ref, watch } = Vue

// Definir el componente
const MensajeCambio = {
  template: `
    <div>
      <!-- Campo de entrada para cambiar el valor -->
      <input v-model="valor" type="text" placeholder="Escribe algo...">
      <!-- Mostrar el mensaje cuando el valor cambie -->
      <h1 v-if="mensaje !== ''">{{ mensaje }}</h1>
    </div>
  `,
  setup() {
    // Estado reactivo para el valor del input y el mensaje
    const valor = ref('')
    const mensaje = ref('')

    // Watch para detectar cambios en el valor
    watch(valor, (nuevoValor, valorAntiguo) => {
      mensaje.value = `El valor ha cambiado de: "${valorAntiguo}" a: "${nuevoValor}"`
    })

    // Retornar los datos y métodos a la instancia de Vue
    return {
      valor,
      mensaje
    }
  }
}

// Crear la aplicación y registrar el componente
createApp({
  components: {
    'mensaje-cambio': MensajeCambio 
  }
}).mount('#app10')
