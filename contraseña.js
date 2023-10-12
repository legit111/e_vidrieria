document.getElementById("formulario").addEventListener("submit", function(event) {
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm_password").value;

  if (password !== confirm_password) {
    alert('Las contraseñas no coinciden. Por favor, inténtalo de nuevo.');
    event.preventDefault(); // Evita que el formulario se envíe
  }
});
