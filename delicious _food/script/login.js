function Iniciar(event) {
    
 event.preventDefault()

   let nombre = document.getElementById('username').value;
   let pass = document.getElementById('password').value;
   
   let nom = localStorage.getItem('nombre');
   let pas = localStorage.getItem('password');

   if (nombre == nom && pass == pas) { 
    alert('si')
    window.location.href = 'index.html';
   }
}