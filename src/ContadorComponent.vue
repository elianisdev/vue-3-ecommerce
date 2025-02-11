<script  lang="ts"> //componente usando option API
export default {
 data(){// data es una funcion que retorna un objeto define el estado del componente y ya se usa en el template
   return {
     count: 0
   }
 },
}
</script>

<template>
<h1>Contador: {{ count }}</h1>
<button @click="count++">Incrementar</button> //evento click que incrementa el valor de count
</template>

<style scoped>

</style>
