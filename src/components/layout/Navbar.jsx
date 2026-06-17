import { useState } from 'react'
import { Menu, Sun, Moon, LogOut, ChevronDown, Bell } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { useTheme } from '../../contexts/ThemeContext'
import { logoutUser } from '../../firebase/auth'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function Navbar({ onMenuClick }) {
  const { user, role } = useAuth()
  const { dark, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  const handleLogout = async () => {
    await logoutUser()
    navigate('/login')
    toast.success('Logged out')
  }

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-4 dark:border-slate-800 dark:bg-slate-900">
      <button onClick={onMenuClick} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden">
        <Menu className="h-5 w-5" />
      </button>
      <div className="flex items-center gap-2 ml-auto">
        <button onClick={toggleTheme} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
          {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
        <button className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800">
          <Bell className="h-5 w-5" />
        </button>
        <div className="relative">
          <button onClick={() => setOpen(o => !o)} className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-800 text-xs font-bold text-white">
              {user?.email?.[0]?.toUpperCase()}
            </div>
            <span className="hidden sm:block text-sm text-slate-700 dark:text-slate-300 max-w-[120px] truncate">{user?.email}</span>
            <ChevronDown className="h-4 w-4 text-slate-400" />
          </button>
          {open && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
              <div className="absolute right-0 top-full z-20 mt-1 w-48 rounded-xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800">
                <div className="px-4 py-2.5 border-b border-slate-100 dark:border-slate-700">
                  <p className="text-xs text-slate-400">Signed in as</p>
                  <p className="text-sm font-medium truncate dark:text-white">{user?.email}</p>
                  <span className="text-xs capitalize text-emerald-600">{role}</span>
                </div>
                <button onClick={handleLogout} className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                  <LogOut className="h-4 w-4" />Sign out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
