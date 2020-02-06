'use strict';

//Retreives Dog breed from API endpoint

function getBreed(dogBreed) {
    fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
    console.log(responseJson);
    if(responseJson.code === 404) {
        alert("Breed not found");
        $('.search-results').hide();
    } else {
        $('.search-results').removeClass('hidden');
        $('.results').replaceWith(`<img src="${responseJson.message}" class="results">`);
    }
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      let dogBreed = $('#breed-input').val(); 
      getBreed(dogBreed);
    });
}

$(function() {
    console.log('App is loaded! Waiting for submit!');
    watchForm();
});