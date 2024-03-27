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

      <div className=''>
        <div className=''>
          <div className=''>

            {SvgContentChico && <SvgContentChico />}
            <h2 className=''>{Titulo}</h2>
          </div>

          <h2 className=''>{Titulo}</h2>
          <div className=''>
            <div>
              {SvgContentGrande && <SvgContentGrande />}
            </div>

            <p className=''>{Texto}</p>
          </div>
          <p className=''>{Texto}</p>
        </div>

        <div className=''>
          {
        Propiedades.map((propiedad) => (
          <div key={propiedad.id} className=''>
            <div className=''>
              <h3 className=''>{propiedad.Nombre}</h3>
              <div className=''>
                <h4 className=''>Zona: {propiedad.Zona}</h4>
                <h4>Dimensiones: {propiedad.Dimensiones}</h4>
                {
        propiedad.AlquilerMensual ? (<h4> Alquiler Mensual: {propiedad.AlquilerMensual}</h4>) : (<h4> Precio De Compra: {propiedad.PrecioDeCompra}</h4>)
      }
              </div>
              <a className='' href='/'>leer mas</a>
            </div>
            <div className=''>
              <img className='l' src={propiedad.Imagen} alt='' />
            </div>
          </div>
        ))
      }
        </div>

      </div>
    </>
  )
}
