import Icono from './Icono'
import { AlquilarIcon, ComprarIcon, ContactoIcon, HomeIcon, FacebookIcon, WhatsappIcon, InstagramIcon } from './Icons'

export default function Footer () {
  return (
    <footer className='fixed bottom-0 left-0 w-full'>
      <div className='container mx-auto px-4 flex justify-between items-center gap-1 md:w-max-2/3 lg:hidden bg-white-200 backdrop-blur-lg'>
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
      <div className='lg:flex flex-row h-20 bg-amarillo justify-between  px-14 items-center hidden '>
        <div className='text-xl w-40 '>
          <p>Dirección</p>
          <p>Teléfono</p>
        </div>
        <div className='flex gap-4 items-center justify-center'>
          <FacebookIcon />
          <WhatsappIcon />
          <InstagramIcon />
        </div>
        <h3 className='xl:text-4xl text-2xl font-serif font-bold w-40 text-amarillo-oscuro'>Inmobiliaria</h3>
      </div>
    </footer>
  )
}
