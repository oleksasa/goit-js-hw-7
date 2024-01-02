const form = document.querySelector('.login-form');

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const obj = {};

  formData.forEach(function (value, key) {
    if (value === '') {
      alert('All form fields must be filled in');
    } else {
      obj[key] = value.trim();
    }
  });

  console.log(obj);
  form.reset();
}

form.addEventListener('submit', handleSubmit);
