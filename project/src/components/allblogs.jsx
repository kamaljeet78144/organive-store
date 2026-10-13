import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
export const Allblogs = () => {
	const [alldata, setalldata] = useState([])


	//  get api of blog  from blog.jsx
	useEffect(() => { getb() }, [])

	const getb = async () => {
		const result = await fetch("https://organive-store.onrender.com/api/getblogs", { method: "get" })
		if (result.ok) {
			const res = await result.json()
			if (res.statuscode === 1) {
				setalldata(res.getblogs)

			}
			else {
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
							All Blogs
						</h2>

						<span className="txt-m-201 cl0 flex-c-m flex-w">
							<a href="/" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
								Home
							</a>

							<span>
								/ All Blogs
							</span>
						</span>
					</div>
				</div>
			</section>

			{/* All Blogs Section */}
			<section className="sec-blog bg0 p-t-100 p-b-70">
				<div className="container">
					<div className="size-a-1 flex-col-c-m p-b-50">
						<div className="txt-center txt-m-201 cl10 how-pos1-parent m-b-14">
							Latest Updates
							<div className="how-pos1">
								<img src="/images/icons/symbol-02.png" alt="IMG" />
							</div>
						</div>

						<h3 className="txt-center txt-l-101 cl3 respon1">
							All Posted Blogs
						</h3>
					</div>

					<div className="row">

						{/* Single Blog Card */}

						{alldata.map((a, index) =>
							<div className="col-sm-6 col-md-4 p-b-40" key={index}>
								<div
									className="blog-card bo-all-1 bocl12 hov3 trans-04"
									style={{ borderRadius: "8px", overflow: "hidden", background: "#fff", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}
								>
									{/* Blog Image */}
									<div className="wrap-pic-w hov4" style={{ height: "240px", overflow: "hidden" }}>
										<img
											src={`/uploads/${a.image}`}
											alt="Blog"
											style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
										/>
									</div>

									<div className="p-t-20 p-b-25 p-rl-20">
										{/* Blog Time */}
										<div className="m-b-8">
											<span className="txt-s-107 cl3" style={{ fontSize: "14px", color: "#888" }}>
												{a.time}
											</span>
										</div>

										{/* Blog Title */}
										<h4 className="p-t-5 p-b-10">
											<Link to={`/blogdetails?id=${a._id}`}

												className="txt-m-109 cl3 hov-cl10 trans-04"
												style={{ fontSize: "18px", fontWeight: "600", lineHeight: "1.4", display: "block" }}
											>
												{a.blogtitle}
											</Link>
										</h4>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</section>

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
									Get e-mail updates about our latest blogs and special offers.
								</p>
							</div>
						</div>

						<div className="col-md-7 p-tb-15">
							<form className="flex-w flex-m h-full">
								<input
									className="size-a-6 txt-s-106 cl6 plh0 p-rl-30 w-full-sm"
									type="text"
									name="email"
									placeholder="Your email address"
								/>
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

export const AllBlogs = Allblogs;
export const Allbogs = Allblogs;

export default Allblogs;
