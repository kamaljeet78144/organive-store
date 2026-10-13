import axios from "axios"
import { useEffect, useState } from "react"
import { useSearchParams,Link } from "react-router-dom"


export const Product = () => {
	const [productt, setproduct] = useState([])

	useEffect(() => { findd() }, [])




	const [params] = useSearchParams()

	const id = params.get("id")


	const findd = async () => {
		try {
			const found = await axios.get(`http://localhost:9000/api/productfind/${id}`)
			if (found.data.statuscode == 1) {
			
				setproduct(found.data.products)
			}
			else {
				alert("no products ")
			}
		}
		catch (err) {
			alert(err)
		}
	}





	return (<>
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
					{productt.map((data, index) =>





						<div className="col-sm-6 col-md-4 col-lg-3 p-b-75 isotope-item fruit-juic-fill other-fill" key={index} >
							{/*  Block1  */}

							<Link to={`/detail?id=${data._id}`}>
							<div className="block1">
								<div className="block1-bg wrap-pic-w bo-all-1 bocl12 hov3 trans-04" style={{ borderRadius: "8px", overflow: "hidden" }}>
									<img
										src={`/uploads/${data.image}`}
										alt={data.name}
										style={{ width: "100%", height: "260px", objectFit: "cover", display: "block" }}
									/>
								</div>

								<div className="flex-col-c-m p-t-18">
									<a href="#" className="txt-m-103 cl3 txt-center hov-cl10 trans-04 js-name-b1" style={{ textTransform: "capitalize" }}>
										{data.name}
									</a>

									<span className="txt-m-104 cl9 p-t-8">
										{data.price?.includes("$") ? data.price : `${data.price}$`}
									</span>

									{data.detail && (
										<p className="txt-s-101 cl6 txt-center p-t-8 p-rl-15">
											{data.detail}
										</p>
									)}
								</div>
							</div>
							</Link>
						</div>
					)}
				</div>
			</div>
		</div>

	</>)
}