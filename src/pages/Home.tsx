import Layout from '../layouts/Layout'
import Carousel from '../components/Home/Carousel/Carousel'
import InfoHome from '../components/Home/MainBanner/MainBanner'
import InfoCards from '../components/Home/InfoCards/InfoCards'

export default function Home () {
  return (
    <Layout>
      <Carousel />
      <InfoHome />
      <div>
        <InfoCards
          Titulo='Alquiler' Texto='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae tenetur dignissimos consequuntur beatae, impedit dolor minus porro perferendis! Optio, dignissimos libero aut recusandae repellat in dicta eos modi exercitationem explicabo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae tenetur dignissimos consequuntur beatae, impedit dolor minus porro perferendis! Optio, dignissimos libero aut recusandae repellat in dicta eos modi exercitationem explicabo.' Propiedades={[
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
        />
      </div>

    </Layout>
  )
}
