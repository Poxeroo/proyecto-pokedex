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
    //creo una constante llamada div la que se encargara de crear una etiqueta div en el html
    const div = document.createElement("div");
    
    
    div.innerHTML = `

    <div className=' bg-slate-100 grid grid-cols-3 gap-4 p-8 shadow-inner min-h-screen'>

        <div className=' bg-white rounded-xl shadow-sm shadow-slate-400 p-2'>

        <div className='isolate relative w-full '>
            
          <p className=' text-slate-700 text-9xl text-opacity-90 absolute left-1/2 -translate-x-1/2 -z-10'># </p>

        </div>

        <div className='flex justify-center'>

          <img src='./contenido/logo.png' className=''></img>

        </div>

        <div className='flex flex-row gap-x-3 justify-center py-2'>

          <p className=' text-black bg-slate-300 rounded-full text-lg font-semibold px-3'># </p>
          <h3 className=' text-black text-xl font-extrabold'>Nombre</h3>

        </div>
        
        <div className='flex flex-row gap-x-3 justify-center py-2'>

          <p className=' text-black bg-fuego rounded-full px-3 text-lg font-semibold'>tipo 1</p>
          <p className=' text-black bg-rayo rounded-full px-3 text-lg font-semibold'>tipo 2</p>

        </div>

        <div className='flex flex-row gap-x-3 justify-center py-2'>

          <p className=' text-black bg-slate-300 rounded-full text-lg font-semibold px-3'> # M</p>
          <p className=' text-black bg-slate-300 rounded-full text-lg font-semibold px-3'> # KG</p>

        </div>

        
        
      </div>
      
    </div>

    `;

    ListaPokemon.append(div);


}

