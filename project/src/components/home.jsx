import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Home = () => {


	const [category, setcategory] = useState([])

	const [fruits, setfruits] = useState([])

	const [vegs, setvegs] = useState([])

	// get api of category  got it from addcat.jsx

	useEffect(() => { getcat() }, [])



	const getcat = async () => {
		try {
			const found = await axios.get("http://localhost:9000/api/getcategory")
			setcategory(found.data.category)
		}
		catch (err) {
			alert(err)
		}
	}

	// get api of fruits got it from addproducts.jsx

	useEffect(() => {
		frt()
		veg()
	}, [])

	const frt = async () => {
		const frtdata = await fetch("http://localhost:9000/api/fruits", { method: "get" })
		if (frtdata) {
			const data = await frtdata.json()
			if (data.statuscode == 1) {
				setfruits(data.fruitsdata)

			}
			else {

			}
		}
	}

	// get api of vegetables git it from addproducts.jsx 



	const veg = async () => {
		const vegdata = await fetch("http://localhost:9000/api/vegetables", { method: "get" })
		if (vegdata) {
			const data = await vegdata.json()
			if (data.statuscode == 1) {
				setvegs(data.vegetablesdata)

			}
		}
	}


	return (
		<>
			{/*  Slider  */}
			<section className="sec-slider">
				<div className="rev_slider_wrapper fullwidthbanner-container">
					<div id="rev_slider_6" className="rev_slide fullwidthabanner" data-version="5.4.5" style={{ display: "none" }}>
						<ul>
							{/*  Slide 1  */}
							<li data-transition="fade">
								{/*    */}
								<img src="/images/bg-slide-10.jpg" alt="IMG-BG" className="rev-slidebg" />

								{/*    */}
								<div className="tp-caption tp-resizeme flex-c-m flex-w layer1"
									data-frames='[{"delay":1700,"speed":1500,"frame":"0","from":"y:-150px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'

									data-x="['center']"
									data-y="['center']"
									data-hoffset="['0', '0', '0', '0']"
									data-voffset="['-100', '-100', '-100', '-120']"

									data-width="['960','960','768','576']"
									data-height="['auto']"

									data-paddingtop="[0, 0, 0, 0]"
									data-paddingright="[15, 15, 15, 15]"
									data-paddingbottom="[0, 0, 0, 0]"
									data-paddingleft="[15, 15, 15, 15]"

									data-basealign="slide"
									data-responsive_offset="on"
								>
									<img src="/images/icons/symbol-42.png" alt="IMG" />
								</div>

								{/*    */}
								<h2 className="tp-caption tp-resizeme layer2"
									data-frames='[{"delay":500,"split":"chars","splitdelay":0.05,"speed":1300,"frame":"0","from":"x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;","mask":"x:0px;y:0px;s:inherit;e:inherit;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'

									data-visibility="['on', 'on', 'on', 'on']"

									data-fontsize="['94', '94', '80', '70']"
									data-lineheight="['100', '100', '90', '80']"
									data-color="['#fff']"
									data-textalign="['center', 'center', 'center', 'center']"

									data-x="['center']"
									data-y="['center']"
									data-hoffset="['0', '0', '0', '0']"
									data-voffset="['20', '20', '20', '20']"

									data-width="['960','960','768','576']"
									data-height="['auto']"
									data-whitespace="['normal']"

									data-paddingtop="[0, 0, 0, 0]"
									data-paddingright="[15, 15, 15, 15]"
									data-paddingbottom="[0, 0, 0, 0]"
									data-paddingleft="[15, 15, 15, 15]"

									data-basealign="slide"
									data-responsive_offset="on"
								>
									Quality food
								</h2>

								{/*    */}
								<div className="tp-caption tp-resizeme flex-c-m flex-w layer3"
									data-frames='[{"delay":2500,"speed":1500,"frame":"0","from":"y:150px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'

									data-x="['center']"
									data-y="['center']"
									data-hoffset="['0', '0', '0', '0']"
									data-voffset="['132', '132', '132', '152']"

									data-width="['960','960','768','576']"
									data-height="['auto']"

									data-paddingtop="[0, 0, 0, 0]"
									data-paddingright="[15, 15, 15, 15]"
									data-paddingbottom="[0, 0, 0, 0]"
									data-paddingleft="[15, 15, 15, 15]"

									data-basealign="slide"
									data-responsive_offset="on"
								>
									<img src="/images/icons/symbol-19.png" alt="IMG" />
								</div>
							</li>

							{/*  Slide 2  */}
							<li data-transition="fade">
								{/*    */}
								<img src="/images/bg-slide-12.jpg" alt="IMG-BG" className="rev-slidebg" />

								{/*    */}
								<div className="tp-caption tp-resizeme flex-c-m flex-w layer1"
									data-frames='[{"delay":1700,"speed":1300,"frame":"0","from":"x:300px;skX:-85px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'

									data-x="['center']"
									data-y="['center']"
									data-hoffset="['0', '0', '0', '0']"
									data-voffset="['-100', '-100', '-100', '-120']"

									data-width="['960','960','768','576']"
									data-height="['auto']"

									data-paddingtop="[0, 0, 0, 0]"
									data-paddingright="[15, 15, 15, 15]"
									data-paddingbottom="[0, 0, 0, 0]"
									data-paddingleft="[15, 15, 15, 15]"

									data-basealign="slide"
									data-responsive_offset="on"
								>
									<img src="/images/icons/symbol-42.png" alt="IMG" />
								</div>

								{/*    */}
								<h2 className="tp-caption tp-resizeme layer2"
									data-frames='[{"delay":500,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'

									data-visibility="['on', 'on', 'on', 'on']"

									data-fontsize="['94', '94', '80', '70']"
									data-lineheight="['100', '100', '90', '80']"
									data-color="['#fff']"
									data-textalign="['center', 'center', 'center', 'center']"

									data-x="['center']"
									data-y="['center']"
									data-hoffset="['0', '0', '0', '0']"
									data-voffset="['20', '20', '20', '20']"

									data-width="['960','960','768','576']"
									data-height="['auto']"
									data-whitespace="['normal']"

									data-paddingtop="[0, 0, 0, 0]"
									data-paddingright="[15, 15, 15, 15]"
									data-paddingbottom="[0, 0, 0, 0]"
									data-paddingleft="[15, 15, 15, 15]"

									data-basealign="slide"
									data-responsive_offset="on"
								>
									Quality food
								</h2>

								{/*    */}
								<div className="tp-caption tp-resizeme flex-c-m flex-w layer3"
									data-frames='[{"delay":2500,"speed":1300,"frame":"0","from":"x:-300px;skX:85px;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'

									data-x="['center']"
									data-y="['center']"
									data-hoffset="['0', '0', '0', '0']"
									data-voffset="['132', '132', '132', '152']"

									data-width="['960','960','768','576']"
									data-height="['auto']"

									data-paddingtop="[0, 0, 0, 0]"
									data-paddingright="[15, 15, 15, 15]"
									data-paddingbottom="[0, 0, 0, 0]"
									data-paddingleft="[15, 15, 15, 15]"

									data-basealign="slide"
									data-responsive_offset="on"
								>
									<img src="/images/icons/symbol-19.png" alt="IMG" />
								</div>
							</li>

							{/*  Slide 3  */}
							<li data-transition="fade">
								{/*    */}
								<img src="/images/bg-slide-11.jpg" alt="IMG-BG" className="rev-slidebg" />

								{/*    */}
								<div className="tp-caption tp-resizeme flex-c-m flex-w layer1"
									data-frames='[{"delay":1200,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'

									data-x="['center']"
									data-y="['center']"
									data-hoffset="['0', '0', '0', '0']"
									data-voffset="['-100', '-100', '-100', '-120']"

									data-width="['960','960','768','576']"
									data-height="['auto']"

									data-paddingtop="[0, 0, 0, 0]"
									data-paddingright="[15, 15, 15, 15]"
									data-paddingbottom="[0, 0, 0, 0]"
									data-paddingleft="[15, 15, 15, 15]"

									data-basealign="slide"
									data-responsive_offset="on"
								>
									<img src="/images/icons/symbol-42.png" alt="IMG" />
								</div>

								{/*    */}
								<h2 className="tp-caption tp-resizeme layer2"
									data-frames='[{"delay":500,"speed":1500,"frame":"0","from":"y:bottom;rX:-20deg;rY:-20deg;rZ:0deg;","to":"o:1;","ease":"Power3.easeOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'

									data-visibility="['on', 'on', 'on', 'on']"

									data-fontsize="['94', '94', '80', '70']"
									data-lineheight="['100', '100', '90', '80']"
									data-color="['#fff']"
									data-textalign="['center', 'center', 'center', 'center']"

									data-x="['center']"
									data-y="['center']"
									data-hoffset="['0', '0', '0', '0']"
									data-voffset="['20', '20', '20', '20']"

									data-width="['960','960','768','576']"
									data-height="['auto']"
									data-whitespace="['normal']"

									data-paddingtop="[0, 0, 0, 0]"
									data-paddingright="[15, 15, 15, 15]"
									data-paddingbottom="[0, 0, 0, 0]"
									data-paddingleft="[15, 15, 15, 15]"

									data-basealign="slide"
									data-responsive_offset="on"
								>
									Quality food
								</h2>

								{/*    */}
								<div className="tp-caption tp-resizeme flex-c-m flex-w layer3"
									data-frames='[{"delay":2600,"speed":1500,"frame":"0","from":"z:0;rX:0;rY:0;rZ:0;sX:0.6;sY:0.6;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"auto:auto;","ease":"Power3.easeInOut"}]'

									data-x="['center']"
									data-y="['center']"
									data-hoffset="['0', '0', '0', '0']"
									data-voffset="['132', '132', '132', '152']"

									data-width="['960','960','768','576']"
									data-height="['auto']"

									data-paddingtop="[0, 0, 0, 0]"
									data-paddingright="[15, 15, 15, 15]"
									data-paddingbottom="[0, 0, 0, 0]"
									data-paddingleft="[15, 15, 15, 15]"

									data-basealign="slide"
									data-responsive_offset="on"
								>
									<img src="/images/icons/symbol-19.png" alt="IMG" />
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>

			{/*  About  */}
			<section className="sec-about bg0 p-t-120 flex-w flex-str">
				<div className="size-w-46 p-rl-15 p-t-72 order-lg-2 respon13">
					<div className="size-a-1 flex-col-l p-b-25">
						<div className="txt-m-201 cl10 how-pos1-parent m-b-14">
							About Us

							<div className="how-pos1">
								<img src="/images/icons/symbol-02.png" alt="IMG" />
							</div>
						</div>

						<h3 className="txt-l-101 cl3 respon1">
							who we are
						</h3>
					</div>

					<p className="txt-s-116 cl6">
						It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.
					</p>

					<div className="flex-w flex-sb p-t-55">
						<div className="flex-col-c-m size-w-47 how-shadow3 p-rl-12 p-t-45 p-b-40 m-b-23 respon14">
							<img src="/images/icons/symbol-37-min.png" alt="SYMBOL" />
							<span className="txt-s-117 cl10 txt-center p-t-22">
								Healthy food
							</span>
						</div>

						<div className="flex-col-c-m size-w-47 how-shadow3 p-rl-12 p-t-45 p-b-40 m-b-23 respon14">
							<img src="/images/icons/symbol-38-min.png" alt="SYMBOL" />
							<span className="txt-s-117 cl10 txt-center p-t-22">
								Do jobs only
							</span>
						</div>

						<div className="flex-col-c-m size-w-47 how-shadow3 p-rl-12 p-t-45 p-b-40 m-b-23 respon14">
							<img src="/images/icons/symbol-39-min.png" alt="SYMBOL" />
							<span className="txt-s-117 cl10 txt-center p-t-22">
								Fresh produce
							</span>
						</div>

						<div className="flex-col-c-m size-w-47 how-shadow3 p-rl-12 p-t-45 p-b-40 m-b-23 respon14">
							<img src="/images/icons/symbol-40-min.png" alt="SYMBOL" />
							<span className="txt-s-117 cl10 txt-center p-t-22">
								Best equipment
							</span>
						</div>

						<div className="flex-col-c-m size-w-47 how-shadow3 p-rl-12 p-t-45 p-b-40 m-b-23 respon14">
							<img src="/images/icons/symbol-41-min.png" alt="SYMBOL" />
							<span className="txt-s-117 cl10 txt-center p-t-22">
								Organic nature
							</span>
						</div>

						<div className="flex-col-c-m size-w-47 how-shadow3 p-rl-12 p-t-45 p-b-40 m-b-23 respon14">
							<img src="/images/icons/symbol-43.png" alt="SYMBOL" />
							<span className="txt-s-117 cl10 txt-center p-t-22">
								Early delivery
							</span>
						</div>
					</div>
				</div>

				<div className="size-w-45 flex-b p-rl-40 p-t-30 order-lg-1 w-full-lg p-rl-15-sm">
					<div className="wrap-pic-max-w">
						<img src="/images/other-11.jpg" alt="IMG" />
					</div>
				</div>
			</section>

			{/*  Gallery  */}
			<section className="sec-gallery bg12 p-t-145 p-b-100">
				<div className="container">
					<div className="size-a-1 flex-col-c-m p-b-70">
						<div className="txt-center txt-m-201 cl10 how-pos1-parent m-b-14">
							Fresh Vegetables

							<div className="how-pos1">
								<img src="/images/icons/symbol-02.png" alt="IMG" />
							</div>
						</div>

						<h3 className="txt-center txt-l-101 cl3 respon1">
							Our Gallery
						</h3>
					</div>

					<div className="row gallery-lb">
						<div className="col-sm-10 col-md-6 col-lg-4 p-b-30 m-rl-auto">
							<div className="gallery-item wrap-pic-w">
								<img src="/images/gallery-01.jpg" alt="GALLERY" />

								<div className="gallery-overlay flex-c-m trans-04">
									<div className="gallery-content flex-w flex-c-m w-full">
										<a className="flex-c-m gallery-btn m-all-5 trans-04 js-show-gallery" href="/images/gallery-01.jpg">
											<img src="/images/icons/icon-open.png" alt="OPEN" />
										</a>

										<a href="#" className="flex-c-m gallery-btn m-all-5 trans-04">
											<img src="/images/icons/icon-link.png" alt="LINK" />
										</a>

										<div className="gallery-txt flex-col-c p-rl-15 p-t-10 trans-04">
											<span className="txt-m-109 cl0 txt-center">
												Nam libero tempore
											</span>

											<span className="txt-s-106 cl0 txt-center">
												Vegetable
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-sm-10 col-md-6 col-lg-4 p-b-30 m-rl-auto">
							<div className="gallery-item wrap-pic-w">
								<img src="/images/gallery-02.jpg" alt="GALLERY" />

								<div className="gallery-overlay flex-c-m trans-04">
									<div className="gallery-content flex-w flex-c-m w-full">
										<a className="flex-c-m gallery-btn m-all-5 trans-04 js-show-gallery" href="/images/gallery-02.jpg">
											<img src="/images/icons/icon-open.png" alt="OPEN" />
										</a>

										<a href="#" className="flex-c-m gallery-btn m-all-5 trans-04">
											<img src="/images/icons/icon-link.png" alt="LINK" />
										</a>

										<div className="gallery-txt flex-col-c p-rl-15 p-t-10 trans-04">
											<span className="txt-m-109 cl0 txt-center">
												Nam libero tempore
											</span>

											<span className="txt-s-106 cl0 txt-center">
												Vegetable
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-sm-10 col-md-6 col-lg-4 p-b-30 m-rl-auto">
							<div className="gallery-item wrap-pic-w">
								<img src="/images/gallery-03.jpg" alt="GALLERY" />

								<div className="gallery-overlay flex-c-m trans-04">
									<div className="gallery-content flex-w flex-c-m w-full">
										<a className="flex-c-m gallery-btn m-all-5 trans-04 js-show-gallery" href="/images/gallery-03.jpg">
											<img src="/images/icons/icon-open.png" alt="OPEN" />
										</a>

										<a href="#" className="flex-c-m gallery-btn m-all-5 trans-04">
											<img src="/images/icons/icon-link.png" alt="LINK" />
										</a>

										<div className="gallery-txt flex-col-c p-rl-15 p-t-10 trans-04">
											<span className="txt-m-109 cl0 txt-center">
												Nam libero tempore
											</span>

											<span className="txt-s-106 cl0 txt-center">
												Vegetable
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-sm-10 col-md-6 col-lg-4 p-b-30 m-rl-auto">
							<div className="gallery-item wrap-pic-w">
								<img src="/images/gallery-04.jpg" alt="GALLERY" />

								<div className="gallery-overlay flex-c-m trans-04">
									<div className="gallery-content flex-w flex-c-m w-full">
										<a className="flex-c-m gallery-btn m-all-5 trans-04 js-show-gallery" href="/images/gallery-04.jpg">
											<img src="/images/icons/icon-open.png" alt="OPEN" />
										</a>

										<a href="#" className="flex-c-m gallery-btn m-all-5 trans-04">
											<img src="/images/icons/icon-link.png" alt="LINK" />
										</a>

										<div className="gallery-txt flex-col-c p-rl-15 p-t-10 trans-04">
											<span className="txt-m-109 cl0 txt-center">
												Nam libero tempore
											</span>

											<span className="txt-s-106 cl0 txt-center">
												Vegetable
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-sm-10 col-md-6 col-lg-4 p-b-30 m-rl-auto">
							<div className="gallery-item wrap-pic-w">
								<img src="/images/gallery-05.jpg" alt="GALLERY" />

								<div className="gallery-overlay flex-c-m trans-04">
									<div className="gallery-content flex-w flex-c-m w-full">
										<a className="flex-c-m gallery-btn m-all-5 trans-04 js-show-gallery" href="/images/gallery-05.jpg">
											<img src="/images/icons/icon-open.png" alt="OPEN" />
										</a>

										<a href="#" className="flex-c-m gallery-btn m-all-5 trans-04">
											<img src="/images/icons/icon-link.png" alt="LINK" />
										</a>

										<div className="gallery-txt flex-col-c p-rl-15 p-t-10 trans-04">
											<span className="txt-m-109 cl0 txt-center">
												Nam libero tempore
											</span>

											<span className="txt-s-106 cl0 txt-center">
												Vegetable
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-sm-10 col-md-6 col-lg-4 p-b-30 m-rl-auto">
							<div className="gallery-item wrap-pic-w">
								<img src="/images/gallery-06.jpg" alt="GALLERY" />

								<div className="gallery-overlay flex-c-m trans-04">
									<div className="gallery-content flex-w flex-c-m w-full">
										<a className="flex-c-m gallery-btn m-all-5 trans-04 js-show-gallery" href="/images/gallery-06.jpg">
											<img src="/images/icons/icon-open.png" alt="OPEN" />
										</a>

										<a href="#" className="flex-c-m gallery-btn m-all-5 trans-04">
											<img src="/images/icons/icon-link.png" alt="LINK" />
										</a>

										<div className="gallery-txt flex-col-c p-rl-15 p-t-10 trans-04">
											<span className="txt-m-109 cl0 txt-center">
												Nam libero tempore
											</span>

											<span className="txt-s-106 cl0 txt-center">
												Vegetable
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex-w flex-c p-t-40">
						<a href="#" className="flex-c-m txt-s-103 cl0 size-a-15 how-btn1 bg10 hov-btn2 trans-04">
							Read more
							<span className="lnr lnr-chevron-right m-l-7"></span>
							<span className="lnr lnr-chevron-right"></span>
						</a>
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



					{/*  Proper Category Cards Grid  */}
					<div className="category-cards-grid">
						{category && category.length > 0 ? (
							category.map((data, index) => (
								<div className="category-card-col" key={data._id || index}>
									<Link to={`/products?id=${data._id}`} className="category-card">
										<div className="category-card-img-wrap">
											<span className="category-card-badge">
												<i className="fa fa-leaf"></i> 100% Organic
											</span>
											<img
												src={`/uploads/${data.catimg}`}
												alt={data.catname}
												className="category-card-img"
												onError={(e) => {
													e.target.onerror = null;
													e.target.src = "/images/other-02.png";
												}}
											/>
											<div className="category-card-img-overlay"></div>
										</div>

										<div className="category-card-body">
											<div>
												<span className="category-card-tag">Fresh Category</span>
												<h4 className="category-card-title">{data.catname}</h4>
											</div>
											<div className="category-card-btn">
												<span>Explore Products</span>
												<i className="fa fa-arrow-right"></i>
											</div>
										</div>
									</Link>
								</div>
							))
						) : (
							<div className="category-loading-box">
								<div className="spinner-border text-success" role="status" style={{ width: "3rem", height: "3rem" }}>
									<span className="sr-only">Loading...</span>
								</div>
								<p style={{ marginTop: "14px", color: "#666", fontSize: "15px" }}>Loading fresh categories...</p>
							</div>
						)}
					</div>
				</div>
			</div>

			{/*  Delivery  */}
			<section className="sec-delivery bg-img1 p-t-145 p-b-100" style={{ backgroundImage: "url('/images/bg-02.jpg')" }}>
				<div className="container">
					<div className="size-a-1 flex-col-c-m p-b-60">
						<div className="txt-center txt-m-201 cl10 how-pos1-parent m-b-14">
							Organic food

							<div className="how-pos1">
								<img src="/images/icons/symbol-02.png" alt="IMG" />
							</div>
						</div>

						<h3 className="txt-center txt-l-101 cl3 respon1">
							Delivery Process
						</h3>
					</div>

					{/*   */}
					<div className="txt-center pos-relative">
						<img className="max-w-full" src="/images/other-12.png" alt="IMG" />
					</div>
				</div>
			</section>

			{/*  Product2  */}
			<section className="sec-product2 bg0 p-t-145 p-b-35">
				<div className="container">
					<div className="row">
						<div className="col-sm-10 col-md-12 col-lg-4 p-b-20 m-rl-auto-md">
							<div className="p-r-20 p-rl-0-xl p-b-45 p-t-5 s-full">
								<div className="s-full bg-img1 flex-col-c p-t-60 p-b-300 p-rl-15" style={{ backgroundImage: "url('/images/bg-06.jpg')" }}>
									<span className="txt-center p-b-12">
										<span className="txt-m-102 cl3">
											organici
										</span>

										<span className="txt-m-109 cl3">
											products
										</span>
									</span>

									<h4 className="txt-l-113 cl3 txt-center respon1">
										Fresh lemon
									</h4>

									<div className="flex-w flex-c p-t-38">
										<a href="shop-sidebar-list.html" className="flex-c-m txt-s-118 cl0 size-a-20 how-btn1 bg10 hov-btn2 trans-04">
											Shop now
											<span className="lnr lnr-chevron-right m-b-1 m-l-6"></span>
											<span className="lnr lnr-chevron-right m-b-1"></span>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div className="col-sm-10 col-md-6 col-lg-4 p-b-20 m-rl-auto-md">
							<div className="p-rl-10 p-rl-0-xl">
								{/*  slide2  */}

								<div className="wrap-slick2">
									<div className="p-b-20 p-rl-15">
										<span className="txt-m-107 cl9">
											new form the farm
										</span>

										<div className="flex-w flex-t p-t-5">
											<h4 className="size-w-5 m-r-20">
												<span className="txt-l-103 cl6">
													organic
												</span>

												<span className="txt-l-104 cl3">
													special
												</span>
											</h4>

											<div className="wrap-arrow-slick2 flex-w m-t-6"></div>
										</div>
									</div>

									<div className="slick2">

										{/*  item product2  */}
										{fruits.map((a, index) =>
											<Link to={`/detail?id=${a._id}`} className="flex-w flex-str size-h-1 bo-all-1 bocl12 hov3 trans-04 m-b-30" key={index}>
												<div className="size-w-6 flex-c-m wrap-pic-max-s">
													<img src={`/uploads/${a.image}`} alt="IMG-PRODUCT" style={{height:"150px",width:"150px"}} />
												</div>

												<div className="size-w-7 flex-col-m p-l-30 p-tb-15 p-r-15 p-l-0-ssm">
													<span className="txt-m-103 cl3">
														{a.name}
													</span>

													<div className="how-line1 m-t-14 m-b-19"></div>

													<span className="txt-m-104 cl9">
														{a.price}$
													</span>
												</div>
											</Link>
										)}

									</div>


								</div>
							</div>
						</div>

						<div className="col-sm-10 col-md-6 col-lg-4 p-b-20 m-rl-auto-md">
							<div className="p-l-20 p-rl-0-xl">
								{/*  slide2  */}
								<div className="wrap-slick2">
									<div className="p-b-20 p-rl-15">
										<span className="txt-m-107 cl9">
											agricultural products
										</span>

										<div className="flex-w flex-t p-t-5">
											<h4 className="size-w-5 m-r-20">
												<span className="txt-l-103 cl6">
													organic
												</span>

												<span className="txt-l-104 cl3">
													popular
												</span>
											</h4>

											<div className="wrap-arrow-slick2 flex-w m-t-6"></div>
										</div>
									</div>

									<div className="slick2">
										<div className="item-slick2 p-all-15">
											{/*  item product2  */}
											{vegs.map((a, index) =>
												<Link to={`/detail?id=${a._id}`} className="flex-w flex-str size-h-1 bo-all-1 bocl12 hov3 trans-04 m-b-30" key={index}>
													<div className="size-w-6 flex-c-m wrap-pic-max-s">
														<img src={`/uploads/${a.image}`} alt="IMG-PRODUCT"  style={{height:"150px",width:"150px"}}/>
													</div>

													<div className="size-w-7 flex-col-m p-l-30 p-tb-15 p-r-15 p-l-0-ssm">
														<span className="txt-m-103 cl3">
															{a.name}
														</span>

														<div className="how-line1 m-t-14 m-b-19"></div>

														<span className="txt-m-104 cl9">
															{a.price}$
														</span>
													</div>
												</Link>
											)}
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/*  Incentives  */}
			<section className="sec-incen bg12 p-t-70 p-b-10">
				<div className="container">
					<div className="row">
						<div className="col-sm-10 order-md-2 col-md-6 m-rl-auto">
							<div className="h-full flex-m p-l-30 p-rl-0-lg">
								<div className="p-t-77 p-b-50">
									<div className="size-a-1 flex-col-l p-b-29">
										<div className="txt-m-201 cl10 how-pos1-parent m-b-14">
											Benefit For Guests

											<div className="how-pos1">
												<img src="/images/icons/symbol-02.png" alt="IMG" />
											</div>
										</div>

										<h3 className="txt-l-101 cl3 respon1">
											Our incentives
										</h3>
									</div>

									<p className="txt-s-101 cl9">
										Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor-emque laudantium, totam rem aperiam, eaque ipsa quae.
									</p>

									<ul className="p-t-67">
										<li className="flex-w flex-t p-b-40">
											<div className="size-w-48 wrap-pic-max-w txt-left">
												<img src="/images/icons/symbol-48.png" alt="SYMBOL" />
											</div>

											<div className="size-w-49">
												<h4 className="txt-m-103 cl3 p-b-6">
													Free Shipping
												</h4>

												<p className="txt-s-101 cl6">
													For orders of $ 2000, apply to all products
												</p>
											</div>
										</li>

										<li className="flex-w flex-t p-b-40">
											<div className="size-w-48 wrap-pic-max-w txt-left">
												<img src="/images/icons/symbol-49.png" alt="SYMBOL" />
											</div>

											<div className="size-w-49">
												<h4 className="txt-m-103 cl3 p-b-6">
													Customer Support
												</h4>

												<p className="txt-s-101 cl6">
													Need help: (434) 796 5398
												</p>
											</div>
										</li>

										<li className="flex-w flex-t p-b-40">
											<div className="size-w-48 wrap-pic-max-w txt-left">
												<img src="/images/icons/symbol-50.png" alt="SYMBOL" />
											</div>

											<div className="size-w-49">
												<h4 className="txt-m-103 cl3 p-b-6">
													Secure Payments
												</h4>

												<p className="txt-s-101 cl6">
													Secure Confirmed
												</p>
											</div>
										</li>

										<li className="flex-w flex-t p-b-40">
											<div className="size-w-48 wrap-pic-max-w txt-left">
												<img src="/images/icons/symbol-51.png" alt="SYMBOL" />
											</div>

											<div className="size-w-49">
												<h4 className="txt-m-103 cl3 p-b-6">
													100% Organic Certified
												</h4>

												<p className="txt-s-101 cl6">
													100% Organic Certified Food
												</p>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>

						<div className="col-sm-10 order-md-1 col-md-6 m-rl-auto">
							<div className="flex-m h-full p-r-30 p-rl-0-lg">
								<div className="wrap-pic-max-s">
									<img src="/images/other-13.jpg" alt="IMG" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/*  Blog  */}
			<section className="sec-blog bg0 p-t-145 p-b-64">
				<div className="container">
					<div className="size-a-1 flex-col-c-m p-b-70">
						<div className="txt-center txt-m-201 cl10 how-pos1-parent m-b-14">
							Keep Updated With Us

							<div className="how-pos1">
								<img src="/images/icons/symbol-02.png" alt="IMG" />
							</div>
						</div>

						<h3 className="txt-center txt-l-101 cl3 respon1">
							From our blog
						</h3>
					</div>

					<div className="row">
						<div className="col-sm-6 col-md-4 p-b-30">
							<div>
								<a href="blog-single.html" className="wrap-pic-w hov4">
									<img src="/images/blog-11.jpg" alt="BLOG" />
								</a>

								<div className="p-t-18">
									<span className="txt-s-107 cl3">
										Dec 20.2018
									</span>

									<h4 className="p-t-5 p-b-14">
										<a href="blog-single.html" className="txt-m-109 cl3 hov-cl10 trans-04">
											At vero eos et accusamus et iusto
										</a>
									</h4>

									<div className="flex-w flex-m">
										<div className="p-r-19">
											<span className="txt-s-111 cl9">
												Post by
											</span>

											<span className="txt-s-119 cl6">
												Evelyn Guzman
											</span>
										</div>

										<div>
											<span className="txt-s-111 cl9">
												22 Comments
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4 p-b-30">
							<div>
								<a href="blog-single.html" className="wrap-pic-w hov4">
									<img src="/images/blog-12.jpg" alt="BLOG" />
								</a>

								<div className="p-t-18">
									<span className="txt-s-107 cl3">
										March 18.2018
									</span>

									<h4 className="p-t-5 p-b-14">
										<a href="blog-single.html" className="txt-m-109 cl3 hov-cl10 trans-04">
											Temporibus autem quibusdam
										</a>
									</h4>

									<div className="flex-w flex-m">
										<div className="p-r-19">
											<span className="txt-s-111 cl9">
												Post by
											</span>

											<span className="txt-s-119 cl6">
												Samuel Stewart
											</span>
										</div>

										<div>
											<span className="txt-s-111 cl9">
												15 Comments
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-sm-6 col-md-4 p-b-30">
							<div>
								<a href="blog-single.html" className="wrap-pic-w hov4">
									<img src="/images/blog-13.jpg" alt="BLOG" />
								</a>

								<div className="p-t-18">
									<span className="txt-s-107 cl3">
										June 05.2018
									</span>

									<h4 className="p-t-5 p-b-14">
										<a href="blog-single.html" className="txt-m-109 cl3 hov-cl10 trans-04">
											Excepteur sint occaecat cupidatat
										</a>
									</h4>

									<div className="flex-w flex-m">
										<div className="p-r-19">
											<span className="txt-s-111 cl9">
												Post by
											</span>

											<span className="txt-s-119 cl6">
												Justin Foster
											</span>
										</div>

										<div>
											<span className="txt-s-111 cl9">
												53 Comments
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/*  Subscribe  */}
			<section className="sec-subscribe bg0 how3-parent">
				<div className="container">
					<div className="bg10 p-tb-45">
						<div className="row">
							<div className="col-md-5 p-tb-15">
								<div className="h-full flex-col-m p-l-70 p-rl-15-md">
									<h4 className="txt-m-110 cl0 p-b-4">
										Subscribe Newsletter.
									</h4>

									<p className="txt-s-101 cl0">
										Get e-mail updates about our latest shop and special offers.
									</p>
								</div>
							</div>

							<div className="col-md-7 p-tb-15">
								<form className="flex-w flex-m h-full p-r-70 p-l-50 p-rl-15-md">
									<input className="size-a-6 txt-s-106 cl6 plh0 p-rl-30 w-full-sm" type="text" name="email" placeholder="Your email address" />
									<button className="bg3 size-a-5 txt-s-107 cl0 p-rl-15 trans-04 hov-btn3 mt-4 mt-sm-0">
										Subscribe
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>

				<div className="how3 bg3"></div>
			</section>


		</>
	)
}
export default Home
