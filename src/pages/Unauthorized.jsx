import { useNavigate } from 'react-router-dom'
export default function Unauthorized() {
  const navigate = useNavigate()
  return (
    <div className="flex h-screen items-center justify-center flex-col gap-4">
      <h1 className="text-2xl font-bold">Access Denied</h1>
      <button onClick={() => navigate(-1)} className="px-4 py-2 bg-blue-600 text-white rounded-lg">Go back</button>
    </div>
  )
}
