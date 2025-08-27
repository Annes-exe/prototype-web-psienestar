// script.js
// funcion de desplazamiento de la navegacion del header a las secciones correspondientes
function irASeccion(id) {
    const elemento = document.getElementById(id);
    elemento.scrollIntoView({ behavior: 'smooth' });
}

// Validación del formulario
function validarFormulario(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const permiso = document.getElementById('permiso').checked;

    if (!nombre || !email || !telefono) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return;
    }

    if (!permiso) {
        alert('Debe aceptar los términos para enviar el formulario.');
        return;
    }

    alert('Formulario enviado con éxito.');
    document.querySelector('form').submit(); // Envía el formulario
}
document.querySelector('form').addEventListener('submit', validarFormulario);



