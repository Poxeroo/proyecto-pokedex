import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();
import Nav from '../componente/nav';

import mostrarPokedex from '../componente/pokedex';

export default function principal () {

  return (
    <>
    
    <Nav/>

    <div id='listaPokemon'>
    
    </div>
    



    <script src='../componente/pokedex'></script>
    </>
  )
}
