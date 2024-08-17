//Options API

// Este componente permite al usuario ingresar un mensaje en un campo de texto
// y mostrar una alerta con el valor ingresado cuando se hace clic en el botón.
const { createApp } = Vue



const AlertaDeEntrada = {
  template: `
    <div>
      <input v-model="valorDeEntrada" type="text" placeholder="Escribe un mensaje por favor...">
      <button @click="mostrarAlerta">Mostrar Alerta</button>
    </div>
  `,
  data() {
    return {
      valorDeEntrada: '' // Valor del campo de entrada
    }
  },
  methods: {
    mostrarAlerta() {
      alert(this.valorDeEntrada) // Mostrar el valor en una alerta
    }
  }
}

// Crear y montar la aplicación Vue
createApp({
  components: {
    'alerta-de-entrada': AlertaDeEntrada // Registrar el componente
  }
}).mount('#app4')
