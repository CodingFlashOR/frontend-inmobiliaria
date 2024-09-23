import useAuthStore from '../context/authStore'

export default function Home () {
  const { logout } = useAuthStore()
  return (
    <>
      <h1>Home</h1>
      <button onClick={logout}>Cerrar sesión</button>
    </>
  )
}
