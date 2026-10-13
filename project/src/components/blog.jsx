import { useEffect } from "react";
import { useState } from "react";

export const Blog = () => {
const[title,settitle]=useState("")
const[detail,setdetail]=useState("")
const[image,setimage]=useState("")




// post api of blog 

const blogg=async(e)=>{
	e.preventDefault()
	const formdata=new FormData()
	formdata.append("title",title)
	formdata.append("detail",detail)
	formdata.append("image",image)



	const newblog=await fetch("http://localhost:9000/api/blog",{method:"post",
		body:formdata,
	})
	if(newblog.ok){
		const result=await newblog.json()
		if(result.statuscode==1){
			

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
									<div className="col-lg-12 p-b-20">
										<div className="m-b-8 txt-s-101 cl3" >
											Title of Blog:
										</div>
										<div>
											<input
												className="txt-s-115 cl3 plh1 size-a-25 bo-all-1 bocl15 focus1 p-rl-20"
												type="text"
												name="title"
												placeholder="Enter Blog Title *" 
												onChange={(e)=>settitle(e.target.value)}
											/>
										</div>
									</div>

									{/* Blog Image */}
									<div className="col-lg-6 p-b-20">
										<div className="m-b-8 txt-s-101 cl3">
											Blog Image:
										</div>
										<div className="m-l--5 m-rl-0-lg">
											<input
												className="txt-s-115 cl3 plh1 size-a-25 bo-all-1 bocl15 focus1 p-rl-20"
												type="file"
												name="image"
												accept="image/*"
															onChange={(e)=>setimage(e.target.files[0])}
											/>
										</div>
									</div>

									{/* Detail of Blog */}
									<div className="col-12 p-b-20">
										<div className="m-b-8 txt-s-101 cl3">
											Detail of Blog:
										</div>
										<div>
											<textarea
												className="txt-s-115 cl3 plh1 size-a-48 bo-all-1 bocl15 focus1 p-rl-20 p-tb-10"
												name="detail"
												placeholder="Enter detailed blog description / content *"

												rows="6"
															onChange={(e)=>setdetail(e.target.value)}
											></textarea>
										</div>
									</div>
								</div>

								<div className="flex-l p-t-10">
									<button
										type="button"
										className="flex-c-m txt-s-103 cl0 bg10 size-a-2 hov-btn2 trans-04" onClick={blogg}
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

					<div className="row">
						<div className="col-sm-6 col-md-4 p-b-30">
							<div>
								<div className="wrap-pic-w hov4">
									<img src="/images/blog-11.jpg" alt="BLOG" />
								</div>

								<div className="p-t-18">
									<span className="txt-s-107 cl3">
										Dec 20, 2024
									</span>

									<h4 className="p-t-5 p-b-14">
										<a href="#" className="txt-m-109 cl3 hov-cl10 trans-04">
											Fresh Organic Farming Practices
										</a>
									</h4>

									<p className="txt-s-101 cl6 p-b-12">
										Explore the benefits and sustainable techniques behind modern organic agriculture.
									</p>

									<div className="flex-w flex-m">
										<div className="p-r-19">
											<span className="txt-s-111 cl9">Post by </span>
											<span className="txt-s-119 cl6">Admin</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4 p-b-30">
							<div>
								<div className="wrap-pic-w hov4">
									<img src="/images/blog-12.jpg" alt="BLOG" />
								</div>

								<div className="p-t-18">
									<span className="txt-s-107 cl3">
										Nov 15, 2024
									</span>

									<h4 className="p-t-5 p-b-14">
										<a href="#" className="txt-m-109 cl3 hov-cl10 trans-04">
											Healthy Eating for a Better Lifestyle
										</a>
									</h4>

									<p className="txt-s-101 cl6 p-b-12">
										How incorporating wholesome greens into your daily diet can boost your energy levels.
									</p>

									<div className="flex-w flex-m">
										<div className="p-r-19">
											<span className="txt-s-111 cl9">Post by </span>
											<span className="txt-s-119 cl6">Admin</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4 p-b-30">
							<div>
								<div className="wrap-pic-w hov4">
									<img src="/images/blog-13.jpg" alt="BLOG" />
								</div>

								<div className="p-t-18">
									<span className="txt-s-107 cl3">
										Oct 10, 2024
									</span>

									<h4 className="p-t-5 p-b-14">
										<a href="#" className="txt-m-109 cl3 hov-cl10 trans-04">
											10 Essential Superfoods for Immunity
										</a>
									</h4>

									<p className="txt-s-101 cl6 p-b-12">
										A quick guide to nutrient-dense superfoods that help keep your immune system strong.
									</p>

									<div className="flex-w flex-m">
										<div className="p-r-19">
											<span className="txt-s-111 cl9">Post by </span>
											<span className="txt-s-119 cl6">Admin</span>
										</div>
									</div>
								</div>
							</div>
						</div>
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
