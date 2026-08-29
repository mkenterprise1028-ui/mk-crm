
import Sidebar from '../../components/Sidebar'
import { calculateTotalFee } from '../../lib/feeLogic'

export default function Dashboard(){
  const cards = [
    {title:'Total Customers', value:'1,250'},
    {title:'New Enquiries', value:'42'},
    {title:'Approved Forms', value:'860'},
    {title:'Pending Payments', value:'₹42.5L'},
  ]
  return (
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 p-6 bg-gray-50">
        <div className="grid grid-cols-4 gap-4 mb-6">
          {cards.map(c=>(
            <div key={c.title} className="bg-white p-5 rounded-xl shadow border">
              <p className="text-gray-500 text-sm">{c.title}</p>
              <p className="text-2xl font-bold mt-2">{c.value}</p>
            </div>
          ))}
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <h2 className="font-bold mb-4">Recent Enquiries - PMAY / MHADA</h2>
          <table className="w-full text-sm">
            <thead><tr className="text-left border-b"><th>Enquiry ID</th><th>Customer</th><th>Service</th><th>Project</th><th>Fee</th><th>Status</th></tr></thead>
            <tbody>
              <tr className="border-b"><td>ENQ-1001</td><td>सारिका सुतार</td><td>PMAY</td><td>ANP Nova</td><td>₹{calculateTotalFee('1BHK')}</td><td><span className="bg-red-100 text-red-700 px-2 py-1 rounded">Hot</span></td></tr>
              <tr><td>ENQ-1002</td><td>अमित पाटील</td><td>MHADA</td><td>Life Republic</td><td>₹{calculateTotalFee('Shop')}</td><td><span className="bg-yellow-100 px-2 py-1 rounded">Warm</span></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
