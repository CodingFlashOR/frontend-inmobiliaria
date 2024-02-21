import { useParams } from 'react-router-dom'
import Layout from '../layouts/Layout'

export default function DetalleCompras () {
  const { id } = useParams()
  return (
    <Layout>
      <div>{id}</div>
    </Layout>
  )
}
