<script setup lang="ts"> //setup es una nueva caracteristica de vue 3
import {onMounted, ref} from 'vue';

const count = ref(0);
function increment() {
  count.value++;
}
onMounted(() => {
  console.log('El valor inicial del contador es: ', count.value);
});
</script>

<template>
<p>Hola soy la version con composition api</p>
  <h1>Contador: {{ count }}</h1>
  <button @click="increment">Incrementar</button>
  <button @click="count--">Decrementar.</button>

</template>

<style scoped>

</style>
