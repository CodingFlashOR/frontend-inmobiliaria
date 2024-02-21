interface Propiedad {
  Nombre: string;
  Zona: string;
  Dimensiones: string;
  AlquilerMensual?: number;
  PrecioDeCompra?: number;
  id: number;
  Imagen: string;
}

interface InfoCardsProps {
  Titulo: string;
  Texto: string;
  Propiedades: Propiedad[];
}

export default function InfoCards ({ Titulo, Texto, Propiedades }: InfoCardsProps) {
  return (
    <>
      <style>
        {`
        @media (min-width: 1024px) {
          .lg-max-w-none {
            max-width: none;
          }
        }
      `}
      </style>

      <div className='bg-amarillo-500/30 m-auto rounded-xl p-2 w-full max-w-80 lg-max-w-none container flex lg:w-full flex-col lg:flex-col sm:w-96 sm:m-auto mt-5 text-left sm:mt-14'>
        <div className='flex flex-col justify-end lg:flex-col lg:p-6'>
          <div className='flex items-end m-2 lg:hidden '>
            <svg
              xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 50 54' strokeWidth='1.5' stroke='#DCB416' className=' w-12 h-12' style={{ filter: 'drop-shadow(1px 0px 0px rgba(220, 180, 22, 0.1))' }}
            >
              <g filter='url(#filter0_d_308_1602)'>
                <path d='M35.4166 25C29.6666 25 25 29.6667 25 35.4167C25 41.1667 29.6666 45.8333 35.4166 45.8333C41.1666 45.8333 45.8333 41.1667 45.8333 35.4167C45.8333 29.6667 41.1666 25 35.4166 25ZM38.8541 40.3125L34.375 35.8333V29.1667H36.4583V34.9792L40.3125 38.8333L38.8541 40.3125ZM37.5 6.25001H30.875C30 3.83334 27.7083 2.08334 25 2.08334C22.2916 2.08334 20 3.83334 19.125 6.25001H12.5C10.2083 6.25001 8.33331 8.12501 8.33331 10.4167V41.6667C8.33331 43.9583 10.2083 45.8333 12.5 45.8333H25.2291C24 44.6458 23 43.2292 22.2708 41.6667H12.5V10.4167H16.6666V16.6667H33.3333V10.4167H37.5V21C38.9791 21.2083 40.375 21.6458 41.6666 22.25V10.4167C41.6666 8.12501 39.7916 6.25001 37.5 6.25001ZM25 10.4167C23.8541 10.4167 22.9166 9.47918 22.9166 8.33334C22.9166 7.18751 23.8541 6.25001 25 6.25001C26.1458 6.25001 27.0833 7.18751 27.0833 8.33334C27.0833 9.47918 26.1458 10.4167 25 10.4167Z' fill='white' />
              </g>
              <defs>
                <filter id='filter0_d_308_1602' x='4.33331' y='2.08334' width='45.5' height='51.75' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
                  <feFlood flood-opacity='0' result='BackgroundImageFix' />
                  <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                  <feOffset dy='4' />
                  <feGaussianBlur stdDeviation='2' />
                  <feComposite in2='hardAlpha' operator='out' />
                  <feColorMatrix type='matrix' values='0 0 0 0 0.65098 0 0 0 0 0.529412 0 0 0 0 0.0627451 0 0 0 1 0' />
                  <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_308_1602' />
                  <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_308_1602' result='shape' />
                </filter>
              </defs>
            </svg>

            <h2 className='font-serif text-2xl text-amarillo-oscuro font-medium'>{Titulo}</h2>
          </div>

          <h2 className='font-serif text-5xl text-amarillo-oscuro font-medium hidden lg:block'>{Titulo}</h2>
          <div className='lg:flex flex-row gap-6 hidden'>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 50 54' strokeWidth='1.5' stroke='#DCB416' className=' w-40' style={{ filter: 'drop-shadow(1px 0px 0px rgba(220, 180, 22, 0.1))' }}
              >
                <g filter='url(#filter0_d_308_1602)'>
                  <path d='M35.4166 25C29.6666 25 25 29.6667 25 35.4167C25 41.1667 29.6666 45.8333 35.4166 45.8333C41.1666 45.8333 45.8333 41.1667 45.8333 35.4167C45.8333 29.6667 41.1666 25 35.4166 25ZM38.8541 40.3125L34.375 35.8333V29.1667H36.4583V34.9792L40.3125 38.8333L38.8541 40.3125ZM37.5 6.25001H30.875C30 3.83334 27.7083 2.08334 25 2.08334C22.2916 2.08334 20 3.83334 19.125 6.25001H12.5C10.2083 6.25001 8.33331 8.12501 8.33331 10.4167V41.6667C8.33331 43.9583 10.2083 45.8333 12.5 45.8333H25.2291C24 44.6458 23 43.2292 22.2708 41.6667H12.5V10.4167H16.6666V16.6667H33.3333V10.4167H37.5V21C38.9791 21.2083 40.375 21.6458 41.6666 22.25V10.4167C41.6666 8.12501 39.7916 6.25001 37.5 6.25001ZM25 10.4167C23.8541 10.4167 22.9166 9.47918 22.9166 8.33334C22.9166 7.18751 23.8541 6.25001 25 6.25001C26.1458 6.25001 27.0833 7.18751 27.0833 8.33334C27.0833 9.47918 26.1458 10.4167 25 10.4167Z' fill='white' />
                </g>
                <defs>
                  <filter id='filter0_d_308_1602' x='4.33331' y='2.08334' width='45.5' height='51.75' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
                    <feFlood flood-opacity='0' result='BackgroundImageFix' />
                    <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
                    <feOffset dy='4' />
                    <feGaussianBlur stdDeviation='2' />
                    <feComposite in2='hardAlpha' operator='out' />
                    <feColorMatrix type='matrix' values='0 0 0 0 0.65098 0 0 0 0 0.529412 0 0 0 0 0.0627451 0 0 0 1 0' />
                    <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_308_1602' />
                    <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_308_1602' result='shape' />
                  </filter>
                </defs>
              </svg>
            </div>

            <p className='text-xs text-center mt-4 lg:text-xl lg:text-left'>{Texto}</p>
          </div>
          <p className='text-xs text-center px-8 mt-4 lg:text-xl  lg:text-left lg:hidden'>{Texto}</p>
        </div>

        <div className='flex gap-2 flex-col lg:flex-row w-full items-center  justify-around'>
          {
        Propiedades.map((propiedad) => (
          <div key={propiedad.id} className='bg-white flex text-md justify-between lg:w-62 mt-5 lg:mt-10'>
            <div className='px-4 py-2 flex-grow flex flex-col justify-between'>
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
