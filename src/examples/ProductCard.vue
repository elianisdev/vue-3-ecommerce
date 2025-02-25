<script lang="ts">
import type { PropType } from "vue";
import type { Product } from "@/examples/types.ts";

export default {
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true
    }
  },
  emits: ['addProduct'],
  methods: {
    onAddProduct(productId: number) {
      console.log('Agregando al carrito' + productId);
    }
  }
}
</script>

<template>
  <v-card text="primary">
    <p>Nombre: {{ product.name }}</p>
    <p>Precio: {{ product.price }}</p>
    <button @click="onAddProduct(product.id)">
      Agregar al carrito
    </button>
    <hr />
  </v-card>
</template>

<style scoped>
</style>
