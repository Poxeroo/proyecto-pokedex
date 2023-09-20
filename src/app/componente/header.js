'use client'
import { useRouter } from "next/navigation"; // importo useRouter desde next/navigation, navigation es nuevo ya que router fue borrado

export default function header () {

  const router = useRouter(); // creo el componente router el cual utilizare para router todo
  
  return (
    
    <nav className=' bg-slate-100 p-2 flex flex-row justify-between'>
      <img src='../contenido/logo.png' className=' scale-75 md:scale-100 hover:cursor-pointer' onClick={() => router.push(`/principal`)}></img> 
      <h1 className='text-black p-2 text-xl font-bold'>By Bran Estrella</h1>
    </nav>


    
  )
}
