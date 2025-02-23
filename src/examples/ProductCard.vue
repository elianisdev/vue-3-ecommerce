<script lang="ts">
export default {
  props: ['product']
}
</script>

<template>
 <p>Nombre: {{ product.name}}</p>
  <p>Precio: {{ product.price }}</p>
  <hr />
</template>
<style scoped>

</style>
