import axios from "axios"
import React from "react"
import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Logincontext } from "./logincontext"

export const Checkout = () => {

	const [name, setname] = useState("")
	const [email, setemail] = useState("")
	const [phone, setphone] = useState("")
	const [address, setaddress] = useState("")
	const [payment, setpayment] = useState("Cash on Delivery")

	const [odrid, setordrid] = useState()
	const [checkout, setcheckout] = useState([])
	const [grandtotal, setgrandtotal] = useState()

	const [dly, setdly] = useState()

	// total price print through location property 

	const location = useLocation()
	const finaltotal = location.state

	// delivery charges through useffect  and applied in final total
	//  now make again function to apply on delivery input 

	useEffect(() => {
		if (finaltotal <= 100) {
			setgrandtotal(parseFloat(finaltotal) + parseFloat(10.00))
			setdly(10)
		}
		else if (finaltotal <= 150) {
			setgrandtotal(parseFloat(finaltotal) + parseFloat(7.00))
			setdly(7)
		}
		else if (finaltotal <= 200) {
			setgrandtotal(parseFloat(finaltotal) + parseFloat(5.00))
			setdly(5)
		}
		else {
			setgrandtotal(parseFloat(finaltotal))
			setdly("0")
		}

	})







	const Navigate = useNavigate()


	useEffect(() => {
		const userdata = JSON.parse(localStorage.getItem("user"))
		if (userdata) {
			const id = userdata.useridd
			find(id)
			const orderid = "OID" + Math.floor(1000 + Math.random() * 1000)
			setordrid(orderid)
		}

		else {
			Navigate("/login")
		}

	}, [])

	// post api 

	const [usertype, setusertype, loggedin, setloggedin, userid, setuserid] = useContext(Logincontext)


	const pos = async () => {

		const items = checkout.map(a => ({
			productid: a.productid,
			productname: a.name,
			qnty: a.quantity
		}))



		try {
			const check = await axios.post("https://organive-store.onrender.com/api/checkout", { name, email, phone, address, payment, userid, odrid, grandtotal, productdata: items })

			if (check.data.statuscode == 1) {
				alert("Congratulations,order has been placed")


				Navigate("/ordersuccess", {
					state: { name, email, phone, address, payment, odrid }
				})
			}
			else {
				alert(check.data.msg)
			}



		}
		catch (err) { alert(err) }

	}








	const find = async (id) => {
		try {
			const found = await axios.get(`https://organive-store.onrender.com/api/addtocart/${id}`)
			if (found.data.statuscode == 1) {

				setcheckout(found.data.alldataa)
			}
			else {
				alert(found.data.msg)
			}
		}
		catch (err) { alert(err) }
	}









	return (
		<>
			{/* Title Banner */}
			<section className="how-overlay2 bg-img1" style={{ backgroundImage: "url('/images/bg-07.jpg')" }}>
				<div className="container">
					<div className="txt-center p-t-160 p-b-165">
						<h2 className="txt-l-101 cl0 txt-center p-b-14 respon1">
							Checkout
						</h2>

						<span className="txt-m-201 cl0 flex-c-m flex-w">
							<Link to="/" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
								Home
							</Link>

							<span>
								/ Checkout
							</span>
						</span>
					</div>
				</div>
			</section>

			{/* Checkout Content Section */}
			<section className="container bg0 p-t-80 p-b-80">
				<div className="row">
					{/* Left Column: Billing & Shipping Form */}
					<div className="col-lg-7 m-b-50">
						<div className="p-r-30 p-rl-0-lg">
							<h3 className="txt-l-101 cl3 p-b-25" style={{ fontSize: "24px" }}>
								Billing & Shipping Details
							</h3>

							<form>
								<div className="row">
									{/* Name */}
									<div className="col-12 p-b-20">
										<label className="txt-m-103 cl3 p-b-6" style={{ display: "block" }} >
											Full Name <span style={{ color: "red" }}>*</span>
										</label>
										<input
											type="text"
											name="name"
											placeholder="Enter your full name"
											className="txt-s-115 cl3 plh1 size-a-25 bo-all-1 bocl15 focus1 p-rl-20 w-full"
											style={{ borderRadius: "6px" }} onChange={(e) => setname(e.target.value)}
										/>
									</div>

									{/* Email */}
									<div className="col-md-6 col-12 p-b-20">
										<label className="txt-m-103 cl3 p-b-6" style={{ display: "block" }}>
											Email Address <span style={{ color: "red" }}>*</span>
										</label>
										<input
											type="email"
											name="email"
											placeholder="Enter your email"
											className="txt-s-115 cl3 plh1 size-a-25 bo-all-1 bocl15 focus1 p-rl-20 w-full"
											style={{ borderRadius: "6px" }} onChange={(e) => setemail(e.target.value)}
										/>
									</div>

									{/* Phone */}
									<div className="col-md-6 col-12 p-b-20">
										<label className="txt-m-103 cl3 p-b-6" style={{ display: "block" }}>
											Phone Number <span style={{ color: "red" }}>*</span>
										</label>
										<input
											type="tel"
											name="phone"
											placeholder="Enter your phone number"
											className="txt-s-115 cl3 plh1 size-a-25 bo-all-1 bocl15 focus1 p-rl-20 w-full"
											style={{ borderRadius: "6px" }} onChange={(e) => setphone(e.target.value)}
										/>
									</div>

									{/* Address */}
									<div className="col-12 p-b-25">
										<label className="txt-m-103 cl3 p-b-6" style={{ display: "block" }}>
											Delivery Address <span style={{ color: "red" }}>*</span>
										</label>
										<textarea
											name="address"
											rows="4"
											placeholder="Street address, house/apartment number, city, and pincode..."
											className="txt-s-115 cl3 plh1 bo-all-1 bocl15 focus1 p-rl-20 p-tb-12 w-full"
											style={{ borderRadius: "6px", resize: "vertical" }} onChange={(e) => setaddress(e.target.value)}
										></textarea>
									</div>

									{/* Payment Mode */}
									<div className="col-12 p-b-10">
										<h4 className="txt-m-101 cl3 p-b-15" style={{ fontSize: "18px" }}>
											Payment Mode
										</h4>

										{/* Cash on Delivery Card */}
										<div
											style={{
												border: "2px solid #81b03f",
												borderRadius: "8px",
												padding: "16px 20px",
												backgroundColor: "#f9fcf5",
												display: "flex",
												alignItems: "center",
												justifyContent: "space-between",
												cursor: "pointer"
											}}
										>
											<div style={{ display: "flex", alignItems: "center" }}>
												<input
													type="radio"
													id="cod"
													name="payment_mode"
													value="Cash on Delivery"
													defaultChecked
													style={{
														width: "18px",
														height: "18px",
														accentColor: "#81b03f",
														cursor: "pointer",
														marginRight: "12px"
													}}
													onChange={(e) => setpayment(e.target.value)}
												/>
												<label
													htmlFor="cod"
													style={{
														cursor: "pointer",
														margin: 0,
														fontSize: "16px",
														fontWeight: "600",
														color: "#333"
													}}
												>
													Cash on Delivery (COD)
												</label>
											</div>

											<span
												style={{
													fontSize: "12px",
													fontWeight: "600",
													color: "#81b03f",
													backgroundColor: "#eaf5dc",
													padding: "4px 10px",
													borderRadius: "20px"
												}}
											>
												Pay at doorstep
											</span>
										</div>

										<p className="txt-s-101 cl6 p-t-8" style={{ fontSize: "13px" }}>
											Pay in cash when your order is delivered right to your doorstep.
										</p>
									</div>
								</div>
							</form>
						</div>
					</div>

					{/* Right Column: Checkout Products & Order Summary */}
					<div className="col-lg-5 m-b-50">
						<div
							className="bo-all-1 bocl15 p-all-30"
							style={{
								borderRadius: "10px",
								backgroundColor: "#fafafa",
								boxShadow: "0 2px 10px rgba(0,0,0,0.03)"
							}}
						>
							<h3 className="txt-m-101 cl3 p-b-20 bo-b-1 bocl15" style={{ fontSize: "20px" }}>
								Order Summary
							</h3>

							{/* Products To Checkout List */}
							<div className="p-tb-15 bo-b-1 bocl15">
								<h5 className="txt-m-103 cl6 p-b-15" style={{ fontSize: "14px", textTransform: "uppercase" }}>
									Products to Checkout
								</h5>

								{checkout.map((product) =>
									<div
										key={product._id}
										className="flex-w flex-sb-m p-b-15"
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "space-between",
											marginBottom: "12px"
										}}
									>
										{/* Product Thumbnail & Details */}
										<div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
											<div
												style={{
													width: "55px",
													height: "55px",
													borderRadius: "6px",
													overflow: "hidden",
													border: "1px solid #e6e6e6",
													flexShrink: 0
												}}
											>
												<img
													src={`/uploads/${product.image}`}
													alt={product.name}
													style={{ width: "100%", height: "100%", objectFit: "cover" }}
												/>
											</div>

											<div>
												<h6 style={{ fontSize: "15px", fontWeight: "600", color: "#333", margin: 0 }}>
													{product.name}
												</h6>
												<span style={{ fontSize: "13px", color: "#888" }}>
													Qty: {product.quantity} × ${product.price}
												</span>
											</div>
										</div>

										{/* Item Total */}
										<span style={{ fontSize: "15px", fontWeight: "600", color: "#333" }}>
											${product.price * product.quantity}
										</span>
									</div>
								)}

							</div>

							{/* Totals Breakdown */}
							<div className="p-t-15 p-b-15 bo-b-1 bocl15">
								<div className="flex-w flex-sb-m p-b-10" style={{ display: "flex", justifyContent: "space-between" }}>
									<span className="txt-m-103 cl6">Subtotal:</span>
									<span className="txt-m-104 cl3" style={{ fontWeight: "600" }}>
										${finaltotal}
									</span>
								</div>

								<div className="flex-w flex-sb-m" style={{ display: "flex", justifyContent: "space-between" }}>
									<span className="txt-m-103 cl6">Delivery Fee:</span>
									<span style={{ color: "#81b03f", fontWeight: "600", fontSize: "14px" }}>
										${dly}
									</span>
								</div>
							</div>

							{/* Grand Total */}
							<div
								className="flex-w flex-sb-m p-t-15 p-b-25"
								style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
							>
								<span className="txt-m-101 cl3 font-weight-bold" style={{ fontSize: "18px" }}>
									Total Amount:
								</span>
								<span className="txt-m-101 cl10" style={{ fontSize: "26px", fontWeight: "bold", color: "#81b03f" }}>
									${grandtotal}
								</span>
							</div>

							{/* Place Order Button */}
							<button
								type="button"
								className="flex-c-m txt-s-103 cl0 bg10 size-a-2 hov-btn2 trans-04 w-full"
								style={{
									borderRadius: "6px",
									fontSize: "16px",
									fontWeight: "600",
									cursor: "pointer"
								}}
								onClick={pos}
							>
								Place Order
							</button>

							<p className="txt-center txt-s-101 cl9 p-t-12" style={{ fontSize: "12px", margin: 0 }}>
								Safe & Secure Checkout • Cash on Delivery
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Checkout
