'use client'// indica que estas utilizando un componente desde el lado del cliente
import React, { useEffect, useState } from "react";// importo 2 hooks 
import axios from "axios"; //importo axios y se utiliza para realizar solicitudes https

export default function mostrarPokedex() {
  const [pokemonList, setPokemonList] = useState([]); // declaro las listas de pokemon como un areglo vacio
  const [selectedCategory, setSelectedCategory] = useState(""); // declaro las categorias de cada pokemon como un string
  const [searchTerm, setSearchTerm] = useState(""); // declaro el termino de busqueda como un string

  useEffect(() => {
    //realizo una solicitud get a la api de pokemon para obtener los datos de los 151 pokemon
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151") // el limit segun lo entendido no es necesario pero con este limito la busqueda a las 151 primeros
      .then((response) => { // manejo la respuesta exitosa de la solicitud http realizada y se supone que esta respuesta viene con los resultados de cada pokemon
        
        const pokemonDataArray = response.data.results;// le paso los resultados de la busqueda a la constante
        const requests = pokemonDataArray.map((pokemon) =>//crea un nuevo arreglo llamado requests donde cada elemento es el resultado de hacer una solicitud axios.get() a la URL de un Pokémon específico.
          axios.get(pokemon.url) // Cada elemento representa un Pokémon y contiene una URL y por medio de esta podemos acceder a la informacion de cada pokemon
        );

        Promise.all(requests) // promise.all hace que el programa espere que se completen todas las solicitudes o promesas
          .then((responses) => { //aqui manejo la respuesta exitosa de cada solicitud de manera individual, ya que responses es quien contiene todas las solicitudes
            const pokemonDetails = responses.map((response) => {//mapeo los detalles del pokemon mapeando responses
              const categories = response.data.types.map(//guardo en una constante llamada categories el mapeo del apartado types de types de cada pokemon
                (type) => type.type.name // la funcion type devolvera lo que se encuentre en la ubicacion type.type.name
              );

              return { ...response.data, categories };//los 3 puntos crean un clon editable de lo que le pases

            });

            setPokemonList(pokemonDetails);// le paso los detalles de cada pokemon a la lista de pokemon
          })
          .catch((error) => { // manejo errores
            console.error("Error:", error);
          });
      })
      .catch((error) => {//manejo errores
        console.error("Error:", error);
      });
  }, []);

  const handleCategoryChange = (e) => {//esto se ejecutara si ocurre algun cambio en el select
    setSelectedCategory(e.target.value);//aqui se actualiza el estado del select y se obtiene este estado por medio de e.target.value
  };

  // ? es una expresion condicional que verifica si selectedcategory posee algun valor, si esta posee un valor se ejecuta la primera parte si no posee entoces se ejecutara la segunda
  const filteredPokemonList = selectedCategory ? //creamos un filtro que almacenará la lista de Pokémon filtrada en función de la categoría seleccionada
  //primera parte
  pokemonList.filter((pokemon) => //si sucede un cambio en el select esto se ejecuta y solo muestra en pantalla los pokemones que posean esa categoria
        pokemon.categories.includes(selectedCategory)
      )
    //segunda parte
    : pokemonList; // si no hay cambios o no tiene un valor lo seleccionado lo muestro todo 


  const searchFilteredPokemonList = filteredPokemonList.filter((pokemon) => //creo el filtro por termino de busqueda
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) //aqui solo pido que ignoren si es minuscula o mayuscula
  );

  return (
    <>
       {/* Agrega el selector de categorías */}
      <div className="bg-slate-100 p-2 flex flex-row justify-center gap-x-4">

        <select value={selectedCategory} onChange={handleCategoryChange} className="text-center text-black font-sans text-lg font-bold bg-slate-100"> {/* le paso como valor la categoria seleccionada y cada vezque suceda un cambio "metodo onchange" se ejecutara el metodo handlecategorychange */} 
          {/* le paso cada opcion deseada */}
          <option className='text-center text-black font-sans text-lg font-bold' value=''>Todos</option>
          <option className='text-center text-fire font-sans text-lg font-bold ' value='fire'>Fire</option>
          <option className='text-center text-water font-sans text-lg font-bold ' value='water'>Water</option>
          <option className='text-center text-grass font-sans text-lg font-bold' value='grass'>Grass</option>
          <option className='text-center text-electric font-sans text-lg font-bold ' value='electric'>Electric</option>
          <option className='text-center text-ground font-sans text-lg font-bold ' value='ground'>Ground</option>
          <option className='text-center text-rock font-sans text-lg font-bold' value='rock'>Rock</option>
          <option className='text-center text-ice font-sans text-lg font-bold ' value='ice'>Ice</option>
          <option className='text-center text-fighting font-sans text-lg font-bold ' value='fighting'>Fighting</option>
          <option className='text-center text-poison font-sans text-lg font-bold' value='poison'>Poison</option>
          <option className='text-center text-flying font-sans text-lg font-bold ' value='flying'>Flying</option>
          <option className='text-center text-psychic font-sans text-lg font-bold ' value='psychic'>Psychic</option>
          <option className='text-center text-bug font-sans text-lg font-bold' value='bug'>Bug</option>
          <option className='text-center text-ghost font-sans text-lg font-bold ' value='ghost'>Ghost</option>
          <option className='text-center text-dark font-sans text-lg font-bold ' value='dark'>Dark</option>
          <option className='text-center text-dragon font-sans text-lg font-bold' value='dragon'>Dragon</option>
          <option className='text-center text-steel font-sans text-lg font-bold ' value='steel'>Steel</option>
          <option className='text-center text-fairy font-sans text-lg font-bold ' value='fairy'>Fairy</option>
          <option className='text-center text-normal font-sans text-lg font-bold' value='normal'>Normal</option>

        </select>
      {/* en el value enlazo el valor de busqueda como valor de entrada 
          en el onchange capturo los cambios de valor que suceden en el input
      */}
      
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Buscar Pokémon por nombre" className="text-black shadow-inner rounded-lg shadow-slate-500 px-3 py-1"/>

      </div>

      
      {/* Mostrar la lista de Pokémon */}
      <div className="bg-slate-100 grid grid-cols-3 gap-4 p-8 shadow-inner" >
        {searchFilteredPokemonList.map((pokemon, index) => (//mapeo toda la lista de pokemon siguiendo el filtro de busqueda pero esto no evita que funcionen todos los filtros
          
          <div className="bg-white rounded-xl shadow-sm shadow-slate-400 p-2" key={pokemon.id}>{/*Crea un div para mostrar los detalles de un Pokémon en particular. Se le da una clase CSS y una clave única (key) para identificación.*/}

            <div className="flex justify-center">{/* Crea un div para mostrar una imagen del Pokémon. Se utiliza la URL de la imagen desde los detalles del Pokémon */}
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
              />
            </div>

            <div className="flex flex-row gap-x-3 justify-center py-2">
              <h3 className="text-black bg-slate-300 rounded-full text-xl font-bold px-3">
                {pokemon.id}
              </h3>
              <h3 className="text-black text-xl font-extrabold">{pokemon.name}</h3>
            </div>

            <div className="flex flex-row gap-x-3 justify-center py-2">
              {pokemon.categories.map((category, catIndex) => ( //(//mapeo el apartado type del contenido de pokemon y de ahi saco el nombre de su tipo y lo coloco como bg y como label del spam
                <span key={catIndex} className={`text-black bg-${category} rounded-full text-lg font-semibold px-3`}>
                  {category}
                </span>
              ))}
              
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
