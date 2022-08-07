const authBtns = document.querySelectorAll('.auth');
const fullname = document.querySelector('#name');

const token = localStorage.getItem('token');
// console.log(JSON.parse(localStorage.getItem('userData')));
if (token) {
  authBtns.forEach((el) => {
    el.style.display = 'none';
  });

  fetch('http://localhost:4000/api/v1/users/profile', {
    method: 'GET',
    withCredentials: true,
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      fullname.textContent = result.user.fullname;
    })
    .catch((e) => console.log(e));
}
