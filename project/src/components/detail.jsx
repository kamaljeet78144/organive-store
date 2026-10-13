import axios from "axios"
import { useContext } from "react"
import { useEffect, useState } from "react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { Logincontext } from "./logincontext"

export const Detail = () => {

	const [name, setname] = useState("")
	const [price, setprice] = useState(0)
	const [image, setimage] = useState("")
	const [detail, setdetail] = useState("")


	
	const [quantity, setquantity] = useState(1)


	const[usertype,setusertype,loggedin,setloggedin,userid,setuserid]=useContext(Logincontext)

	const [params] = useSearchParams()

	const Navigate=useNavigate()

	const id = params.get("id")


	useEffect(() => { findd() }, [])


	const findd = async () => {
		try {
			const found = await axios.get(`http://localhost:9000/api/detail/${id}`)
			if (found.data.statuscode === 1) {
				
				setdetail(found.data.product.detail)
				setname(found.data.product.name)
				const pricee = parseInt((found.data.product.price))
				setprice(pricee)
				setimage(found.data.product.image)
			}
			else { alert("no details") }
		}
		catch (err) {
			alert(err)
		}

	}


	// add to cart api post

	const cart = async () => {


		try {
			const data = { name, price: price, image: image, productid:id, userid:userid, quantity }
			const add = await axios.post("http://localhost:9000/api/addtocart", data)
			
				if (add.data.statuscode === 1) {
					alert(" product added to cart")
					Navigate("/addtocart")
				}
				else if(add.data.statuscode==3){
					alert(" product already in cart")
					Navigate("/addtocart")
				}
				else {
					alert(add.data.msg)
				}
			}
		
		catch (err) {
			alert(err)
		}
	}


	// whislist post api 
	const whis=async()=>{
		try{
			const alldata={price:price,name, image:image,userid:userid,productid:id,}
			const whispos=await axios.post("http://localhost:9000/api/whislist", alldata)
			if(whispos.data.statuscode==1){
				
				Navigate("/whislist")
			} else if(whispos.data.statuscode===2){
                alert("already in wishlist")
            }

			else{
				alert(whispos.data.msg)
			}
		}
		catch(err){
			alert(err)
		}
	}

	return (
		<>
			{/* Title page */}
			<section className="how-overlay2 bg-img1" style={{ backgroundImage: "url('/images/bg-07.jpg')" }}>
				<div className="container">
					<div className="txt-center p-t-160 p-b-165">
						<h2 className="txt-l-101 cl0 txt-center p-b-14 respon1">
							Product Detail
						</h2>

						<span className="txt-m-201 cl0 flex-c-m flex-w">
							<a href="/" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
								Home
							</a>

							<span>
								/ Product Detail
							</span>
						</span>
					</div>
				</div>
			</section>

			{/* Product Detail Section */}
			<section className="container bg0 p-t-100 p-b-80">
				<div className="row">
					{/* Product Image */}
					<div className="col-sm-10 col-md-6 col-lg-5 m-rl-auto p-b-30">
						<div className="wrap-pic-w bo-all-1 bocl12" style={{ borderRadius: "8px", overflow: "hidden" }}>
							<img
								src={`/uploads/${image}`}
								alt="Product"
								style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }}
							/>
						</div>
					</div>

					{/* Product Info: Name, Price, Detail */}
					<div className="col-sm-10 col-md-6 col-lg-7 m-rl-auto p-b-30">
						<div className="p-l-40 p-rl-0-lg">
							<div className="size-a-1 flex-col-l p-b-20">
								<div className="txt-m-201 cl10 how-pos1-parent m-b-14">
									Product Detail
									<div className="how-pos1">
										<img src="/images/icons/symbol-02.png" alt="IMG" />
									</div>
								</div>

								{/* Product Name */}
								<h3 className="txt-l-101 cl3 respon1 p-b-10">
									{name}
								</h3>

								{/* Product Price */}
								<span className="txt-m-104 cl10" style={{ fontSize: "26px", fontWeight: "bold" }}>
									${price}
								</span>
							</div>

							{/* Product Detail */}
							<div className="p-t-15 p-b-30 bo-t-1 bocl15">
								<h4 className="txt-m-103 cl3 p-b-10">
									Detail:
								</h4>
								<p className="txt-s-101 cl6" style={{ fontSize: "16px", lineHeight: "1.8" }}>
									{detail}
								</p>
							</div>

							<div className="flex-w flex-m" style={{ gap: "15px" }}>
								<button type="button" className="flex-c-m txt-s-103 cl0 bg10 size-a-2 hov-btn2 trans-04 p-rl-30" onClick={cart}>
									Add to Cart
								</button><button type="button" className="flex-c-m txt-s-103 cl0 bg10 size-a-2 hov-btn2 trans-04 p-rl-30" onClick={whis}>
									Whislist
								</button>

							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Detail
