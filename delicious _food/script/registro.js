let btn = document.getElementById("Registrarse");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  let nombre = document.getElementById("fullname").value.trim();
  let email = document.getElementById("email").value.trim();
  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();

  // Validar campos vacíos
  if (!nombre || !email || !username || !password) {
    alert("Todos los campos son obligatorios.");
    return;
  }

  // Validar email básico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("El correo electrónico no es válido.");
    return;
  }

  // Si pasa las validaciones
  alert("Datos registrados correctamente.");

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("email", email);
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);


});
