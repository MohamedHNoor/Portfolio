const form = document.getElementById('projectForm');

function lowercaseEmail(input) {
  return input === String(input).toLowerCase();
}
form.addEventListener('submit', (event) => {
  // get email value fromm form
  const userEmail = form.elements['user-email'].value;

  // check if email is on lowercase
  const emailLowercase = lowercaseEmail(userEmail);

  // get small element to display error message
  const small = document.getElementById('small-error');

  if (emailLowercase) {
    small.innerHTML = '';
    form.submit();
  } else {
    small.innerHTML = 'Please enter a correct email address format';
    event.preventDefault();
  }
});
