
export default function Sidebar(){
  const menu = ['🏠 Dashboard','👥 Customers','📋 Enquiry Form','🏡 MHADA Forms','🏘 PMAY Forms','📄 Documents','💰 Payments','📞 Call Logs','📊 Reports','⚙ Settings']
  return (
    <div className="w-64 bg-slate-900 text-white p-4 min-h-screen">
      <h1 className="font-bold text-xl mb-6">MK ENTERPRISES CRM</h1>
      <ul className="space-y-3">{menu.map(m=><li key={m} className="p-2 hover:bg-slate-800 rounded cursor-pointer">{m}</li>)}</ul>
    </div>
  )
}
