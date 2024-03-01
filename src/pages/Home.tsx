import Layout from '../layouts/Layout'
import Carousel from '../components/Carousel/Carousel'
import InfoHome from '../components/MainBanner/MainBanner'
import InfoCards from '../components/InfoCards/InfoCards'
import Nosotros from '../components/Nosotros/Nosotros'

const MiIconoAlquilerGrande = () => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 50 54' strokeWidth='1.5' stroke='#DCB416' className='w-40' style={{ filter: 'drop-shadow(1px 0px 0px rgba(220, 180, 22, 0.1))' }}>
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
)

const MiIconoAlquilerChico = () => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 50 54' strokeWidth='1.5' stroke='#DCB416' className='w-12 h-12' style={{ filter: 'drop-shadow(1px 0px 0px rgba(220, 180, 22, 0.1))' }}>
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
)

const MiIconoCompraGrande = () => (
  <svg className='w-40' viewBox='0 0 49 58' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g filter='url(#filter0_d_308_1789)'>
      <path d='M26.9766 5L39.0788 17.075V45H9.01126V5H26.9766ZM29.0563 0H9.01126C6.25507 0 4 2.25 4 5V45C4 47.75 6.25507 50 9.01126 50H39.0788C41.835 50 44.0901 47.75 44.0901 45V15L29.0563 0ZM31.5619 22.5H21.5394V25H29.0563C30.4344 25 31.5619 26.125 31.5619 27.5V35C31.5619 36.375 30.4344 37.5 29.0563 37.5H26.5507V40H21.5394V37.5H16.5282V32.5H26.5507V30H19.0338C17.6557 30 16.5282 28.875 16.5282 27.5V20C16.5282 18.625 17.6557 17.5 19.0338 17.5H21.5394V15H26.5507V17.5H31.5619V22.5Z' fill='white' />
    </g>
    <defs>
      <filter id='filter0_d_308_1789' x='0' y='0' width='48.0901' height='58' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
        <feOffset dy='4' />
        <feGaussianBlur stdDeviation='2' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix type='matrix' values='0 0 0 0 0.65098 0 0 0 0 0.529412 0 0 0 0 0.0627451 0 0 0 1 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_308_1789' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_308_1789' result='shape' />
      </filter>
    </defs>
  </svg>
)

const MiIconoCompraChico = () => (
  <svg className='w-12 h-12' viewBox='0 0 49 58' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <g filter='url(#filter0_d_308_1789)'>
      <path d='M26.9766 5L39.0788 17.075V45H9.01126V5H26.9766ZM29.0563 0H9.01126C6.25507 0 4 2.25 4 5V45C4 47.75 6.25507 50 9.01126 50H39.0788C41.835 50 44.0901 47.75 44.0901 45V15L29.0563 0ZM31.5619 22.5H21.5394V25H29.0563C30.4344 25 31.5619 26.125 31.5619 27.5V35C31.5619 36.375 30.4344 37.5 29.0563 37.5H26.5507V40H21.5394V37.5H16.5282V32.5H26.5507V30H19.0338C17.6557 30 16.5282 28.875 16.5282 27.5V20C16.5282 18.625 17.6557 17.5 19.0338 17.5H21.5394V15H26.5507V17.5H31.5619V22.5Z' fill='white' />
    </g>
    <defs>
      <filter id='filter0_d_308_1789' x='0' y='0' width='48.0901' height='58' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha' />
        <feOffset dy='4' />
        <feGaussianBlur stdDeviation='2' />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix type='matrix' values='0 0 0 0 0.65098 0 0 0 0 0.529412 0 0 0 0 0.0627451 0 0 0 1 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_308_1789' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_308_1789' result='shape' />
      </filter>
    </defs>
  </svg>
)

export default function Home () {
  return (
    <Layout>
      <Carousel />
      <InfoHome />
      <div className='lg:mb-20 mb-5'>
        <InfoCards
          Titulo='Alquiler' Texto='Explora nuestras exclusivas propiedades de alquiler, diseñadas para adaptarse a tu estilo de vida. Desde departamentos urbanos hasta hogares espaciosos, cada opción refleja nuestro compromiso con la comodidad y la calidad. Experimenta un proceso sin complicaciones con nuestra guía personalizada, donde la claridad y la confiabilidad convergen para hacer de tu búsqueda de alquiler una experiencia fácil y satisfactoria.' Propiedades={[
            {
              Nombre: 'Departamento 1',
              Zona: 'Coso',
              Dimensiones: 'dasdsa',
              AlquilerMensual: 200,
              id: 1,
              Imagen: 'https://arquitectopablorestrepo.com/wp-content/uploads/2022/03/Dise%C3%B1o-casa-familiar-el-bambu-3-800x600.jpg'
            },
            {
              Nombre: 'Departamento 2',
              Zona: 'Coso',
              Dimensiones: 'dasdsa',
              AlquilerMensual: 200,
              id: 1,
              Imagen: 'https://arquitectopablorestrepo.com/wp-content/uploads/2022/03/Dise%C3%B1o-casa-familiar-el-bambu-3-800x600.jpg'
            },
            {
              Nombre: 'Departamento 3',
              Zona: 'Coso',
              Dimensiones: 'dasdsa',
              AlquilerMensual: 200,
              id: 1,
              Imagen: 'https://arquitectopablorestrepo.com/wp-content/uploads/2022/03/Dise%C3%B1o-casa-familiar-el-bambu-3-800x600.jpg'
            }
          ]}
          SvgContentChico={MiIconoAlquilerChico}
          SvgContentGrande={MiIconoAlquilerGrande}
        />
        <InfoCards
          Titulo='Comprar' Texto='Descubre la experiencia de compra de viviendas con nosotros, donde cada propiedad es una puerta a tu futuro. Nuestro proceso intuitivo y personalizado te guía hacia la elección perfecta. Incluyendo desde departamentos modernos hasta elegantes residencias, cada elección refleja nuestro compromiso con la calidad y la comodidad de nuestros clientes. Haz de tu búsqueda de hogar una travesía emocionante y sin complicaciones con nuestra orientación experta.' Propiedades={[
            {
              Nombre: 'Departamento 1',
              Zona: 'Coso',
              Dimensiones: 'dasdsa',
              PrecioDeCompra: 200,
              id: 1,
              Imagen: 'https://arquitectopablorestrepo.com/wp-content/uploads/2022/03/Dise%C3%B1o-casa-familiar-el-bambu-3-800x600.jpg'
            },
            {
              Nombre: 'Departamento 2',
              Zona: 'Coso',
              Dimensiones: 'dasdsa',
              PrecioDeCompra: 200,
              id: 1,
              Imagen: 'https://arquitectopablorestrepo.com/wp-content/uploads/2022/03/Dise%C3%B1o-casa-familiar-el-bambu-3-800x600.jpg'
            },
            {
              Nombre: 'Departamento 3',
              Zona: 'Coso',
              Dimensiones: 'dasdsa',
              PrecioDeCompra: 200,
              id: 1,
              Imagen: 'https://arquitectopablorestrepo.com/wp-content/uploads/2022/03/Dise%C3%B1o-casa-familiar-el-bambu-3-800x600.jpg'
            }
          ]}
          SvgContentChico={MiIconoCompraChico}
          SvgContentGrande={MiIconoCompraGrande}
        />
        <Nosotros />
      </div>

    </Layout>
  )
}
