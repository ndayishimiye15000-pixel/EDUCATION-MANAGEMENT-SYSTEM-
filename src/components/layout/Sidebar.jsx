import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Users, GraduationCap, BookOpen, Calendar, CreditCard, ClipboardCheck, BarChart3, FileText, PenSquare, FolderOpen, TrendingUp, User, Award, FileDown, Utensils, X, School } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'

const adminNav = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/admin/students', label: 'Students', icon: Users },
  { to: '/admin/teachers', label: 'Teachers', icon: GraduationCap },
  { to: '/admin/classes', label: 'Classes', icon: BookOpen },
  { to: '/admin/academic-years', label: 'Academic Years', icon: Calendar },
  { to: '/admin/fees', label: 'School Fees', icon: CreditCard },
  { to: '/admin/attendance', label: 'Attendance', icon: ClipboardCheck },
  { to: '/admin/reports', label: 'Reports', icon: BarChart3 },
]
const teacherNav = [
  { to: '/teacher/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/teacher/assessments', label: 'Assessments', icon: FileText },
  { to: '/teacher/marks', label: 'Marks', icon: PenSquare },
  { to: '/teacher/resources', label: 'Resources', icon: FolderOpen },
  { to: '/teacher/attendance', label: 'Attendance', icon: ClipboardCheck },
  { to: '/teacher/performance', label: 'Performance', icon: TrendingUp },
]
const studentNav = [
  { to: '/student/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/student/profile', label: 'My Profile', icon: User },
  { to: '/student/fees', label: 'School Fees', icon: CreditCard },
  { to: '/student/assessments', label: 'Assessments', icon: FileText },
  { to: '/student/marks', label: 'My Marks', icon: Award },
  { to: '/student/report-cards', label: 'Report Cards', icon: FileDown },
  { to: '/student/feeding-card', label: 'Feeding Card', icon: Utensils },
  { to: '/student/resources', label: 'Resources', icon: BookOpen },
]
const navMap = { admin: adminNav, teacher: teacherNav, student: studentNav }

export default function Sidebar({ open, onClose }) {
  const { role } = useAuth()
  const items = navMap[role] || []
  return (
    <>
      {open && <div className="fixed inset-0 z-20 bg-black/50 lg:hidden" onClick={onClose} />}
      <aside className={`fixed inset-y-0 left-0 z-30 flex w-64 flex-col bg-blue-900 text-white transition-transform duration-300 lg:static lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex h-16 items-center justify-between px-4 border-b border-blue-800">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500">
              <School className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-sm">School<br /><span className="text-emerald-400">Manager</span></span>
          </div>
          <button onClick={onClose} className="lg:hidden p-1 rounded hover:bg-blue-800"><X className="h-5 w-5" /></button>
        </div>
        <div className="px-4 py-2">
          <span className="text-xs capitalize bg-blue-800 px-2 py-0.5 rounded-full text-blue-200">{role}</span>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 pb-4">
          <ul className="space-y-1">
            {items.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <NavLink to={to} onClick={onClose} className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive ? 'bg-emerald-500 text-white' : 'text-blue-200 hover:bg-blue-800 hover:text-white'}`}>
                  <Icon className="h-4 w-4 shrink-0" />{label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}
