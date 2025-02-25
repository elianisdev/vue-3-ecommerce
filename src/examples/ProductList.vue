<script lang="ts"> //componente usando option API
import ProductCard from "@/examples/ProductCard.vue";
import type {Product} from "@/examples/Products.ts";

export default {
  components: {
    ProductCard
  },
  data(){// data es una funcion que retorna un objeto define el estado del componente y ya se usa en el template
    return {
products: <Array<Product>>[
  {name: 'Silla', price: 56, id: 1},
  {name: 'Mesa', price: 450, id: 2},
  {name: 'Escritorio', price: 120, id: 3},
]
    }
  },
  methods: {
    onAddProduct(){
      console.log('Agregando al carrito');
    }
  }
}

</script>

<template>
<ProductCard
  v-for="product in products"
  :product="product"
  @addProduct="onAddProduct"

  :key="product.name" />

</template>//template es una funcion que retorna un objeto define la estructura del componente, `@` escucha un evento es un atajo para `v-on Es la forma corta osea shorthand para v-on:click="onAddProduct(product.id)"`

<style scoped>

</style>
