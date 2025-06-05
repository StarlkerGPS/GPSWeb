fetch(webhookURL, {
  method: 'POST',
  mode: 'no-cors', // 🔧 importante para evitar bloqueos CORS
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(datos)
})
.then(() => {
  document.getElementById('status').textContent = 'Ubicación enviada.';
})
.catch(error => {
  document.getElementById('status').textContent = 'Error al enviar.';
  console.error('Error:', error);
});
