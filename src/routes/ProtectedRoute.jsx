import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function ProtectedRoute({ allowedRoles, children }) {
  const { user, role, loading } = useAuth()
  if (loading) return <div className="flex h-screen items-center justify-center"><p>Loading...</p></div>
  if (!user) return <Navigate to="/login" replace />
  if (allowedRoles && !allowedRoles.includes(role)) return <Navigate to="/unauthorized" replace />
  return children
}
