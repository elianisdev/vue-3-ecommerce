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
}

</script>

<template>
<ProductCard
  v-for="product in products"
  :product="product"
  :key="product.name" />
</template>

<style scoped>

</style>
