<script lang="ts">
import type { PropType } from "vue";
import type { Product } from "@/examples/Products.ts";

export default {
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  },
  emits: ['addProduct'],
  methods : {
    onAddProduct(productId: number){
      console.log('Agregando al carrito' + productId);

    }
    }
  }

</script>

<template>
  <p>Nombre: {{ product.name }}</p>
  <p>Precio: {{ product.price }}</p>
  <button @click="onAddProduct(product.id)">
    Agregar al carrito
  </button>
  <hr />

</template>

<style scoped>
</style>
