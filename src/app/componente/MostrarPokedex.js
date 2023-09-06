'use client'
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { ReactDOM } from "react";


export default function mostrarPokedex(){

    

    let [NumPokemon, setNumPokemon] = useState();
    let [IdPokemon, setIdPokemon] = useState("");
    let [NamePokemon, setNamePokemon] = useState("");
    let [ImgPokemon, setImgPokemon] = useState("");

    const contenido = `<div className=" bg-white rounded-xl shadow-sm shadow-slate-400 p-2">

        <div className="flex justify-center">

        <img src=${ImgPokemon} className=''></img>

        </div>*

        <div className="flex flex-row gap-x-3 justify-center py-2">

        <p className=" text-black bg-slate-300 rounded-full text-lg font-semibold px-3">${IdPokemon}</p>
        <h3 className=" text-black text-xl font-extrabold">${NamePokemon}</h3>

        </div>



        </div>`;

    function getPokemon(){
        for (NumPokemon = 1; NumPokemon <= 1; NumPokemon++) {
            
            //fetch(`https://pokeapi.co/api/v2/pokemon/${x}/`) //aqui le pasola url de donde buscara la informacion como los pokemon eestan por id le paso la variable x que simulara el id de cada pokemon
            //.then(resultado=>resultado.json()) //el resultado de la busqueda anterior lo convertire en un json
            //.then(data => console.log(data.name)) // el resultado se convierte en data para ser utilizada

            getPokemonData(NumPokemon);
        

        }
    }

    async function getPokemonData(x){

        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${x}/`)
        const data = await respuesta.json()
        setIdPokemon(data.id);
        setNamePokemon(data.name);
        setImgPokemon(data.sprites.other["official-artwork"].front_default);     
        

        
    }



    /*function MostrarPokemon(){


        <div className=' bg-slate-100 grid grid-cols-3 gap-4 p-8 shadow-inner'>

                <div className=' bg-white rounded-xl shadow-sm shadow-slate-400 p-2'>

                <div className='flex justify-center'>

                <img src={ImgPokemon} className=''></img>

                </div>*

                <div className='flex flex-row gap-x-3 justify-center py-2'>

                <p className=' text-black bg-slate-300 rounded-full text-lg font-semibold px-3'>{IdPokemon}</p>
                <h3 className=' text-black text-xl font-extrabold'>{NamePokemon}</h3>

        </div>
        
    }*/


    useEffect(()=>{

        getPokemon();
        
    }), [NumPokemon];

    return(

            <>
            <div className=' bg-slate-100 grid grid-cols-3 gap-4 p-8 shadow-inner' id="root">

                <div dangerouslySetInnerHTML={{ __html: contenido }}></div>

            </div>
            </>

    );
}