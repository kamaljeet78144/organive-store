import { useEffect, useState } from "react"

export const AddCat = () => {
	const [name, setname] = useState("")
	const [image, setimage] = useState("")
	const [allcat, setallcat] = useState([])
	const[upid,setupid]=useState("")
	const [oldimage, setoldimage] = useState("")





	useEffect(() => { found() }, [])

	

	// post api 


	const addcategory = async (e) => {
		e.preventDefault()
		const formdata = new FormData()
		formdata.append("catname", name)
		formdata.append("image", image)

		const result = await fetch("http://localhost:9000/api/addcategory", {
			method: "post",
			body: formdata
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

	//  get category

	const found = async () => {
		const result = await fetch("http://localhost:9000/api/getcategory", { method: "get" })
		if (result.ok) {
			const res = await result.json()
			if (res.statuscode === 1) {
				alert(res.msg)
				setallcat(res.category)
			}
			else {
				alert(res.msg)
			}
		}
	}


	// delete category

	const del =async(id)=>{
		const confirm=window.confirm(" Do you want to delete?")
		if(confirm==true){const remove=await fetch(`http://localhost:9000/api/deletedata/${id}`,{method:"delete"})
		if(remove.ok){
			const deletedata=await remove.json()
			if(deletedata.statuscode===1){
				alert(deletedata.msg)
				found()
			}
			else{alert(deletedata.msg)}
		}}
		else{
			found()
		}
		
	}


	// update


	const updatedata=(value)=>{
		setname(value.catname)
		setoldimage(value.catimg)
		setupid(value._id)
		alert(value.catname)
		
	}


	const onupdate=async()=>{
		const formdata	= new FormData()
		formdata.append("name",name)
		formdata.append("image",image)
		formdata.append("oldpic",oldimage)
		const data=await fetch(`http://localhost:9000/api/updatedata/${upid}`,{method:"put",
			body:formdata,
		
		})
		if(data.ok){
			const up =await data.json()
			if(up.statuscode===1){
				alert("category updated")
			}
			else{
				alert("an error occured")
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
								/ Addcategory
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
									Add New Categories:
								</h3>
							</div>

							<form id="contact-form" className="validate-form">
								<div className="row">
									<div className="col-lg-6 p-b-20">
										<div className="m-r--5 m-rl-0-lg">
											<input className="txt-s-115 cl3 plh1 size-a-25 bo-all-1 bocl15 focus1 p-rl-20" type="text" name="name" placeholder="Your Full Name *" value={name} onChange={(e) => setname(e.target.value)} />
										</div>
									</div>

									<div className="col-lg-6 p-b-20">
										<div className="m-l--5 m-rl-0-lg">
											<input className="txt-s-115 cl3 plh1 size-a-25 bo-all-1 bocl15 focus1 p-rl-20" type="file" name="attachfile" onChange={(e) => setimage(e.target.files[0])} />
										</div>
									</div>


								</div>

								<div className="flex-l p-t-10">
									<button type="button" className="flex-c-m txt-s-103 cl0 bg10 size-a-2 hov-btn2 trans-04" onClick={addcategory}>
										Send Message
									</button>
									<button type="button" className="flex-c-m txt-s-103 cl0 bg10 size-a-2 hov-btn2 trans-04 m-l-10" onClick={onupdate}>
										Update
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/*  Product  */}
			<div className="sec-product bg0 p-t-145 p-b-25">
				<div className="container">
					<div className="size-a-1 flex-col-c-m p-b-48">
						<div className="txt-center txt-m-201 cl10 how-pos1-parent m-b-14">
							Featured Products

							<div className="how-pos1">
								<img src="/images/icons/symbol-02.png" alt="IMG" />
							</div>
						</div>

						<h3 className="txt-center txt-l-101 cl3 respon1">
							Our products
						</h3>
					</div>



					<div className="row isotope-grid">
						{/*  -  */}


						{
							allcat.map((data, index) =>

								<div className="col-sm-6 col-md-4 col-lg-3 p-b-75 isotope-item fruit-juic-fill other-fill" key={index}>
									{/*  Block1  */}
									<div className="block1">
										<div className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04">
											<img src={`public/uploads/${data.catimg}`} alt="IMG" />

											<div className="block1-content flex-col-c-m p-b-46">
												<a href="product-single.html" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1">
													{data.catname}
												</a>

												<span className="block1-content-more txt-m-104 cl9 p-t-21 trans-04">
													21$
												</span>

												
											</div>
										</div>
									</div>
									<div className="flex-c-m p-t-15" style={{ gap: "10px" }}>
										<button style={{ backgroundColor: "#dd6b77ff", color: "#fff", padding: "8px 20px", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "600" }} onClick={()=>del(data._id)}>
											Delete
										</button>
										<button style={{ backgroundColor: "#79e592ff", color: "#fff", padding: "8px 20px", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "600" }} onClick={()=>updatedata(data)}>
											Update
										</button>
									</div>
								</div>
 
							)
						}



					</div>
				</div>
			</div>


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

export default AddCat