import { useState } from "react"

export const Register = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [phone, setphone] = useState("")
    const [password, setpassword] = useState("")




    //   post

    const post = async (e) => {
        e.preventDefault()
        const result = await fetch("https://organive-store.onrender.com/api/post", {
            method: "post",
            body: JSON.stringify({ name, email, phone, password }),

            headers: { "content-type": "application/json;" }
        })

        if (result.ok) {
            const res = await result.json()
            if (res.statuscode === 1) {
                alert(res.msg)
            }
            else {
                alert(res.msg)
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
                            Register
                        </h2>

                        <span className="txt-m-201 cl0 flex-c-m flex-w">
                            <a href="/" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
                                Home
                            </a>

                            <span>
                                / Register
                            </span>
                        </span>
                    </div>
                </div>
            </section>

            {/* Form Register */}
            <section className="bg0 p-t-145 p-b-100">
                <div className="container">
                    <div className="size-a-1 flex-col-c-m p-b-70">
                        <div className="txt-center txt-m-201 cl10 how-pos1-parent m-b-14">
                            Join Us

                            <div className="how-pos1">
                                <img src="/images/icons/symbol-02.png" alt="IMG" />
                            </div>
                        </div>

                        <h3 className="txt-center txt-l-101 cl3 respon1">
                            Create An Account
                        </h3>
                    </div>

                    <form id="register-form" className="validate-form">
                        <div className="row">
                            <div className="col-sm-6 p-b-30">
                                <div className="validate-input">
                                    <input className="txt-s-101 cl3 plh1 size-a-46 bo-all-1 bocl15 focus1 p-rl-20" type="text" name="name" placeholder="Your Full Name *" onChange={(e) => setname(e.target.value)} />
                                </div>
                            </div>

                            <div className="col-sm-6 p-b-30">
                                <div className="validate-input">
                                    <input className="txt-s-101 cl3 plh1 size-a-46 bo-all-1 bocl15 focus1 p-rl-20" type="email" name="email" placeholder="Your Email ID *" onChange={(e) => setemail(e.target.value)} />
                                </div>
                            </div>

                            <div className="col-sm-6 p-b-30">
                                <div className="validate-input">
                                    <input className="txt-s-101 cl3 plh1 size-a-46 bo-all-1 bocl15 focus1 p-rl-20" type="tel" name="phone" placeholder="Your Phone Number *" onChange={(e) => setphone(e.target.value)} />
                                </div>
                            </div>

                            <div className="col-sm-6 p-b-30">
                                <div className="validate-input">
                                    <input className="txt-s-101 cl3 plh1 size-a-46 bo-all-1 bocl15 focus1 p-rl-20" type="password" name="password" placeholder="Your Password *" onChange={(e) => setpassword(e.target.value)} />
                                </div>
                            </div>
                        </div>


                        <div className="flex-c p-t-10">
                            <button className="flex-c-m txt-s-103 cl0 bg10 size-a-2 hov-btn2 trans-04" onClick={post}>
                                Register Now
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )

}





export default Register