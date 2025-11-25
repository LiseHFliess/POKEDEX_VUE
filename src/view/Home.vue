<template>
  <div class="container">
    <h1>Pokédex</h1>

    <div class="search-bar">
      <input 
        v-model="searchTerm" 
        type="text" 
        placeholder="Digite o nome ou ID do Pokémon..."
        @keyup.enter="searchPokemon"
      />
      <button @click="searchPokemon">
        Buscar
      </button>
      </div>


    <PokemonList :pokemons="pokemons" @select="goToDetails" />

    <div class="pagination" v-if="!searchTerm">
      <button @click="previousPage" :disabled="page === 0">
        Anterior
      </button>
      <button @click="nextPage">Próxima</button>
    </div>
  </div>
</template>

<script>
import PokemonList from "../components/PokemonList.vue";
import pokemonService from "../services/pokemonService";

export default {
  components: { PokemonList },

  data() {
    return {
      pokemons: [],
      page: 0,
      limit: 20,
      searchTerm: ""
    };
  },

  methods: {
    loadPokemons() {
      const offset = this.page * this.limit;

      pokemonService
        .getPokemonList(this.limit, offset)
        .then(async res => {
          const results = res.data.results;

          const detailed = await Promise.all(
            results.map(p =>
              pokemonService.getPokemonByName(p.name)
            )
          );

          this.pokemons = detailed.map(d => ({
            id: d.data.id,
            name: d.data.name,
            image:
              d.data.sprites.other["official-artwork"].front_default,
            types: d.data.types.map(t => t.type.name),
            stats: {
              hp: d.data.stats.find(s => s.stat.name === "hp").base_stat,
              attack: d.data.stats.find(s => s.stat.name === "attack").base_stat,
              defense: d.data.stats.find(s => s.stat.name === "defense").base_stat,
              speed: d.data.stats.find(s => s.stat.name === "speed").base_stat,
            }
          }));
        });
    },

    nextPage() {
      this.page++;
      this.loadPokemons();
    },

    previousPage() {
      if (this.page > 0) this.page--;
      this.loadPokemons();
    },

    goToDetails(name) {
      this.$router.push(`/pokemon/${name}`);
    },

    async searchPokemon() {
      const term = this.searchTerm.toLowerCase().trim();
      
      if (!term) {
        this.loadPokemons();
        return;
      }

      try {
        const res = await pokemonService.getPokemonByName(term);
        const d = res.data;

        this.pokemons = [{
            id: d.id,
            name: d.name,
            image: d.sprites.other["official-artwork"].front_default,
            types: d.types.map(t => t.type.name),
            stats: {
              hp: d.stats.find(s => s.stat.name === "hp").base_stat,
              attack: d.stats.find(s => s.stat.name === "attack").base_stat,
              defense: d.stats.find(s => s.stat.name === "defense").base_stat,
              speed: d.stats.find(s => s.stat.name === "speed").base_stat,
            }
        }];
        
      } catch (error) {
        console.error("Erro ao buscar Pokémon:", error);
        alert(`Pokémon com nome/ID "${term}" não encontrado.`);
        this.pokemons = [];
      }
    },
  },

  mounted() {
    this.loadPokemons();
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 40px;
  .search-bar {
  display: flex; 
  justify-content: center; 
  gap: 10px; 
  margin-bottom: 40px;
}

.search-bar input {
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1em;
  width: 400px; 
  max-width: 70%; 
  transition: border-color 0.2s;
}

.search-bar input:focus {
  border-color: #3498db;
  outline: none;
}

.search-bar button {
  
  background-color: #3498db;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.2s;
}

.search-bar button:hover {
  background-color: #2980b9;
}
}
h1{
  color: black;
}
</style>
