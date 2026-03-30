<template>
  <div v-if="lugar" class="card detail-container">
    <h2>Detalle de {{ lugar.nombre }}</h2>
    <p class="temp-actual">Clima actual: <strong>{{ lugar.actual }}°C</strong></p>
    
    <hr>
    
    <h3>Estadísticas Semanales</h3>
    <div class="stats-grid">
      <div class="stat-item">
        <span class="icon">🌡️</span>
        <span class="label">Mínima</span>
        <span class="value">{{ lugar.stats.min }}°C</span>
      </div>
      <div class="stat-item">
        <span class="icon">🔥</span>
        <span class="label">Máxima</span>
        <span class="value">{{ lugar.stats.max }}°C</span>
      </div>
      <div class="stat-item">
        <span class="icon">📊</span>
        <span class="label">Promedio</span>
        <span class="value">{{ lugar.stats.prom }}°C</span>
      </div>
    </div>

    <br>
    <router-link to="/" class="back-link">← Volver al inicio</router-link>
  </div>
  
  <div v-else class="card">
    <p>Cargando información del lugar...</p>
    <router-link to="/">Volver al inicio</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { lugaresClima } from '../data';

const route = useRoute();
const lugar = lugaresClima.find(l => l.id === parseInt(route.params.id));
</script>

<style scoped>
.detail-container {
  margin-top: 20px;
  animation: fadeIn 0.5s ease;
}

.temp-actual {
  font-size: 24px;
  color: #2c3e50;
}

.stats-grid {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;
}

.stat-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8f9fa;
  padding: 15px 20px;
  border-radius: 10px;
  border-left: 5px solid #42b983;
}

.icon { font-size: 20px; }
.label { font-weight: bold; color: #7f8c8d; }
.value { font-weight: bold; color: #2c3e50; font-size: 18px; }

.back-link {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white !important;
  border-radius: 5px;
  transition: background 0.3s;
}

.back-link:hover {
  background-color: #3aa876;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

hr {
  border: 0;
  border-top: 1px solid #eee;
  margin: 25px 0;
}
</style>