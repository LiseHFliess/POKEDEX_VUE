<template>
  <div class="grid">
    <PokemonCard
      v-for="p in pokemons"
      :key="p.name"
      :pokemon="p"
      @click="$emit('select', p.name)"
    />
  </div>
</template>

<script>
import PokemonCard from "./PokemonCard.vue";

export default {
  components: { PokemonCard },
  props: ["pokemons"]
};
</script>

<style scoped>
.grid {

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
  gap: 25px; 
}
</style>
