'use client'
import axios from "axios"; //importo axios y se utiliza para realizar solicitudes https
import { useEffect, useState } from "react";
 

const Pokemon= ({params}) => {

  const [DataPokemon, setDataPokemon] = useState([]); // declaro las listas de pokemon como un areglo vacio
  const [Img,setImg] = useState([]);

  useEffect(() => {

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then((respuesta) => {

        setDataPokemon(respuesta.data);
        setImg(respuesta.data.sprites);

      })

      .catch((error) => {
        console.error("Error:", error);
      });
      
  }, [params.id]);
  
  return (
    <>
    

    <div className="bg-slate-100 grid grid-cols-3 gap-4 p-10 shadow-inner" >
        
      <div className="bg-white rounded-xl shadow-sm shadow-slate-400 p-4" >{/*Crea un div para mostrar los detalles de un Pokémon en particular. Se le da una clase CSS y una clave única (key) para identificación.*/}

        <div className="flex flex-col justify-center">{/* Crea un div para mostrar una imagen del Pokémon. Se utiliza la URL de la imagen desde los detalles del Pokémon */}
          <h1 className="text-center text-black">{DataPokemon.name}</h1>
          <img src={Img && Img.other && Img.other["official-artwork"] && Img.other["official-artwork"].front_default} className="aspect-auto"></img>

        </div>
      </div>
    </div>


    </>
  )
}
export default Pokemon;
