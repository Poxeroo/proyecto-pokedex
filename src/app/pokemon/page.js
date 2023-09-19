'use client'
import { useSearchParams } from 'next/navigation';
import ComponentePokedex from '../componente/ComponentePokedex';

export default function Principal() {

  const buscador = useSearchParams();
  const pokemon = buscador.get('pokemonList');
  return (
    <>
    
    

    <div className='bg-slate-100 min-h-screen'>
    <h1 className='text-black'>hola</h1>
    


      
    </div>
    



    
    </>
  )
}
