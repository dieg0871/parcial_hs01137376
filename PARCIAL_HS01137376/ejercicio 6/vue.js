//Composition API 
//Una calculadora que permite sumar, restar, dividir, multiplicar
const { createApp, ref } = Vue

createApp({
  setup() {
    // Definir los valores de los números y el resultado
    const numero1 = ref(0)
    const numero2 = ref(0)
    const resultado = ref(0)

    // Funciones para realizar las operaciones
    const sumar = () => {
      resultado.value = parseFloat(numero1.value) + parseFloat(numero2.value)
    }

    const restar = () => {
      resultado.value = parseFloat(numero1.value) - parseFloat(numero2.value)
    }

    const multiplicar = () => {
      resultado.value = parseFloat(numero1.value) * parseFloat(numero2.value)
    }

    const dividir = () => {
      if (parseFloat(numero2.value) !== 0) {
        resultado.value = parseFloat(numero1.value) / parseFloat(numero2.value)
      } else {
        resultado.value = 'Error: División por cero'
      }
    }

    // Retornar los datos y métodos a la instancia de Vue
    return {
      numero1,
      numero2,
      resultado,
      sumar,
      restar,
      multiplicar,
      dividir
    }
  }
}).mount('#app6') 
