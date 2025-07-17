export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Página no encontrada</p>
      <a href="/" className="text-blue-400 hover:underline">
        Regresar al inicio
      </a>
    </div>
  )
}