import Icono from './Icono'
import { AlquilarIcon, ComprarIcon, ContactoIcon, HomeIcon, FacebookIcon, WhatsappIcon, InstagramIcon } from './Icons'

export default function NavBar () {
  return (
    <footer className=''>
      <div className=''>
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
      <div className=''>
        <div className=''>
          <p>Dirección</p>
          <p>Teléfono</p>
        </div>
        <div className=''>
          <FacebookIcon />
          <WhatsappIcon />
          <InstagramIcon />
        </div>
        <h3 className=''>Inmobiliaria</h3>
      </div>
    </footer>
  )
}
