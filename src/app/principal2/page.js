'use client'
import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();
import Nav from '../componente/nav';

import mostrarPokedex from '../componente/MostrarPokedex2';

import React, { useEffect } from 'react';

export default function Principal() {

  useEffect(() => {
    <script type='module' src='.\src\app\componente\pokedex.js'></script>
  }, []); // El segundo argumento [] indica que esto se ejecutará solo una vez al cargar el componente

  return (
    <>
    
    <Nav/>

    <div id='listaPokemon'>
    
    </div>
    



    
    </>
  )
}
