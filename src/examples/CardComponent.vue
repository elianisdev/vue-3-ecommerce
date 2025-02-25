<script lang="ts">
import type { CartDetail } from "@/examples/types.ts";
import type {PropType} from "vue";

export default {
  props: {
    details: {
      type: Object as PropType<Array<CartDetail>>,
      required: true
    }
  }
};
</script>

<template>
  <p>Productos agregados al carrito:</p>
  <ul>
    <li v-for="detail in details" :key="detail.productId">
      Producto {{ detail.productId }} (Qty: {{ detail.quantity }})
    </li>
  </ul>
</template>
