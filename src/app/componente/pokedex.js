import Pokedex from 'pokedex-promise-v2';
import { document } from 'postcss';
const P = new Pokedex();

const ListaPokemon = document.querySelector("#listaPokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";

//el for es para crear un bucle que viaje por los 151 pokemon que tiene la poke api
for(let i = 1; i <= 151; i++){

    //fetch de una manera resumida es del lugar donde queremos obtener los datos y este siempre sera una url, en este caso le paso i para que viaje en las url de cada pokemon
    fetch(URL + i)
    //aqui convierto la respuesta del fetch un json
    .then((response) => response.json())
    //aqui le paso la data obtenida a una funcion que se encargara de mostrar los pokemon
    .then(data => MostrarPokemon(data))

}

function MostrarPokemon(data){

}

