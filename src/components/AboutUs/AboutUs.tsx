export default function AboutUs () {
  return (

    <div className='mt-8 flex flex-col gap-6 p-4 w-full max-w-80 lg-max-w-none m-auto md:w-1/2 md:m-auto md:mt-8 lg:w-auto'>
      <h3 className='font-serif text-3xl lg:text-4xl xl:text-6xl text-amarillo-oscuro font-medium '>Nosotros</h3>

      <div className='flex flex-col lg:flex-row justify-between lg:gap-10 lg:w-auto'>
        <div className='flex flex-col gap-6 lg:w-1/2 lg:text-base xl:text-2xl'>
          <p>
            Desde Inmobiliaria, nos distinguimos por nuestra transparencia y empatía en cada interacción, creando conexiones genuinas con nuestros clientes. Nuestro equipo está compuesto por profesionales comprometidos, guiados por la búsqueda constante de la excelencia.
          </p>
          <p>
            Nuestra ética de trabajo, arraigada en la integridad, confianza y entrega excepcional, es la columna vertebral de nuestra firma. Compartamos un viaje personalizado hacia la realización de tus sueños inmobiliarios y la construcción de tu historia de vida.
          </p>
        </div>

        <div className='lg:m-auto flex flex-col items-center lg:items-end'>
          <img className='rounded-lg lg:w-3/4 xl:w-full' src='https://img.freepik.com/foto-gratis/grupo-personas-trabajando-plan-negocios-oficina_1303-15861.jpg' alt='Gente del equipo' />
          <div className='mt-4 flex flex-col gap-16 items-start lg:flex-row lg:items-center lg:w-4/5 xl:w-full'>
            <h3 className='font-serif text-3xl text-amarillo-oscuro font-medium lg:text-4xl xl:text-6xl lg:ml-5 xl:ml-0'>Misión</h3>
            <p className='lg:text-base xl:text-3xl'>Ofrecer soluciones excepcionales, personalizadas y confiables.</p>
          </div>
        </div>

      </div>

    </div>
  )
}
