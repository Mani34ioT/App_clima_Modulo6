<template>
  <div id="app">
    <h1>App de Clima - Limache</h1>
    <router-view />
  </div>
</template>

<style>
/* Estilos Globales  */
body {
  background-color: #f4f7f6;
  color: #2c3e50;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
}

#app {
  max-width: 600px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}

h1 { color: #34495e; margin-bottom: 30px; }

input {
  padding: 12px;
  width: 80%;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-bottom: 30px;
  font-size: 16px;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

a {
  color: #42b983;
  text-decoration: none;
  font-weight: bold;
}
</style>