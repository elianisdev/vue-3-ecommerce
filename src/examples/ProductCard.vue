<script lang="ts">
export default {
  data(){
    return {
  product: {
    name: "Silla",
    price: 100,
  }
    }
  }
}
</script>

<template>
 <p>{{ product.name}}</p>
  <p>{{ product.price }}</p>


</template>
<style scoped>

</style>
