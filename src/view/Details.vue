<template>
  <div v-if="pokemon" class="details">
    <h1>{{ pokemon.name }}</h1>

    <img :src="pokemon.image" />

    <h3>Tipos:</h3>
    <ul>
      <li v-for="t in pokemon.types" :key="t">
        {{ t }}
      </li>
    </ul>

    <button @click="$router.back()">Voltar</button>
  </div>
</template>

<script>
import pokemonService from "../services/pokemonService";
import Pokemon from "../models/Pokemon";

export default {
  props: ["name"],

  data() {
    return {
      pokemon: null
    };
  },

  mounted() {
    pokemonService.getPokemonByName(this.name).then(res => {
      this.pokemon = new Pokemon(res.data);
    });
  }
};
</script>

<style>
.details {
  text-align: center;
  padding: 20px;
}

img {
  width: 200px;
}
</style>
