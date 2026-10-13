import React, { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Logincontext } from "./logincontext"
import axios from "axios"

export const AddToCart = () => {

	const[qnty,setquantity]=useState()
	const[gst,setgst]=useState(0)


	const[alldata,setalldata]=useState([])

	const[total,settotal]=useState(0)
	const[finaltotal,setfinal]=useState(0)

const[usertype,setusertype,loggedin,setloggedin,userid,setuserid]=useContext(Logincontext)

const navigate=useNavigate()


// login useffect check 

useEffect(()=>{
const userdata=JSON.parse(localStorage.getItem("user"))
if(userdata){
	const id=userdata.useridd
	findd(id)
}
else{
navigate("/login")

}

},[])


// calculate total price 

useEffect(()=>{
		const tot=alldata.reduce((sum,item)=>{
			return sum+ parseFloat(item.price)*parseInt(item.quantity)
		},0)
const sub=tot.toFixed(2)
settotal(sub)
const gstt=(tot.toFixed(2)/100*18).toFixed(2)
setgst(gstt)
const add=parseFloat(sub)+parseFloat(gstt)
setfinal(add.toFixed(2))
	})


// quantity work function as -+ buttons can function 


const handlequantity=(index,change)=>{
	const check =[...alldata]
	const newqnty=check[index].quantity+change
 check[index].quantity=newqnty
 setalldata(check)
}



// get api 



const findd=async(id)=>{
	try{
		const found=await axios.get(`http://localhost:9000/api/addtocart/${id}`)
if( found){
			
	
		if(found.data.statuscode===1){
	
		
			 setalldata(found.data.alldataa)
			
		}
		else{
			// alert(dataa.data.msg)
		}
	}
	}
	catch(err){
		alert(err)
	}
}


// function for sending finaltotal to checkout page through location property 

const fnl=()=>{
	navigate("/checkout",{
		state:finaltotal
	})
}




	return (
		<>
			{/* Title page */}
			<section className="how-overlay2 bg-img1" style={{ backgroundImage: "url('/images/bg-07.jpg')" }}>
				<div className="container">
					<div className="txt-center p-t-160 p-b-165">
						<h2 className="txt-l-101 cl0 txt-center p-b-14 respon1">
							Shopping Cart
						</h2>

						<span className="txt-m-201 cl0 flex-c-m flex-w">
							<Link to="/" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
								Home
							</Link>

							<span>
								/ Cart
							</span>
						</span>
					</div>
				</div>
			</section>

			{/* Cart Table Section */}
			<section className="container bg0 p-t-100 p-b-80">
				<div className="row">
					<div className="col-12 m-b-50">
						<div className="wrap-table-shopping-cart">
							<table className="table-shopping-cart">
								<thead>
									<tr className="table_head">
										<th className="column-1">Product</th>
										<th className="column-2">Price</th>
										<th className="column-3">Quantity</th>
										<th className="column-4">Total Price</th>
									</tr>
								</thead>

								<tbody>
									{alldata.map((data,index)=>
									<tr className="table_row" key={index}>
										{/* Image & Product Name */}
										
										<td className="column-1">
											<div className="flex-w flex-m">
												<div
													className="wrap-pic-w bo-all-1 bocl12 m-r-20"
													style={{ width: "80px", height: "80px", borderRadius: "8px", overflow: "hidden" }}
												>
													<img
														src={`/uploads/${data.image}`}
														alt={name}
														style={{ width: "100%", height: "100%", objectFit: "cover" }}
													/>
												</div>
												<span className="txt-m-103 cl3">
													{data.name}
												</span>
											</div>
										</td>

										{/* Price */}
										<td className="column-2">
											${data.price}
										</td>

										{/* Quantity */}
										<td className="column-3">
											<div
												style={{
													display: "inline-flex",
													alignItems: "center",
													border: "1px solid #e6e6e6",
													borderRadius: "8px",
													overflow: "hidden",
													backgroundColor: "#fff",
													boxShadow: "0 1px 3px rgba(0,0,0,0.05)"
												}}
											>
												<button
													type="button"
													style={{
														width: "36px",
														height: "36px",
														border: "none",
														backgroundColor: "#f7f7f7",
														color: "#333",
														fontSize: "18px",
														fontWeight: "bold",
														cursor: "pointer",
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														transition: "all 0.2s ease",
														userSelect: "none",
														outline: "none"
													}}
													onMouseOver={(e) => {
														e.currentTarget.style.backgroundColor = "#81b03f";
														e.currentTarget.style.color = "#fff";
													}}
													onMouseOut={(e) => {
														e.currentTarget.style.backgroundColor = "#f7f7f7";
														e.currentTarget.style.color = "#333";
													}}
													onClick={()=>handlequantity(index,-1)}
												 >
													-
												</button>

												<span
													style={{
														minWidth: "42px",
														textAlign: "center",
														fontWeight: "600",
														fontSize: "15px",
														color: "#333",
														padding: "0 8px",
														userSelect: "none"
													}}
												>
													{data.quantity}
												</span>

												<button
													type="button"
													style={{
														width: "36px",
														height: "36px",
														border: "none",
														backgroundColor: "#f7f7f7",
														color: "#333",
														fontSize: "18px",
														fontWeight: "bold",
														cursor: "pointer",
														display: "flex",
														alignItems: "center",
														justifyContent: "center",
														transition: "all 0.2s ease",
														userSelect: "none",
														outline: "none"
													}}
													onMouseOver={(e) => {
														e.currentTarget.style.backgroundColor = "#81b03f";
														e.currentTarget.style.color = "#fff";
													}}
													onMouseOut={(e) => {
														e.currentTarget.style.backgroundColor = "#f7f7f7";
														e.currentTarget.style.color = "#333";
													}}
													onClick={()=>handlequantity(index,1)}
												>
													+
												</button>
											</div>
										</td>

										{/* Total Price */}
										<td className="column-4">
											${data.price*data.quantity}
										</td>
									</tr>
)}
								</tbody>
							</table>
						</div>
					</div>

					{/* Cart Summary */}
					<div className="col-sm-10 col-md-6 col-lg-4 m-l-auto m-b-50">
						<div className="bo-all-1 bocl15 p-all-30" style={{ borderRadius: "8px" }}>
							<h4 className="txt-m-101 cl3 p-b-20 bo-b-1 bocl15">
								Cart Total
							</h4>

							<div className="flex-w flex-sb-m p-t-15 p-b-15 bo-b-1 bocl15">
								<span className="txt-m-103 cl6">
									Subtotal:
								</span>
								<span className="txt-m-104 cl10">
									${total}
								</span>
							</div>
							<div className="flex-w flex-sb-m p-t-15 p-b-15 bo-b-1 bocl15">
								<span className="txt-m-103 cl6">
									GST:
								</span>
								<span className="txt-m-104 cl10">
									${ gst}
								</span>
							</div>

							<div className="flex-w flex-sb-m p-t-15 p-b-25">
								<span className="txt-m-101 cl3 font-weight-bold">
									Total Price:
								</span>
								<span className="txt-m-101 cl10" style={{ fontSize: "24px", fontWeight: "bold" }}>
									${finaltotal}
								</span>
							</div>

							<Link  className="flex-c-m txt-s-103 cl0 bg10 size-a-2 hov-btn2 trans-04 w-full" onClick={fnl}>
								Proceed to Checkout
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default AddToCart
