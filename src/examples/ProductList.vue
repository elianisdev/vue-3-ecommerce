<script lang="ts"> //componente usando option API
import ProductCard from "@/examples/ProductCard.vue";

export default {
  components: {
    ProductCard
  },
  data(){// data es una funcion que retorna un objeto define el estado del componente y ya se usa en el template
    return {
products: [
  {name: 'Silla', price: 56},
  {name: 'Mesa', price: 450},
  {name: 'Escritorio', price: 120}
]
    }
  },
  methods: {

  }

}

</script>

<template>
<ProductCard v-for= "product in products" />
</template> //template es el html del componente lo que se muestra al usuario

<style scoped>

</style>
