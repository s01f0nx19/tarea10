// Validación del formulario de login
function validateForm() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    
    if (username === "" || password === "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        alert("El nombre de usuario solo puede contener letras y números.");
        return false;
    }

    if (!isSecurePassword(password)) {
        alert("La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, números y caracteres especiales.");
        return false;
    }
    
    return true;
}

// Validación del formulario de registro
function validateRegisterForm() {
    let username = document.getElementById('new-username').value;
    let password = document.getElementById('new-password').value;

    if (username === "" || password === "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    if (!/^[a-zA-Z0-9]+$/.test(username)) {
        alert("El nombre de usuario solo puede contener letras y números.");
        return false;
    }

    if (!isSecurePassword(password)) {
        alert("La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, números y caracteres especiales.");
        return false;
    }

    return true;
}

// Verificación de la seguridad de la contraseña
function isSecurePassword(password) {
    return /[A-Z]/.test(password) &&     // al menos una letra mayúscula
           /[a-z]/.test(password) &&     // al menos una letra minúscula
           /[0-9]/.test(password) &&     // al menos un número
           /[^A-Za-z0-9]/.test(password) && // al menos un carácter especial
           password.length >= 8;         // al menos 8 caracteres de longitud
}

// Carga automática de música de fondo
window.addEventListener('load', function() {
    let audio = document.getElementById('background-music');
    audio.play();
});
