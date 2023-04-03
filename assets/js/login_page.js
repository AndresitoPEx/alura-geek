
const form = document.querySelector('.form_container_login');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const correo = document.getElementById('correo').value;
  const contrasena = document.getElementById('contrasena').value;

  // Realiza una solicitud GET al servidor JSON para obtener la lista de usuarios
  fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => {
      const usuario = users.find(user => user.email === correo && user.password === contrasena);
      if (usuario) {
        // Si se encuentra una coincidencia, redirige al usuario a la página de inicio
        window.location.href = './registrar-producto.html';
      } else {
        // Si no se encuentra una coincidencia, muestra un mensaje de error al usuario en la página de inicio de sesión
        alert('Correo electrónico o contraseña incorrectos');
      }
    })
    .catch(error => console.error(error));
});
