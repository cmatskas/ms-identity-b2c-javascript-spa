// Select DOM elements to work with
const signInButton = document.getElementById('signIn');
const signOutButton = document.getElementById('signOut')
const titleDiv = document.getElementById('title-div');
const welcomeDiv = document.getElementById('welcome-div');
const tableDiv = document.getElementById('table-div');
const tableBody = document.getElementById('table-body-div');
const editProfileButton = document.getElementById('editProfileButton');
const response = document.getElementById("response");
const label = document.getElementById('label');

function welcomeUser(username) {
    label.classList.add('d-none');
    signInButton.classList.add('d-none');
    signOutButton.classList.remove('d-none');
    titleDiv.classList.add('d-none');
    editProfileButton.classList.remove('d-none');
    welcomeDiv.classList.remove('d-none');
    welcomeDiv.innerHTML = `Welcome ${username}!`
}

function goodbyUser() {
    label.classList.remove('d-none');
    signInButton.classList.remove('d-none');
    signOutButton.classList.add('d-none');
    titleDiv.classList.remove('d-none');
    editProfileButton.classList.add('d-none');
    welcomeDiv.classList.add('d-none');
    welcomeDiv.innerHTML = ``
}

function logMessage(s) {
    response.appendChild(document.createTextNode('\n' + s + '\n'));
}