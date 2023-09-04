import Pokedex from 'pokedex-promise-v2';
const P = new Pokedex();

export default function nav () {
  return (
    <nav className=' bg-slate-100 flex p-2'>

      <ul className='flex flex-row flex-wrap gap-2'>
        <li><button className='text-center text-black font-sans text-lg font-bold bg-white px-3 py-1 rounded-3xl shadow-lg shadow-slate-400 transition ease-in-out delay-100 duration-75 hover:-translate-y-1 hover:scale-110' id='todos'>Todos</button></li>
        <li><button className='text-center text-black font-sans text-lg font-bold bg-normal px-3 py-1 rounded-3xl shadow-lg shadow-slate-400 transition ease-in-out delay-100 duration-75 hover:-translate-y-1 hover:scale-110 ' id='fire'>Normal</button></li>
        <li><button className='text-center text-black font-sans text-lg font-bold bg-fuego px-3 py-1 rounded-3xl shadow-lg shadow-slate-400 transition ease-in-out delay-100 duration-75 hover:-translate-y-1 hover:scale-110 ' id='fire'>Fuego</button></li>
        <li><button className='text-center text-black font-sans text-lg font-bold bg-agua px-3 py-1 rounded-3xl shadow-lg shadow-slate-400 transition ease-in-out delay-100 duration-75 hover:-translate-y-1 hover:scale-110 ' id='water'>Agua</button></li>
        <li><button className='text-center text-black font-sans text-lg font-bold bg-hierba px-3 py-1 rounded-3xl shadow-lg shadow-slate-400 transition ease-in-out delay-100 duration-75 hover:-translate-y-1 hover:scale-110' id='grass'>Hierba</button></li>
        <li><button className='text-center text-black font-sans text-lg font-bold bg-rayo px-3 py-1 rounded-3xl shadow-lg shadow-slate-400 transition ease-in-out delay-100 duration-75 hover:-translate-y-1 hover:scale-110' id='electric'>Rayo</button></li>
        <li><button className='text-center text-black font-sans text-lg font-bold bg-hielo px-3 py-1 rounded-3xl shadow-lg shadow-slate-400 transition ease-in-out delay-100 duration-75 hover:-translate-y-1 hover:scale-110' id='ice'>Hielo</button></li>
        <li><button className='text-center text-black font-sans text-lg font-bold bg-lucha px-3 py-1 rounded-3xl shadow-lg shadow-slate-400 transition ease-in-out delay-100 duration-75 hover:-translate-y-1 hover:scale-110' id='fighting'>Lucha</button></li>
        <li><button className='text-center text-black font-sans text-lg font-bold bg-veneno px-3 py-1 rounded-3xl shadow-lg shadow-slate-400 transition ease-in-out delay-100 duration-75 hover:-translate-y-1 hover:scale-110' id='poison'>Veneno</button></li>
        <li><button className='text-center text-black font-sans text-lg font-bold bg-tierra px-3 py-1 rounded-3xl shadow-lg shadow-slate-400 transition ease-in-out delay-100 duration-75 hover:-translate-y-1 hover:scale-110' id='ground'>Tierra</button></li>
        <li><button className='text-center text-black font-sans text-lg font-bold bg-volador px-3 py-1 rounded-3xl shadow-lg shadow-slate-400 transition ease-in-out delay-100 duration-75 hover:-translate-y-1 hover:scale-110' id='flying'>Volador</button></li>
        <li><button className='text-center text-black font-sans text-lg font-bold bg-psiquico px-3 py-1 rounded-3xl shadow-lg shadow-slate-400 transition ease-in-out delay-100 duration-75 hover:-translate-y-1 hover:scale-110' id='psyshic'>Psiquico</button></li>
        <li><button className='text-center text-black font-sans text-lg font-bold bg-bicho px-3 py-1 rounded-3xl shadow-lg shadow-slate-400 transition ease-in-out delay-100 duration-75 hover:-translate-y-1 hover:scale-110' id='bug'>Bicho</button></li>
        <li><button className='text-center text-black font-sans text-lg font-bold bg-roca px-3 py-1 rounded-3xl shadow-lg shadow-slate-400 transition ease-in-out delay-100 duration-75 hover:-translate-y-1 hover:scale-110' id='rock'>Roca</button></li>
        <li><button className='text-center text-black font-sans text-lg font-bold bg-fantasma px-3 py-1 rounded-3xl shadow-lg shadow-slate-400 transition ease-in-out delay-100 duration-75 hover:-translate-y-1 hover:scale-110' id='ghost'>Fantasma</button></li>
        <li><button className='text-center text-black font-sans text-lg font-bold bg-oscuridad px-3 py-1 rounded-3xl shadow-lg shadow-slate-400 transition ease-in-out delay-100 duration-75 hover:-translate-y-1 hover:scale-110' id='dark'>Oscuridad</button></li>
        <li><button className='text-center text-black font-sans text-lg font-bold bg-dragon px-3 py-1 rounded-3xl shadow-lg shadow-slate-400 transition ease-in-out delay-100 duration-75 hover:-translate-y-1 hover:scale-110' id='dragon'>Dragon</button></li>
        <li><button className='text-center text-black font-sans text-lg font-bold bg-acero px-3 py-1 rounded-3xl shadow-lg shadow-slate-400 transition ease-in-out delay-100 duration-75 hover:-translate-y-1 hover:scale-110' id='steel'>Acero</button></li>
        <li><button className='text-center text-black font-sans text-lg font-bold bg-hada px-3 py-1 rounded-3xl shadow-lg shadow-slate-400 transition ease-in-out delay-100 duration-75 hover:-translate-y-1 hover:scale-110' id='fairy'>Hada</button></li>
        
      </ul>

    </nav>

  )
}
