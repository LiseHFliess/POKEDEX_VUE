<template>
  <div class="card" @click="$emit('click')">
    <div class="pokemon-id">#{{ String(pokemon.id).padStart(3, '0') }}</div>
    <img :src="pokemon.image" :alt="pokemon.name" />
    <h3 class="pokemon-name">{{ pokemon.name }}</h3>

    <div class="type-container">
      <span
        v-for="type in pokemon.types"
        :key="type"
        class="type-tag"
        :style="{ backgroundColor: getTypeColor(type) }"
      >
        {{ type.toUpperCase() }}
      </span>
    </div>

    <div class="stats-container">
      <div class="stat-item">
        <span class="stat-label">HP:</span>
        <span class="stat-value">{{ pokemon.stats.hp }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Ataque:</span>
        <span class="stat-value">{{ pokemon.stats.attack }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Defesa:</span>
        <span class="stat-value">{{ pokemon.stats.defense }}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Velocidade:</span>
        <span class="stat-value">{{ pokemon.stats.speed }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getTypeColor } from '../assets/typeColors'; 

export default {
  props: ["pokemon"],
  methods: {
    getTypeColor
  }
};
</script>

<style scoped>
.card {

  background: white;
  border-radius: 12px;
  padding: 15px 10px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-family: Arial, sans-serif;
  color: #333;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
}

.pokemon-id {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #666;
}

img {
  width: 120px;
  height: 120px;
  object-fit: contain;
  margin: 10px 0;
}

.pokemon-name {
  font-size: 1.2em;
  font-weight: bold;
  color: #222;
  margin: 5px 0 10px 0;
  text-transform: capitalize;
}

.type-container {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 15px;
}

.type-tag {
  color: white;
  padding: 4px 10px;
  border-radius: 5px;
  font-size: 0.75em;
  font-weight: bold;
  text-shadow: 0 1px 1px rgba(0,0,0,0.3);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}


.stats-container {
  width: 100%;
  padding: 0 10px;
  margin-top: 10px; 
  /* Aplicando o Grid para 2 colunas */
  display: grid;
  grid-template-columns: 1fr 1fr; 
  gap: 5px 10px; 
  text-align: left;
}

.stat-item {
  display: flex; 
  font-size: 0.8em;
}

.stat-label {
  font-weight: bold;
  color: #555;
  margin-right: 4px; 
  width: 50%; 
}

.stat-value {
  color: #333;
  font-weight: 500;
  width: 50%; 
  text-align: right;
}
</style>