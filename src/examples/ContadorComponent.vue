<script  lang="ts"> //componente usando option API
export default {
 data(){// data es una funcion que retorna un objeto define el estado del componente y ya se usa en el template
   return {
     count: 0
   }
 },
  methods: { //metodos que se usan en el template para no hacerlo muy grande
    increase(){
      this.count++ //incrementa el valor de count para acceder al estado del componente se debe colocar this
    },
    dismind(){
      this.count--
    }
  },
  mounted(){
    console.log('El valor inicial del contador es: ', this.count)
  } //se ejecuta despues de que el componente se ha montado en el DOM
}
</script>

<template>
<h1>Contador: {{ count }}</h1>
<button @click="increase">Incrementar</button> //evento click que incrementa el valor de count y se llama al metodo increase
  <button @click="dismind">Disminuir</button>
</template> //template es el html del componente lo que se muestra al usuario

<style scoped>

</style>
