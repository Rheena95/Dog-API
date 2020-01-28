'use strict';

//Retrieves the dog image from the dog API endpoint

function getDogImage(dogInput) {
  fetch(`https://dog.ceo/api/breeds/image/random/${dogInput}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

//This function handles the displaying of the actual amount of dogs chosen by the user.
//We first empy the section and then display the images each time the button is pressed.

function displayResults(responseJson) {
    console.log(responseJson);
    $('.js-search-results').empty();
    for (let i = 0; i < responseJson.message.length; i++) {
      $('.js-search-results').append(`<img src="${responseJson.message[i]}">`);
    }
  }


//Watches for the submit button interaction

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let dogInput = $('#dog-input').val();
    getDogImage(dogInput);
  });
}

// Initilize dog app

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});