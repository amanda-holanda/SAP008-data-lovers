import dataFunctions from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

const characters = data.results;
const cardContainer = document.querySelector('#card-container');
const selectStatus = document.querySelector('#select-status');
const selectSpecies = document.querySelector('#select-species');
const selectGender = document.querySelector('#select-gender');
const selectOrder = document.querySelector('#select-order');
const percentage = document.querySelector('#percentage');
const searchForName = document.querySelector('#btn-search');
const reset = document.querySelector('#reset');

function displayCards(characters) {
    const arrayResults = characters.map((item) => {
        const template = `
        <div class="card">

            <img class="poster-img" src="${item.image}" alt="${item.name}">

            <ul class="card-text" style="list-style: none">                       
            <li>Name: ${item.name}</li>
            <li>Status: ${item.status}</li>
            <li>Species: ${item.species}</li>
            <li>Gender: ${item.gender}</li>
            <li>Location: ${item.origin.name}</li>
           
            </ul>                

        </div>
        `;
        return template;
    });
    return arrayResults.join("");
}
cardContainer.innerHTML = displayCards(characters);

selectStatus.addEventListener('change', (event) => {
    const value = event.target.value;
    const listaFiltrada = dataFunctions.filtrarPorStatus(characters, value);
    const cards = displayCards(listaFiltrada);
    cardContainer.innerHTML = cards;

    const porcentagem = dataFunctions.calcularPorcentagem(characters.length, listaFiltrada.length);
    percentage.innerHTML = "Essa categoria contém " + porcentagem + "% dos personagens totais";

});

selectSpecies.addEventListener('change', (event) => {
    const value = event.target.value;
    const listaFiltrada = dataFunctions.filtrarPorEspecie(characters, value);
    const cards = displayCards(listaFiltrada);
    cardContainer.innerHTML = cards;

    const porcentagem = dataFunctions.calcularPorcentagem(characters.length, listaFiltrada.length);
    percentage.innerHTML = "Essa categoria contém " + porcentagem + "% dos personagens totais";

});

selectGender.addEventListener('change', (event) => {
    const value = event.target.value;
    const listaFiltrada = dataFunctions.filtrarPorGenero(characters, value);
    const cards = displayCards(listaFiltrada);
    cardContainer.innerHTML = cards;

    const porcentagem = dataFunctions.calcularPorcentagem(characters.length, listaFiltrada.length);
    percentage.innerHTML = "Essa categoria contém " + porcentagem + "% dos personagens totais";

});

selectOrder.addEventListener('change', (event) => {
    const value = event.target.value;
    const listaOrdenada = dataFunctions.ordenar(characters, value);
    const cards = displayCards(listaOrdenada);
    cardContainer.innerHTML = cards;
    percentage.innerHTML = ""; 
});

reset.addEventListener('click', (event) => {
    location.reload(event);

});

searchForName.addEventListener('keyup', function (event) {
    const value = event.target.value;
    const listaFiltrada = dataFunctions.buscarPorNome(characters, value);
    const cards = displayCards(listaFiltrada);
    cardContainer.innerHTML = cards;
});
