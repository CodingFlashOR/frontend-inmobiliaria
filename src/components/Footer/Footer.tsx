import Icono from './Icono'
import { AlquilarIcon, ComprarIcon, ContactoIcon, HomeIcon } from './Icons'

export default function Footer () {
  return (
    <footer className='fixed bottom-0 left-0 w-full'>
      <div className='container mx-auto px-4 flex justify-between items-center gap-1 md:w-max-2/3 lg:hidden'>
        <Icono
          titulo='Home'
          icono={HomeIcon}
        />
        <Icono
          titulo='Alquiler'
          icono={AlquilarIcon}
        />
        <Icono
          titulo='Comprar'
          icono={ComprarIcon}
        />
        <Icono
          titulo='Contacto'
          icono={ContactoIcon}
        />

      </div>
    </footer>
  )
}
