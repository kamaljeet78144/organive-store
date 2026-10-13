import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

export const BlogDetail = () => {
	const [detail, setdetail] = useState({});
	const [params] = useSearchParams();
	const id = params.get("id");

	useEffect(() => {
		if (id) {
			findd();
		}
	}, [id]);

	const findd = async () => {
		try {
			const found = await axios.get(`https://organive-store.onrender.com/api/blogdetail/${id}`);
			if (found.data.statuscode === 1) {
				setdetail(found.data.blogdetails);
			} else {
				alert("No details found");
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			{/* Title page */}
			<section className="how-overlay2 bg-img1" style={{ backgroundImage: "url('/images/bg-07.jpg')" }}>
				<div className="container">
					<div className="txt-center p-t-160 p-b-165">
						<h2 className="txt-l-101 cl0 txt-center p-b-14 respon1">
							Blog Detail
						</h2>

						<span className="txt-m-201 cl0 flex-c-m flex-w">
							<Link to="/" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
								Home
							</Link>

							<span className="m-r-6">/</span>

							<Link to="/allblogs" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
								Blogs
							</Link>

							<span>/ Blog Detail</span>
						</span>
					</div>
				</div>
			</section>

			{/* Full Width Long Blog Detail Section */}
			<section className="container bg0 p-t-80 p-b-90">
				<div className="row">
					<div className="col-12">
						{/* Blog Header Info */}
						<div className="p-b-25">
							<div className="txt-m-201 cl10 how-pos1-parent m-b-14">
								Blog Article
								<div className="how-pos1">
									<img src="/images/icons/symbol-02.png" alt="IMG" />
								</div>
							</div>

							{/* Blog Title */}
							<h1
								className="txt-l-101 cl3 respon1 p-b-15"
								style={{ fontSize: "36px", fontWeight: "700", lineHeight: "1.3" }}
							>
								{detail.blogtitle || "Blog Title"}
							</h1>

							{/* Post Meta */}
							<div
								className="flex-w flex-m bo-b-1 bocl15 p-b-18 m-b-30"
								style={{ gap: "25px" }}
							>
								<span className="txt-s-107 cl9" style={{ fontSize: "15px", display: "inline-flex", alignItems: "center" }}>
									<i className="fa fa-calendar m-r-8 cl10" aria-hidden="true"></i>
									Posted on: <strong className="m-l-6 cl3">{detail.time || "Recent"}</strong>
								</span>

								<span className="txt-s-107 cl9" style={{ fontSize: "15px", display: "inline-flex", alignItems: "center" }}>
									<i className="fa fa-user m-r-8 cl10" aria-hidden="true"></i>
									By: <strong className="m-l-6 cl3">Admin</strong>
								</span>
							</div>
						</div>

						{/* Full Width Featured Image */}
						<div
							className="m-b-45"
							style={{
								width: "100%",
								borderRadius: "12px",
								overflow: "hidden",
								boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
								backgroundColor: "#f5f5f5",
							}}
						>
							<img
								src={detail.image ? `/uploads/${detail.image}` : "/images/blog-11.jpg"}
								alt={detail.blogtitle || "Blog Featured Image"}
								style={{
									width: "100%",
									height: "480px",
									objectFit: "cover",
									display: "block",
								}}
							/>
						</div>

						{/* Long Blog Detail Content */}
						<div className="p-b-50" style={{ maxWidth: "100%" }}>
							<h3
								className="txt-m-103 cl3 p-b-15"
								style={{ fontSize: "24px", fontWeight: "600" }}
							>
								Detailed Content
							</h3>

							<p
								className="txt-s-101 cl6"
								style={{
									fontSize: "18px",
									lineHeight: "2",
									color: "#444",
									whiteSpace: "pre-line",
									letterSpacing: "0.2px",
								}}
							>
								{detail.detail || "No details available for this blog."}
							</p>
						</div>

						{/* Footer / Navigation Action */}
						<div className="bo-t-1 bocl15 p-t-35 flex-w flex-m">
							<Link
								to="/allblogs"
								className="flex-c-m txt-s-103 cl0 bg10 size-a-2 hov-btn2 trans-04 p-rl-35"
								style={{ borderRadius: "4px" }}
							>
								← Back to All Blogs
							</Link>
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
	);
};

export const Blogdetail = BlogDetail;
export default BlogDetail;
