import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { School, Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { loginUser } from '../../firebase/auth'
import toast from 'react-hot-toast'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !password) { toast.error('Fill in all fields'); return }
    setLoading(true)
    try {
      await loginUser(email, password)
      toast.success('Welcome back!')
    } catch {
      toast.error('Invalid email or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between bg-blue-900 p-12 text-white">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500">
            <School className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold">School Manager</span>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">Manage your school<br /><span className="text-emerald-400">smarter, not harder.</span></h1>
          <p className="text-blue-300 text-lg">A complete platform for administrators, teachers, and students.</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[['500+','Students'],['40+','Teachers'],['14','Modules']].map(([v,l]) => (
            <div key={l} className="rounded-xl bg-blue-800 p-4">
              <p className="text-2xl font-bold text-emerald-400">{v}</p>
              <p className="text-sm text-blue-300">{l}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center bg-slate-50 px-6">
        <div className="w-full max-w-md">
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-800">
              <School className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold">School Manager</span>
          </div>
          <h2 className="text-2xl font-bold mb-1">Welcome back</h2>
          <p className="text-slate-500 mb-8">Sign in to your account</p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-1.5">Email address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@school.rw" className="w-full rounded-lg border border-slate-300 pl-10 pr-4 py-2.5 text-sm focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input type={showPw ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className="w-full rounded-lg border border-slate-300 pl-10 pr-10 py-2.5 text-sm focus:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200" />
                <button type="button" onClick={() => setShowPw(v => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <button type="submit" disabled={loading} className="w-full rounded-lg bg-blue-800 py-3 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2">
              {loading && <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />}
              Sign in
            </button>
          </form>
          <p className="mt-6 text-center text-xs text-slate-400">Contact your administrator if you need access.</p>
        </div>
      </div>
    </div>
  )
}
