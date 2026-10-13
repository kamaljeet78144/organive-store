import { useContext, useState } from "react"
import {useNavigate} from "react-router-dom"
import { Logincontext } from "./logincontext"

export const Login = () => {
const [email,setemail]=useState("")
const[password,setpassword]=useState("")



const[ usertype,setusertype,loggedin,setloggedin,userid,setuserid]=useContext(Logincontext)

const navigate=useNavigate()


const login=async(e)=>{
    e.preventDefault()
    const logindata=await fetch("http://localhost:9000/api/login",{
        method:"post",
        body:JSON.stringify({email,password}),
        headers:{"content-type":"application/json;"}
       })
       if(logindata.ok){
        const log=await logindata.json()
        if(log.statuscode===1){
            alert(log.msg)
            navigate("/")
            const useridd=log.id
            const userrole=log.role
            setusertype(userrole)
            setloggedin(true)
            setuserid(useridd)
            localStorage.setItem("user",JSON.stringify({userrole,useridd}))
        }
        else if(log.statuscode==3){
            alert(log.msg)
            navigate("/admin")
            setusertype("Admin")
            setloggedin(true)
        }
        else if(log.statuscode==2){
            alert(log.msg)
            setloggedin(false)
        }
        else{
            alert(log.msg)
            setloggedin(false)
        }
       }
}


    return (
        <>
            {/* Title page */}
            <section className="how-overlay2 bg-img1" style={{ backgroundImage: "url('/images/bg-07.jpg')" }}>
                <div className="container">
                    <div className="txt-center p-t-160 p-b-165">
                        <h2 className="txt-l-101 cl0 txt-center p-b-14 respon1">
                            Login
                        </h2>

                        <span className="txt-m-201 cl0 flex-c-m flex-w">
                            <a href="/" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
                                Home
                            </a>

                            <span>
                                / Login
                            </span>
                        </span>
                    </div>
                </div>
            </section>

            {/* Form Login */}
            <section className="bg0 p-t-145 p-b-100">
                <div className="container">
                    <div className="size-a-1 flex-col-c-m p-b-70">
                        <div className="txt-center txt-m-201 cl10 how-pos1-parent m-b-14">
                            Welcome Back

                            <div className="how-pos1">
                                <img src="/images/icons/symbol-02.png" alt="IMG" />
                            </div>
                        </div>

                        <h3 className="txt-center txt-l-101 cl3 respon1">
                            Login To Your Account
                        </h3>
                    </div>

                    <form id="login-form" className="validate-form">
                        <div className="row justify-content-center">
                            <div className="col-sm-6 p-b-30">
                                <div className="validate-input">
                                    <input className="txt-s-101 cl3 plh1 size-a-46 bo-all-1 bocl15 focus1 p-rl-20" type="email" name="email" placeholder="Your Email ID * " onChange={(e)=>setemail(e.target.value)} />
                                </div>
                            </div>

                            <div className="col-sm-6 p-b-30">
                                <div className="validate-input">
                                    <input className="txt-s-101 cl3 plh1 size-a-46 bo-all-1 bocl15 focus1 p-rl-20" type="password" name="password" placeholder="Your Password *" onChange={(e)=>setpassword(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className="flex-c p-t-10">
                            <button className="flex-c-m txt-s-103 cl0 bg10 size-a-2 hov-btn2 trans-04" onClick={login}>
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login