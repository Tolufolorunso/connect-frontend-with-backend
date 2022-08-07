const registerForm = document.getElementById('register');

function registerUser(event) {
  event.preventDefault();
  console.log(event.target.fullname.value);
  let fullname = event.target.fullname.value;
  let email = event.target.email.value;
  let password = event.target.password.value;

  if (!fullname || !email || !password) {
    alert('All fields required');
    return;
  }

  let userObj = {
    fullname,
    email,
    password,
  };

  fetchAPI(userObj, 'users/register', 'POST').then((data) => {
    if (data.status) {
      alert(data.message);
      window.location.href = '../pages/login.html';
    } else {
      alert(data.message);
    }
  });
}

registerForm.addEventListener('submit', registerUser);
