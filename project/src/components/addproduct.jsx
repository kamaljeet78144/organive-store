import { useEffect, useState } from "react";
import axios from "axios";

export const Addproduct = () => {

	const [name, setname] = useState("")
	const [price, setprice] = useState("")
	const [detail, setdetail] = useState("")
	const [image, setimage] = useState("")
	const [catname, setcatname] = useState("")
	const [allcat, setallcat] = useState([])
	const [allproduct, setallproduct] = useState([])
	const [oldimage, setoldimage] = useState("")
	const [upid, setupid] = useState("")



	useEffect(() => { found(), getcat() }, [])



	const addproduct = async (e) => {
		if (e) e.preventDefault()
		if (!catname) {
			alert("Please select a category")
			return
		}
		const formdata = new FormData()
		formdata.append("name", name)
		formdata.append("price", price)
		formdata.append("detail", detail)
		formdata.append("image", image)
		formdata.append("catname", catname)

		const result = await fetch("https://organive-store.onrender.com/api/addproduct", {
			method: "post",
			body: formdata
		})

		if (result.ok) {
			const res = await result.json()
			if (res.statuscode === 1) {
				alert("product stored")
				found()
				setname("")
				setprice("")
				setdetail("")
				setimage("")
				setcatname("")
			} else {
				alert("an error occured")
			}
		}
	}



	const getcat = async () => {

		try {
			const category = await axios.get("https://organive-store.onrender.com/api/getcategory")

			setallcat(category.data.category)


		}
		catch (err) {
			alert(err)
		}
	}



	const found = async () => {
		const result = await fetch("https://organive-store.onrender.com/api/getproduct", { method: "Get" })
		if (result.ok) {
			const res = await result.json()
			if (res.statuscode === 1) {
				setallproduct(res.foundproduct)
			}
		}
	}


	const del = async (id) => {
		const remove = await fetch(`https://organive-store.onrender.com/api/deleteproduct/${id}`, { method: "delete" })
		if (remove.ok) {
			const data = await remove.json()
			if (data.statuscode === 1) {

				alert("product deleted")
				found()
			}
			else {
				alert("an error occured")
			}
		}
	}

// update api of add product  like category update api 

const onupdate =(value)=>{
	setname(value.name)
	setprice(value.price)
	setoldimage(value.image)
	setdetail(value.detail)
	setcatname(value.categoryname)
	setupid(value._id)
	window.scrollTo({ top: 400, behavior: "smooth" })
}

const product=async()=>{
	if (!upid) {
		alert("Please click Update on a product below first")
		return
	}
	const formdata=new FormData()
	formdata.append("name",name)
	formdata.append("price",price)
	formdata.append("oldpic",oldimage)
	formdata.append("detail",detail)
	formdata.append("image",image)
	formdata.append("catname",catname)
	const data=await fetch(`https://organive-store.onrender.com/api/updateproduct/${upid}`,{
		method:"put",body:formdata
	})
	if(data.ok){
		const up=await data.json()
		if(up.statuscode==1){
			alert("product updated")
			found()
			setname("")
			setprice("")
			setdetail("")
			setimage("")
			setcatname("")
			setupid("")
			setoldimage("")
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
							Add Product
						</h2>

						<span className="txt-m-201 cl0 flex-c-m flex-w">
							<a href="/" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
								Home
							</a>

							<span>
								/ Add Product
							</span>
						</span>
					</div>
				</div>
			</section>

			{/* Form Add Product */}
			<section className="container bg0 p-t-120 p-b-60">
				<div className="row">
					<div className="col-sm-10 col-md-6 col-lg-5 m-rl-auto p-b-10">
						<div className="h-full how5 m-r--30 m-r-0-lg m-l-15-xl">
							<div className="bg-img3 h-full respon18" style={{ backgroundImage: "url('/images/other-18.jpg')" }}></div>
						</div>
					</div>

					<div className="col-sm-10 col-md-6 col-lg-7 m-rl-auto p-b-10">
						<div className="p-t-50 p-l-70 p-rl-0-lg">
							<div className="size-a-1 flex-col-l p-b-40">
								<div className="txt-m-201 cl10 how-pos1-parent m-b-14">
									Add Product

									<div className="how-pos1">
										<img src="/images/icons/symbol-02.png" alt="IMG" />
									</div>
								</div>

								<h3 className="txt-l-101 cl3 respon1">
									Product Information
								</h3>
							</div>

							<form id="add-product-form" className="validate-form">
								<div className="row">
									{/* Category Name Section */}
									<div className="col-lg-6 col-md-6 col-12 p-b-20">
										<div className="m-b-8 txt-s-101 cl3" style={{ fontWeight: "600" }}>
											Category Name:
										</div>
										<div>
											<select
												className="txt-s-115 cl3 plh1 focus1"
												style={{
													width: "100%",
													height: "48px",
													padding: "0 18px",
													border: "1px solid #d9d9d9",
													borderRadius: "6px",
													backgroundColor: "#fff",
													outline: "none"
												}}
												name="catname"
												value={catname}
												onChange={(e) => setcatname(e.target.value)}
											>
												<option value="">Select Category</option>
												{
													allcat && allcat.map((cat, index) =>
														<option key={cat._id || index} value={cat._id}>{cat.catname}</option>
													)
												}
											</select>
										</div>
									</div>

									{/* Product Name Section */}
									<div className="col-lg-6 col-md-6 col-12 p-b-20">
										<div className="m-b-8 txt-s-101 cl3" style={{ fontWeight: "600" }}>
											Product Name:
										</div>
										<div>
											<input
												className="txt-s-115 cl3 plh1 focus1"
												style={{
													width: "100%",
													height: "48px",
													padding: "0 18px",
													border: "1px solid #d9d9d9",
													borderRadius: "6px",
													outline: "none"
												}}
												type="text"
												name="name"
												placeholder="Product Name *"
												value={name}
												onChange={(e) => setname(e.target.value)}
											/>
										</div>
									</div>

									{/* Product Price Section */}
									<div className="col-lg-6 col-md-6 col-12 p-b-20">
										<div className="m-b-8 txt-s-101 cl3" style={{ fontWeight: "600" }}>
											Product Price:
										</div>
										<div>
											<input
												className="txt-s-115 cl3 plh1 focus1"
												style={{
													width: "100%",
													height: "48px",
													padding: "0 18px",
													border: "1px solid #d9d9d9",
													borderRadius: "6px",
													outline: "none"
												}}
												type="text"
												name="price"
												placeholder="Product Price *"
												value={price}
												onChange={(e) => setprice(e.target.value)}
											/>
										</div>
									</div>

									{/* Product Image Section */}
									<div className="col-lg-6 col-md-6 col-12 p-b-20">
										<div className="m-b-8 txt-s-101 cl3" style={{ fontWeight: "600" }}>
											Product Image:
										</div>
										<div>
											<input
												className="txt-s-115 cl3 plh1 focus1"
												style={{
													width: "100%",
													height: "48px",
													padding: "10px 18px",
													border: "1px solid #d9d9d9",
													borderRadius: "6px",
													outline: "none",
													backgroundColor: "#fff",
													display: "flex",
													alignItems: "center"
												}}
												type="file"
												name="image"
												onChange={(e) => setimage(e.target.files[0])}
											/>
										</div>
									</div>

									{/* Product Detail Section */}
									<div className="col-12 p-b-20">
										<div className="m-b-8 txt-s-101 cl3" style={{ fontWeight: "600" }}>
											Product Detail:
										</div>
										<div>
											<textarea
												className="txt-s-115 cl3 plh1 focus1"
												style={{
													width: "100%",
													minHeight: "120px",
													padding: "14px 18px",
													border: "1px solid #d9d9d9",
													borderRadius: "6px",
													outline: "none",
													resize: "vertical"
												}}
												name="detail"
												placeholder="Product Detail *"
												value={detail}
												onChange={(e) => setdetail(e.target.value)}
											></textarea>
										</div>
									</div>
								</div>

								<div className="flex-l p-t-10" style={{ gap: "12px" }}>
									<button
										type="button"
										className="flex-c-m txt-s-103 cl0 bg10 trans-04"
										style={{
											height: "48px",
											padding: "0 30px",
											borderRadius: "6px",
											cursor: "pointer",
											fontWeight: "600",
											border: "none",
											transition: "all 0.3s ease"
										}}
										onClick={addproduct}
									>
										Add Product
									</button>
									<button
										type="button"
										className="flex-c-m txt-s-103 cl0 bg10 trans-04"
										style={{
											height: "48px",
											padding: "0 30px",
											borderRadius: "6px",
											cursor: "pointer",
											fontWeight: "600",
											border: "none",
											transition: "all 0.3s ease"
										}}
										onClick={product}
									>
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

					<div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
						{
							allproduct && allproduct.map((data, index) => (
								<div className="col-sm-6 col-md-4 col-lg-3 p-b-40 d-flex" key={data._id || index}>
									<div
										className="trans-04"
										style={{
											width: "100%",
											display: "flex",
											flexDirection: "column",
											backgroundColor: "#fff",
											borderRadius: "10px",
											border: "1px solid #e6e6e6",
											overflow: "hidden",
											boxShadow: "0 3px 10px rgba(0,0,0,0.06)",
											transition: "transform 0.3s ease, box-shadow 0.3s ease"
										}}
										onMouseEnter={(e) => {
											e.currentTarget.style.transform = "translateY(-5px)";
											e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.12)";
										}}
										onMouseLeave={(e) => {
											e.currentTarget.style.transform = "translateY(0)";
											e.currentTarget.style.boxShadow = "0 3px 10px rgba(0,0,0,0.06)";
										}}
									>
										{/* Product Image */}
										<div style={{ width: "100%", height: "240px", overflow: "hidden", backgroundColor: "#f8f9fa", position: "relative" }}>
											<img
												src={data.image?.startsWith("http") ? data.image : `https://organive-store.onrender.com/uploads/${data.image}`}
												alt={data.name || "Product"}
												onError={(e) => { e.target.onerror = null; e.target.src = data.image?.startsWith("http") ? data.image : `/uploads/${data.image}` }}
												style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
											/>
										</div>

										{/* Product Info */}
										<div style={{ padding: "18px 16px 12px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", flexGrow: 1 }}>
											<h4
												className="txt-m-103 cl3 hov-cl10 trans-04"
												style={{
													textTransform: "capitalize",
													fontSize: "17px",
													fontWeight: "600",
													marginBottom: "8px",
													lineHeight: "1.3",
													display: "-webkit-box",
													WebkitLineClamp: 1,
													WebkitBoxOrient: "vertical",
													overflow: "hidden",
													width: "100%"
												}}
												title={data.name}
											>
												{data.name}
											</h4>

											<span
												style={{
													fontSize: "18px",
													fontWeight: "700",
													color: "#71a330",
													marginBottom: "8px",
													display: "block"
												}}
											>
												{data.price?.toString().includes("$") ? data.price : `${data.price}$`}
											</span>

											<p
												className="txt-s-101 cl6"
												style={{
													fontSize: "13px",
													lineHeight: "1.5",
													margin: "0",
													minHeight: "38px",
													display: "-webkit-box",
													WebkitLineClamp: 2,
													WebkitBoxOrient: "vertical",
													overflow: "hidden",
													width: "100%",
													color: "#777"
												}}
												title={data.detail || ""}
											>
												{data.detail || ""}
											</p>
										</div>

										{/* Action Buttons */}
										<div
											style={{
												marginTop: "auto",
												padding: "12px 16px 16px",
												borderTop: "1px solid #f0f0f0",
												display: "flex",
												gap: "10px",
												width: "100%"
											}}
										>
											<button
												type="button"
												style={{
													flex: 1,
													backgroundColor: "#dc3545",
													color: "#fff",
													padding: "9px 0",
													border: "none",
													borderRadius: "6px",
													cursor: "pointer",
													fontWeight: "600",
													fontSize: "13px",
													transition: "background-color 0.2s ease",
													textAlign: "center"
												}}
												onMouseOver={(e) => e.target.style.backgroundColor = "#bd2130"}
												onMouseOut={(e) => e.target.style.backgroundColor = "#dc3545"}
												onClick={() => del(data._id)}
											>
												Delete
											</button>
											<button
												type="button"
												style={{
													flex: 1,
													backgroundColor: "#28a745",
													color: "#fff",
													padding: "9px 0",
													border: "none",
													borderRadius: "6px",
													cursor: "pointer",
													fontWeight: "600",
													fontSize: "13px",
													transition: "background-color 0.2s ease",
													textAlign: "center"
												}}
												onMouseOver={(e) => e.target.style.backgroundColor = "#218838"}
												onMouseOut={(e) => e.target.style.backgroundColor = "#28a745"}
												onClick={() => onupdate(data)}
											>
												Update
											</button>
										</div>
									</div>
								</div>
							))
						}
					</div>
				</div>
			</div>


			{/* Logo */}
			<div className="sec-logo bg0">
				<div className="container">
					<div className="flex-w flex-sa-m bo-t-1 bocl13 p-tb-60">
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

export default Addproduct;
