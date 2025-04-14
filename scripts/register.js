document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.querySelector('form');
  
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = registerForm.email.value;
      const password = registerForm.password.value;
  
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          alert('Cuenta creada con éxito');
          window.location.href = 'login.html';
        })
        .catch(error => {
          alert('Error: ' + error.message);
        });
    });
  });  