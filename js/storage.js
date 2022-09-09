function storageData() {
  const visitors = JSON.parse(localStorage.getItem('visitors'));

  const { inputName, inputEmail, inputMessage } = visitors;

  document.getElementById('user-name').value = inputName;
  document.getElementById('user-email').value = inputEmail;
  document.getElementById('user-text').value = inputMessage;
}

function setLocalStorage() {
  const inputName = document.getElementById('user-name').value;
  const inputEmail = document.getElementById('user-email').value;
  const inputMessage = document.getElementById('user-text').value;

  const visitors = { inputName, inputEmail, inputMessage };
  localStorage.setItem('visitors', JSON.stringify(visitors));
  storageData();
}

if (!localStorage.getItem('visitors')) {
  setLocalStorage();
} else {
  storageData();
}
