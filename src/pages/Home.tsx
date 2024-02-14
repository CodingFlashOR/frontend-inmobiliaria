import Layout from '../layouts/Layout'
import Carousel from '../components/Home/Carousel/Carousel'
import InfoHome from '../components/Home/MainBanner/MainBanner'

export default function Home () {
  return (
    <Layout>
      <Carousel />
      <InfoHome />
    </Layout>
  )
}
