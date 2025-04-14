document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('form');
  
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = loginForm.email.value;
      const password = loginForm.password.value;
  
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
          alert('Bienvenido a Wonder Studios');
          window.location.href = 'wonderstudios.html';
        })
        .catch(error => {
          alert('Error: ' + error.message);
        });
    });
  });  