import './App.css'
import { Header } from './components/header'
import { Home } from './components/home'
import { Register } from './components/register'
import { Footer } from './components/footer'
import { Siteroutes } from './components/siteroutes'
import { useEffect, useState } from 'react'
import { AdminHeader } from './components/adminheader'
import { Logincontext } from './components/logincontext'

function App() {
 const [usertype,setusertype]=useState("User")
 const[loggedin,setloggedin]=useState(false)
 const[userid,setuserid]=useState("")


useEffect(()=>{
  const rolefind=JSON.parse(localStorage.getItem("user"))
  if(rolefind){
    if(rolefind.userrole=="User"){
      setusertype("User")
      setloggedin(true)
       setuserid(rolefind.useridd)
    }else{
      setusertype("Admin")
      setloggedin(true)
    }
  }
}, [])

  return (
    <>
      <Logincontext.Provider value={[ usertype,setusertype,loggedin,setloggedin,userid,setuserid]}>
        {
          usertype=="User"? <Header />:<AdminHeader/>
        }
        <Siteroutes/>
        <Footer />
      </Logincontext.Provider>
    </>
  )
}

export default App
