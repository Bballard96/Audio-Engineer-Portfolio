const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const form = document.getElementById('.contact-form');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));

form.addEventListener('submit', function(event) {
  event.preventDefault();


  const formData = new FormData(form);

})