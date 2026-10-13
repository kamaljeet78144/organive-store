import React from "react"
import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

export const OrderSuccess = () => {

	const location=useLocation()
	const{name,email,phone,address,payment,odrid}=location.state
	
useEffect(()=>{
const userdata=JSON.parse(localStorage.getItem("user"))
if(userdata){
	const id=userdata.useridd
	del(id)

}


},[])

	
const del=async(id)=>{
	const remove=await fetch(`http://localhost:9000/api/emptycart/${id}`,{method:"delete"})
	if(remove.ok){
		const removedata=await remove.json()
if(removedata.statuscode==1){
console.log("empty cart")
}
	else{
		console.log("cart is not empty ")
	}

	}


}





	return (
		<>
			{/* Title Banner */}
			<section className="how-overlay2 bg-img1" style={{ backgroundImage: "url('/images/bg-07.jpg')" }}>
				<div className="container">
					<div className="txt-center p-t-160 p-b-165">
						<h2 className="txt-l-101 cl0 txt-center p-b-14 respon1">
							Order Confirmed
						</h2>

						<span className="txt-m-201 cl0 flex-c-m flex-w">
							<Link to="/" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
								Home
							</Link>

							<span>
								/ Order Placed
							</span>
						</span>
					</div>
				</div>
			</section>

			{/* Main Order Confirmation Section */}
			<section className="order-success-section">
				<div className="container">
					<div className="order-success-card">
						{/* Header with Success Icon */}
						<div className="order-success-header">
							<div className="order-success-icon-wrap">
								<i className="fa fa-check"></i>
							</div>

							<h3 className="order-success-title">Order Placed Successfully!</h3>
							<p className="order-success-subtitle">
								Thank you for your purchase. We have received your order and our farm team is preparing your fresh organic products for delivery.
							</p>

							<div className="order-txn-badge">
								<i className="fa fa-shield"></i>
								<span>Transaction ID: <strong>{odrid}</strong></span>
							</div>
						</div>

						{/* Customer Information Grid */}
						<div className="order-details-grid">
							{/* Customer Name */}
							<div className="order-detail-item">
								<div className="order-detail-icon">
									<i className="fa fa-user"></i>
								</div>
								<div>
									<div className="order-detail-label">Customer Name</div>
									<div className="order-detail-val">{name}</div>
								</div>
							</div>

							{/* Email Address */}
							<div className="order-detail-item">
								<div className="order-detail-icon">
									<i className="fa fa-envelope"></i>
								</div>
								<div>
									<div className="order-detail-label">Email Address</div>
									<div className="order-detail-val">{email}</div>
								</div>
							</div>

							{/* Phone Number */}
							<div className="order-detail-item">
								<div className="order-detail-icon">
									<i className="fa fa-phone"></i>
								</div>
								<div>
									<div className="order-detail-label">Phone Number</div>
									<div className="order-detail-val">{phone}</div>
								</div>
							</div>

							{/* Payment Method */}
							<div className="order-detail-item">
								<div className="order-detail-icon">
									<i className="fa fa-credit-card"></i>
								</div>
								<div>
									<div className="order-detail-label">Payment Method</div>
									<div className="order-detail-val">{payment}</div>
								</div>
							</div>

							{/* Delivery Address */}
							<div className="order-detail-item" style={{ gridColumn: "1 / -1" }}>
								<div className="order-detail-icon">
									<i className="fa fa-map-marker"></i>
								</div>
								<div>
									<div className="order-detail-label">Delivery Address</div>
									<div className="order-detail-val">{address}</div>
								</div>
							</div>
						</div>

						{/* Order Process Timeline */}
						<div className="order-timeline-box">
							<div className="order-timeline">
								<div className="order-timeline-step completed">
									<div className="order-step-dot">
										<i className="fa fa-check"></i>
									</div>
									<span className="order-step-text">Order Confirmed</span>
								</div>

								<div className="order-timeline-step completed">
									<div className="order-step-dot">
										<i className="fa fa-leaf"></i>
									</div>
									<span className="order-step-text">Harvesting</span>
								</div>

								<div className="order-timeline-step">
									<div className="order-step-dot">3</div>
									<span className="order-step-text">Out for Delivery</span>
								</div>

								<div className="order-timeline-step">
									<div className="order-step-dot">4</div>
									<span className="order-step-text">Delivered</span>
								</div>
							</div>
						</div>

						{/* Action Buttons */}
						<div className="order-success-actions">
							<Link to="/allpro" className="order-continue-btn">
								<i className="fa fa-shopping-bag"></i>
								<span>Continue Shopping</span>
							</Link>

							<Link to="/" className="order-home-btn">
								<i className="fa fa-home"></i>
								<span>Back to Home</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default OrderSuccess
