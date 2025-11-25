<script setup>
import PokemonCard from './components/PokemonCard.vue'
import PokemonList from './components/PokemonList.vue'
</script>

<template>
  <router-view />
</template>

<script>
export default {};
</script>

<style>
body {
  margin: 0;
  background: #f2f2f2;
  font-family: Arial, sans-serif;
}
</style>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>


