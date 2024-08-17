//Composition API
//Sirve para cambiar el color del tema en una pagina
const { createApp, ref, watchEffect } = Vue

createApp({
  setup() {
    
    const temaOscuro = ref(false) 

    // Función para alternar entre temas
    const alternarTema = () => {
      temaOscuro.value = !temaOscuro.value
    }

    // Aplicar la clase al body según el estado del tema
    watchEffect(() => {
      document.body.className = temaOscuro.value ? 'oscuro' : 'claro'
    })

    // Retornar los datos y métodos a la instancia de Vue
    return {
      temaOscuro,
      alternarTema
    }
  }
}).mount('#app7')
