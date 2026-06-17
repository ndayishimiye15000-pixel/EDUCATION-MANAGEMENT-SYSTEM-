export default function Button({ children, variant = 'primary', size = 'md', className = '', loading = false, ...props }) {
  const v = { primary: 'bg-blue-800 hover:bg-blue-700 text-white', secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-700', danger: 'bg-red-600 hover:bg-red-500 text-white' }
  const s = { sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2 text-sm', lg: 'px-6 py-3 text-base' }
  return (
    <button {...props} disabled={props.disabled || loading} className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors disabled:opacity-50 ${v[variant]} ${s[size]} ${className}`}>
      {loading && <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />}
      {children}
    </button>
  )
}
