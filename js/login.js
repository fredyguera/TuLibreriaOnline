document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();//Evitar que el formulario se envie automaticamente al servidor

    const usuario = document.getElementById ('usuario').value; 
    const pass = document.getElementById ('pass').value;

   //SIMULACION básica de login
    if(usuario === 'admin' && pass === '12345'){
        window.location.href = '../private/dashboard.html';
    }
    else{
        document.getElementById ('mensajelogin').textContent = "Usuario o contraseña incorrectos"
    }
});