import { useState } from "react"

export const Contact = () => {
    const [name,setname]=useState("")
     const [email,setemail]=useState("")
      const [phone,setphone]=useState("")
       const [message,setmessage]=useState("")


//contact 

const contact =async()=>{
    const response=await fetch("http://localhost:9000/api/contact",{method:"post",
        body:JSON.stringify({name,email,phone,message}),
        headers:{"content-type":"application/json;"}

    })
   if(response.ok){
     const res=await response.json()
     if(res.statuscode===1){
        alert(res.msg)
     }
     else{
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
							Contact Us For Help
						</h2>

						<span className="txt-m-201 cl0 flex-c-m flex-w">
							<a href="/" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
								Home
							</a>

							<span>
								/ Contact Us
							</span>
						</span>
					</div>
				</div>
			</section>

			{/* Form Contact */}
			<section className="container bg0 p-t-150 p-b-90">
				<div className="row">
					<div className="col-sm-10 col-md-6 col-lg-5 m-rl-auto p-b-10">
						<div className="h-full how5 m-r--30 m-r-0-lg m-l-15-xl">
							<div className="bg-img3 h-full respon18" style={{ backgroundImage: "url('/images/other-18.jpg')" }}></div>
						</div>
					</div>

					<div className="col-sm-10 col-md-6 col-lg-7 m-rl-auto p-b-10">
						<div className="p-t-75 p-l-70 p-rl-0-lg">
							<div className="size-a-1 flex-col-l p-b-70">
								<div className="txt-m-201 cl10 how-pos1-parent m-b-14">
									Get In Touch

									<div className="how-pos1">
										<img src="/images/icons/symbol-02.png" alt="IMG" />
									</div>
								</div>

								<h3 className="txt-l-101 cl3 respon1">
									How Can We Help You?
								</h3>
							</div>

							<form id="contact-form" className="validate-form">
								<div className="row">
									<div className="col-lg-6 p-b-20">
										<div className="m-r--5 m-rl-0-lg">
											<input className="txt-s-115 cl3 plh1 size-a-25 bo-all-1 bocl15 focus1 p-rl-20" type="text" name="name" placeholder="Your Full Name *" onChange={(e)=>setname(e.target.value)}/>
										</div>
									</div>

									<div className="col-lg-6 p-b-20">
										<div className="m-l--5 m-rl-0-lg">
											<input className="txt-s-115 cl3 plh1 size-a-25 bo-all-1 bocl15 focus1 p-rl-20" type="email" name="email" placeholder="Your Email *" onChange={(e)=>setemail(e.target.value)}/>
										</div>
									</div>

									<div className="col-12 p-b-20">
										<div>
											<input className="txt-s-115 cl3 plh1 size-a-25 bo-all-1 bocl15 focus1 p-rl-20" type="text" name="phone" placeholder="Your Phone Number *" onChange={(e)=>setphone(e.target.value)}/>
										</div>
									</div>

									<div className="col-12 p-b-20">
										<div>
											<textarea className="txt-s-115 cl3 plh1 size-a-48 bo-all-1 bocl15 focus1 p-rl-20 p-tb-10" name="message" placeholder="How can we help you? (Your Message)"onChange={(e)=>setmessage(e.target.value)}></textarea>
										</div>	
									</div>
								</div>

								<div className="flex-l p-t-10">
									<button type="button" className="flex-c-m txt-s-103 cl0 bg10 size-a-2 hov-btn2 trans-04" onClick={contact}>
										Send Message
									</button>
                                    
								</div>
							</form>
						</div>
					</div>	
				</div>
			</section>

			{/* Contact Info & Map */}
			<section className="how-pos2-parent">
				<div className="map how-pos2 s-full respon19">
					<div className="contact-map h-full" id="google_map" data-map-x="19.420967" data-map-y="-99.162822" data-scrollwhell="0" data-draggable="1" data-zoom="15"></div>
				</div>
			
				<div className="container pointer-e-none">
					<div className="m-rl--15 flex-r">
						<div className="pointer-e-auto size-a-49 bg10 p-rl-40 p-t-50 p-b-30 w-full-lg p-rl-15-ssm">
							<h4 className="txt-l-108 cl0 p-b-18">
								Contact info
							</h4>

							<p className="txt-s-101 cl0">
								Have questions or need assistance? Reach out to our customer support team and we will be happy to help.
							</p>

							<ul className="p-t-44">
								<li className="flex-m p-b-20">
									<div className="wrap-pic-max-w size-w-73 m-r-20">
										<img src="/images/icons/icon-address-02.png" alt="IMG" />
									</div>

									<span className="size-w-74 txt-s-101 cl0">
										8901 Marmora Road, Glasgow, D04 89GR
									</span>
								</li>

								<li className="flex-m p-b-20">
									<div className="wrap-pic-max-w size-w-73 m-r-20">
										<img src="/images/icons/icon-phone-04.png" alt="IMG" />
									</div>

									<span className="size-w-74 txt-s-101 cl0">
										(426) 460 8668 
										<br />
										(317) 799 7654
									</span>
								</li>

								<li className="flex-m p-b-20">
									<div className="wrap-pic-max-w size-w-73 m-r-20">
										<img src="/images/icons/icon-mail-04.png" alt="IMG" />
									</div>

									<span className="size-w-74 txt-s-101 cl0">
										help@example.com
										<br />
										support@example.com
									</span>
								</li>

								<li className="flex-m p-b-20">
									<div className="wrap-pic-max-w size-w-73 m-r-20">
										<img src="/images/icons/icon-web-02.png" alt="IMG" />
									</div>

									<span className="size-w-74 txt-s-101 cl0">
										www.organive.store.com
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Logo */}
			<div className="sec-logo bg0">
				<div className="container">
					<div className="flex-w flex-sa-m p-tb-60">
						<a href="#" className="dis-block how2 p-rl-15 m-tb-20">
							<img className="trans-04" src="/images/icons/symbol-07.png" alt="IMG" />
						</a>

						<a href="#" className="dis-block how2 p-rl-15 m-tb-20">
							<img className="trans-04" src="/images/icons/symbol-08.png" alt="IMG" />
						</a>

						<a href="#" className="dis-block how2 p-rl-15 m-tb-20">
							<img className="trans-04" src="/images/icons/symbol-09.png" alt="IMG" />
						</a>

						<a href="#" className="dis-block how2 p-rl-15 m-tb-20">
							<img className="trans-04" src="/images/icons/symbol-10.png" alt="IMG" />
						</a>

						<a href="#" className="dis-block how2 p-rl-15 m-tb-20">
							<img className="trans-04" src="/images/icons/symbol-11.png" alt="IMG" />
						</a>
					</div>
				</div>
			</div>

			{/* Subscribe */}
			<section className="sec-subscribe bg13 p-t-65 p-b-65">
				<div className="container">
					<div className="row">
						<div className="col-md-5 p-tb-15">
							<div className="h-full flex-col-m">
								<h4 className="txt-m-110 cl3 p-b-4">
									Subscribe Newsletter.
								</h4>

								<p className="txt-s-101 cl6">
									Get e-mail updates about our latest shop and special offers.
								</p>
							</div>
						</div>

						<div className="col-md-7 p-tb-15">
							<form className="flex-w flex-m h-full">
								<input className="size-a-6 txt-s-106 cl6 plh0 p-rl-30 w-full-sm" type="text" name="email" placeholder="Your email address" />
								<button className="bg10 size-a-5 txt-s-107 cl0 p-rl-15 trans-04 hov-btn2 mt-4 mt-sm-0">
									Subscribe
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Contact