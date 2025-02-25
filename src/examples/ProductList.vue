<script lang="ts">
import ProductCard from "@/examples/ProductCard.vue";
import CardComponent from "@/examples/CardComponent.vue";
import type { Product, CartDetail } from "@/examples/types.ts";

export default {
  components: {
    ProductCard,
    CardComponent
  },
  data() {
    return {
      products: <Array<Product>>[
        { name: 'Silla', price: 56, id: 1 },
        { name: 'Mesa', price: 450, id: 2 },
        { name: 'Escritorio', price: 120, id: 3 }
      ],
      details: <Array<CartDetail>>[]
    }
  },
  methods: {
    onAddProduct(productId: number) {
     const detailFound = this.details.find(detail => detail.productId === productId);
    if (detailFound) {
      detailFound.quantity +=1;
    } else {
      this.details.push({
        productId,
        quantity: 1 });
    }

    }
  }
}
</script>

<template>
  <ProductCard
    v-for="product in products"
    :product="product"
    @addProduct="onAddProduct"
    :key="product.name"
  />
  <CardComponent :details="details"/>
</template>

<style scoped>
</style>
