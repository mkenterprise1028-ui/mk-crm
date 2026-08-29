import Link from 'next/link'

export default function Home(){
  return (
    <div style={{display:'flex',minHeight:'100vh',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'16px'}}>
      <h1 style={{fontSize:'28px',fontWeight:'bold'}}>MK ENTERPRISES</h1>
      <p>CRM is Live ✅</p>
      <Link href="/dashboard" style={{background:'black',color:'white',padding:'10px 20px',borderRadius:'8px',textDecoration:'none'}}>
        Go to Dashboard
      </Link>
    </div>
  )
}
