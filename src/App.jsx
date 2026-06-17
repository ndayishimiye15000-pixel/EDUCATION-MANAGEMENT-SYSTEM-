import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import AdminDashboard from './pages/admin/Dashboard'
import TeacherDashboard from './pages/teacher/Dashboard'
import StudentDashboard from './pages/student/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
