import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [role, setRole] = useState("student")
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate(`/${role}`)
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">School Login</h2>
        <select
          className="w-full border p-2 rounded mb-4"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="teacher">Teacher</option>
          <option value="student">Student</option>
        </select>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Login
        </button>
      </div>
    </div>
  )
}
