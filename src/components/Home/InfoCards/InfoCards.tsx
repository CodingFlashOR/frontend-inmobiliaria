interface Propiedad {
  Nombre: string;
  Zona: string;
  Dimensiones: string;
  AlquilerMensual?: number;
  PrecioDeCompra?: number;
  id: number;
  Imagen: string;
}

interface SvgProps {
  // Add necessary props your SVG component requires
  // e.g., size, color, etc.
}

interface InfoCardsProps {
  Titulo: string;
  Texto: string;
  Propiedades: Propiedad[];
  SvgContentChico: React.ComponentType<SvgProps>;
  SvgContentGrande: React.ComponentType<SvgProps>;
}

export default function InfoCards ({ Titulo, Texto, Propiedades, SvgContentChico, SvgContentGrande }: InfoCardsProps) {
  return (
    <>
      <style>
        {`
        @media (min-width: 800px) {
          .lg-max-w-none {
            max-width: none;
          }
        }
      `}
      </style>

      <div className='bg-amarillo-500/30 m-auto rounded-xl py-6 lg:p-8 w-full max-w-80 lg-max-w-none container flex md:w-4/5g lg:w-full flex-col lg:flex-col sm:w-96 sm:m-auto mt-5 text-left sm:mt-14'>
        <div className='flex flex-col justify-end lg:flex-col lg:p-6'>
          <div className='flex items-end m-2 lg:hidden '>

            {SvgContentChico && <SvgContentChico />}
            <h2 className='font-serif text-2xl text-amarillo-oscuro font-medium'>{Titulo}</h2>
          </div>

          <h2 className='font-serif text-5xl text-amarillo-oscuro font-medium hidden lg:block'>{Titulo}</h2>
          <div className='lg:flex flex-row gap-6 hidden'>
            <div>
              {SvgContentGrande && <SvgContentGrande />}
            </div>

            <p className='text-xs text-center mt-4 lg:text-xl lg:text-left'>{Texto}</p>
          </div>
          <p className='text-xs text-center px-8 mt-4 lg:text-xl  lg:text-left lg:hidden'>{Texto}</p>
        </div>

        <div className='flex gap-2 flex-col lg:flex-row w-full items-center  justify-around'>
          {
        Propiedades.map((propiedad) => (
          <div key={propiedad.id} className='bg-white flex text-md justify-between shadow-lg lg:w-62 mt-5 lg:mt-10 xl:w-1/4'>
            <div className='px-4 lg:py-2 xl:py-1 flex-grow flex flex-col justify-between'>
              <h3 className='text-lg font-serif font-bold lg:text-sm'>{propiedad.Nombre}</h3>
              <div className='text-xs'>
                <h4 className=''>Zona: {propiedad.Zona}</h4>
                <h4>Dimensiones: {propiedad.Dimensiones}</h4>
                {
        propiedad.AlquilerMensual ? (<h4> Alquiler Mensual: {propiedad.AlquilerMensual}</h4>) : (<h4> Precio De Compra: {propiedad.PrecioDeCompra}</h4>)
      }
              </div>
              <a className='text-xs' href='/'>leer mas</a>
            </div>
            <div className='w-32 h-32 lg:w-auto ml-auto'>
              <img className='w-full h-full' src={propiedad.Imagen} alt='' />
            </div>
          </div>
        ))
      }
        </div>

      </div>
    </>
  )
}
