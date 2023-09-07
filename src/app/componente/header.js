import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

export default function header () {
  return (
    
    <nav className=' bg-slate-100 p-2 flex flex-row justify-between'>
      <img src='./contenido/logo.png' className=' scale-75 md:scale-100'></img> 
      <h1 className='text-black p-2 text-xl font-bold'>By Bran Estrella</h1>
    </nav>


    
  )
}
