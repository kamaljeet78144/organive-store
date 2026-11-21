import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Blog = () => {
	const [title, settitle] = useState("")
	const [detail, setdetail] = useState("")
	const [image, setimage] = useState("")
	const [blogs,setblogs]=useState([])




	// post api of blog 

	const blogg = async (e) => {
		e.preventDefault()
		const formdata = new FormData()
		formdata.append("title", title)
		formdata.append("detail", detail)
		formdata.append("image", image)



		const newblog = await fetch("https://organive-store.onrender.com/api/blog", {
			method: "post",
			body: formdata,
		})
		if (newblog.ok) {
			const result = await newblog.json()
			if (result.statuscode == 1) {


			}
			else {
				alert("an error occured")
			}

		}
	}

	// get api for recent blogs took from allblogs 
	useEffect(()=>{getd()},[])

	const getd=async()=>{
		const res=await fetch("https://organive-store.onrender.com/api/getblogs",{method:"get"})
		if(res.ok){
			const data=await res.json()
			if(data.statuscode==1){
				setblogs(data.getblogs)
			}
			else{

				alert("an error occurred")
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
							Blog Page
						</h2>

						<span className="txt-m-201 cl0 flex-c-m flex-w">
							<a href="/" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
								Home
							</a>

							<span>
								/ Add Blog
							</span>
						</span>
					</div>
				</div>
			</section>

			{/* Form Add Blog */}
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
									Share Your Story
									<div className="how-pos1">
										<img src="/images/icons/symbol-02.png" alt="IMG" />
									</div>
								</div>

								<h3 className="txt-l-101 cl3 respon1">
									Add New Blog
								</h3>
							</div>

							<form id="add-blog-form" className="validate-form">
								<div className="row">
									{/* Title of Blog */}
									<div className="col-lg-6 col-md-6 col-12 p-b-20">
										<div className="m-b-8 txt-s-101 cl3" style={{ fontWeight: "600" }}>
											Title of Blog:
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
												name="title"
												placeholder="Enter Blog Title *"
												value={title}
												onChange={(e) => settitle(e.target.value)}
											/>
										</div>
									</div>

									{/* Blog Image */}
									<div className="col-lg-6 col-md-6 col-12 p-b-20">
										<div className="m-b-8 txt-s-101 cl3" style={{ fontWeight: "600" }}>
											Blog Image:
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
												accept="image/*"
												onChange={(e) => setimage(e.target.files[0])}
											/>
										</div>
									</div>

									{/* Detail of Blog */}
									<div className="col-12 p-b-20">
										<div className="m-b-8 txt-s-101 cl3" style={{ fontWeight: "600" }}>
											Detail of Blog:
										</div>
										<div>
											<textarea
												className="txt-s-115 cl3 plh1 focus1"
												style={{
													width: "100%",
													minHeight: "130px",
													padding: "14px 18px",
													border: "1px solid #d9d9d9",
													borderRadius: "6px",
													outline: "none",
													resize: "vertical"
												}}
												name="detail"
												placeholder="Enter detailed blog description / content *"
												value={detail}
												rows="6"
												onChange={(e) => setdetail(e.target.value)}
											></textarea>
										</div>
									</div>
								</div>

								<div className="flex-l p-t-10">
									<button
										type="button"
										className="flex-c-m txt-s-103 cl0 bg10 trans-04"
										style={{
											height: "48px",
											padding: "0 35px",
											borderRadius: "6px",
											cursor: "pointer",
											fontWeight: "600",
											border: "none",
											transition: "all 0.3s ease"
										}}
										onClick={blogg}
									>
										Add Blog
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>

			{/* Blog List Section */}
			<section className="sec-blog bg0 p-t-60 p-b-64">
				<div className="container">
					<div className="size-a-1 flex-col-c-m p-b-50">
						<div className="txt-center txt-m-201 cl10 how-pos1-parent m-b-14">
							Keep Updated With Us
							<div className="how-pos1">
								<img src="/images/icons/symbol-02.png" alt="IMG" />
							</div>
						</div>

						<h3 className="txt-center txt-l-101 cl3 respon1">
							Recent Blogs
						</h3>
					</div>

					<div className="row" style={{ display: "flex", flexWrap: "wrap" }}>
						{blogs && blogs.map((a, index) =>
							<div className="col-sm-6 col-md-4 p-b-40 d-flex" key={a._id || index}>
								<div
									className="blog-card trans-04"
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
									{/* Blog Image */}
									<div style={{ height: "240px", width: "100%", overflow: "hidden", backgroundColor: "#f8f9fa", position: "relative" }}>
										<img
											src={a.image?.startsWith("http") ? a.image : `https://organive-store.onrender.com/uploads/${a.image}`}
											alt={a.blogtitle || "Blog"}
											onError={(e) => { e.target.onerror = null; e.target.src = a.image?.startsWith("http") ? a.image : `/uploads/${a.image}` }}
											style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.4s ease" }}
										/>
									</div>

									{/* Blog Content */}
									<div style={{ padding: "20px 20px 24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
										{a.time && (
											<span style={{ fontSize: "13px", color: "#888", display: "block", marginBottom: "8px" }}>
												<i className="fa fa-calendar m-r-6"></i>
												{a.time}
											</span>
										)}

										<h4 style={{ marginBottom: "12px", minHeight: "48px" }}>
											<Link
												to={`/blogdetails?id=${a._id}`}
												className="txt-m-109 cl3 hov-cl10 trans-04"
												style={{
													fontSize: "18px",
													fontWeight: "600",
													lineHeight: "1.4",
													display: "-webkit-box",
													WebkitLineClamp: 2,
													WebkitBoxOrient: "vertical",
													overflow: "hidden"
												}}
												title={a.blogtitle}
											>
												{a.blogtitle}
											</Link>
										</h4>

										{/* Detail excerpt if present */}
										{a.detail && (
											<p
												style={{
													fontSize: "14px",
													color: "#666",
													lineHeight: "1.6",
													marginBottom: "16px",
													minHeight: "44px",
													display: "-webkit-box",
													WebkitLineClamp: 2,
													WebkitBoxOrient: "vertical",
													overflow: "hidden"
												}}
											>
												{a.detail}
											</p>
										)}

										{/* Read More Link */}
										<div style={{ marginTop: "auto", paddingTop: "12px" }}>
											<Link
												to={`/blogdetails?id=${a._id}`}
												className="hov-cl10 trans-04"
												style={{
													color: "#71a330",
													fontWeight: "600",
													fontSize: "14px",
													display: "inline-flex",
													alignItems: "center",
													gap: "6px"
												}}
											>
												Read More <i className="fa fa-long-arrow-right"></i>
											</Link>
										</div>
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

export const Blogs = Blog;
export const AddBlog = Blog;

export default Blog;
