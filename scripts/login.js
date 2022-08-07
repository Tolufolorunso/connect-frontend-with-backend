const loginForm = document.getElementById('login');

if (localStorage.getItem('token')) {
  window.location.href = '../pages/secret.html';
} else {
  document.querySelector('.loading').style.display = 'none';
}

function loginUser(event) {
  event.preventDefault();
  let email = event.target.email.value;
  let password = event.target.password.value;

  if (!email || !password) {
    alert('All fields required');
    return;
  }

  let userObj = {
    email,
    password,
  };

  fetchAPI(userObj, 'users/login', 'POST').then((data) => {
    // console.log(data.user);
    if (data.status) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('userData', data.user);
      alert(data.message);
      window.location.href = '../pages/secret.html';
    } else {
      alert(data.message);
    }
  });
}

loginForm.addEventListener('submit', loginUser);
