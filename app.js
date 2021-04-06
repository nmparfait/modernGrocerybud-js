// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
// const editBtn = document.querySelector('.edit-btn');
// const deleteBtn = document.querySelector('.delete-btn');
// edit option
let editElement;
let editFlag = false;
let editID = '';

// ****** EVENT LISTENERS **********
//submit form
form.addEventListener('submit', addItem);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !editFlag) {
    console.log('add item to the list');
  } else if (value && editFlag) {
    console.log('we are editing');
  } else {
    console.log('empty value');
  }
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
