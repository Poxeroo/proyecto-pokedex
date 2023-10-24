import './globals.css'
import { Inter } from 'next/font/google'
import Header from './componente/header'
import Footer from './componente/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pokedex',
  description: 'Pokedex de Bran Estrella',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>

        <div className=' min-h-screen flex flex-col justify-between bg-slate-100'>

        <Header/>

        {children}

        <Footer/>

        </div>

        </body>

    </html>
  )
}
