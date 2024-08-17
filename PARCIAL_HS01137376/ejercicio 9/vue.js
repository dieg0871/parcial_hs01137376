//Composition API
// crea una aplicación Vue.js que incluye un componente para mostrar el nombre completo de una persona
const { createApp, ref, computed } = Vue

// Definir el componente
const NombreCompleto = {
  template: `
    <div>
      <!-- Campos para ingresar nombre y apellido -->
      <input v-model="nombre" type="text" placeholder="Nombre">
      <input v-model="apellido" type="text" placeholder="Apellido">
      <!-- Mostrar el nombre completo usando la propiedad computada -->
      <h1>Nombre Completo: {{ nombreCompleto }}</h1>
    </div>
  `,
  setup() {
    // Estado reactivo para nombre y apellido
    const nombre = ref('') // Inicialmente vacío
    const apellido = ref('') // Inicialmente vacío

    // Propiedad computada para concatenar nombre y apellido
    const nombreCompleto = computed(() => {
      return `${nombre.value} ${apellido.value}`
    })

    // Retornar los datos y métodos a la instancia de Vue
    return {
      nombre,
      apellido,
      nombreCompleto
    }
  }
}

// Crear la aplicación y registrar el componente
createApp({
  components: {
    'nombre-completo': NombreCompleto // Registrar el componente
  }
}).mount('#app9')
