'use client'
import axios from "axios"; //importo axios y se utiliza para realizar solicitudes https
import { useEffect, useState } from "react";
 

const Pokemon= ({params}) => {

  const [DataPokemon, setDataPokemon] = useState([]); // declaro las listas de pokemon como un areglo vacio
  const [Img,setImg] = useState([]);
  const [Types, setTypes] = useState([]);

  useEffect(() => {

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then((respuesta) => {

        setDataPokemon(respuesta.data);
        setImg(respuesta.data.sprites.other["official-artwork"].front_default);
        setTypes(respuesta.data.types);
        
      })

      .catch((error) => {
        console.error("Error:", error);
      });

     
      
  }, [params.id]);
  
  return (
    <>
    

    <div className="bg-slate-100 flex flex-row gap-4 p-10 shadow-inner" >
        
      <div className="bg-white rounded-xl shadow-sm shadow-slate-400 p-4" >{/*Crea un div para mostrar los detalles de un Pokémon en particular. Se le da una clase CSS y una clave única (key) para identificación.*/}

        <div className="flex flex-col justify-center">{/* Crea un div para mostrar una imagen del Pokémon. Se utiliza la URL de la imagen desde los detalles del Pokémon */}
          <div className="flex flex-row justify-center gap-x-3">

            <h1 className="text-black bg-slate-300 rounded-full text-xl font-bold px-3">{DataPokemon.id}</h1>
            <h1 className="text-black text-xl font-extrabold text-center uppercase">{DataPokemon.name}</h1>

          </div>
          <img src={Img} className="aspect-auto"></img>

          <div className="flex flex-col gap-y-2">

            <h3 className="text-black text-center text-xl font-bold">Types:</h3>

            <div className="flex flex-row justify-evenly">

              {Types.map((types,typeIndex)=>(
                <h3 key={typeIndex} className="text-black uppercase text-xl font-semibold">{types.type.name}</h3>
              ))}

            </div>

          </div>
          

        </div>
      </div>


    </div>


    </>
  )
}
export default Pokemon;
