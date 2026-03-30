<template>
  <div>
    <h2>Pronóstico en la Zona</h2>
    <input v-model="busqueda" placeholder="Buscar lugar..." />

    <div v-for="lugar in lugaresFiltrados" :key="lugar.id" class="card">
      <h3>{{ lugar.nombre }}</h3>
      <p>Temperatura: {{ lugar.actual }}°C</p>
      <router-link :to="'/lugar/' + lugar.id">Ver detalle</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { lugaresClima } from '../data';

const busqueda = ref('');
const lugaresFiltrados = computed(() => {
  return lugaresClima.filter(l => 
    l.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
  );
});
</script>