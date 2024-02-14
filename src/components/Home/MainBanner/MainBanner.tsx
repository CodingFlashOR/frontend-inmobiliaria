export default function InfoHome () {
  return (
    <div>
      <div className='w-full flex flex-col lg:flex-row lg:hidden sm:w-96 sm:m-auto h-52 sm:h-72 mt-5 text-left sm:mt-14 p-2 '>

        <img src='https://media.istockphoto.com/id/495983998/es/foto/entregar-las-llaves-de-la-casa.jpg?s=612x612&w=0&k=20&c=qr5tiP6TmTuxu_U22BRzdJeadomiSFyP6hm3zpIMSSU=' alt='Persona recibiendo unas llaves' className='w-full rounded-sm h-full lg:hidden' />

        <div className='p-2 lg:hidden'>
          <h2 className=' font-serif text-md sm:text-lg font-bold'>
            Tu hogar, tu estilo, nuestra confianza
          </h2>
          <p className='font-serif text-xs sm:text-base'>
            Negocios inmobiliarios personalizados
          </p>
          <div className='mt-2 flex flex-col gap-2'>
            <p className='text-xs sm:text-sm'>
              En el ámbito inmobiliario, nos destacamos como tu aliado de confianza. Con décadas de experiencia, proporcionamos soluciones personalizadas y seguras.
            </p>
            <p className='text-xs sm:text-sm'>
              Nuestra sólida reputación se construye sobre la transparencia, integridad y un compromiso constante con la satisfacción del cliente. Más que ofrecerte simples servicios, te brindamos un acompañamiento profesional y cercano en cada etapa de tu viaje.
            </p>
            <p className='text-xs sm:text-sm'>
              Deposita tu confianza en nosotros para recibir orientación experta.
            </p>
          </div>
        </div>
      </div>

      <div className='w-full lg:flex lg:flex-row hidden justify-center m-auto mt-5 text-left sm:mt-14 p-2 '>
        <div className='p-2 hidden lg:block w-96 flex-1'>
          <h2 className='font-serif text-2xl font-bold'>
            Tu hogar, tu estilo, nuestra confianza
          </h2>
          <p className='font-serif text-xl mb-4'>
            Negocios inmobiliarios personalizados
          </p>
          <div className='mt-2 flex flex-col gap-2'>
            <p className='xl:text-lg text-base'>
              En el ámbito inmobiliario, nos destacamos como tu aliado de confianza. Con décadas de experiencia, proporcionamos soluciones personalizadas y seguras.
            </p>
            <p className='xl:text-lg text-base'>
              Nuestra sólida reputación se construye sobre la transparencia, integridad y un compromiso constante con la satisfacción del cliente. Más que ofrecerte simples servicios, te brindamos un acompañamiento profesional y cercano en cada etapa de tu viaje.
            </p>
            <p className='xl:text-lg text-base'>
              Deposita tu confianza en nosotros para recibir orientación experta.
            </p>
          </div>
        </div>
        <img src='https://media.istockphoto.com/id/495983998/es/foto/entregar-las-llaves-de-la-casa.jpg?s=612x612&w=0&k=20&c=qr5tiP6TmTuxu_U22BRzdJeadomiSFyP6hm3zpIMSSU=' alt='Persona recibiendo unas llaves' className=' w-2/4 rounded-xl h-96 lg:block hidden ' />

      </div>
    </div>

  )
}
