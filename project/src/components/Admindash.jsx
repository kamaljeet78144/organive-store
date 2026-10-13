import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js'
import { Pie, Bar } from "react-chartjs-2"
import axios from "axios";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);


export const Admindash = () => {

    const [category, setcategory] = useState([])
    const [product, setproduct] = useState([])

    const [cartdata, setcartdata] = useState([])
    const [revenue, setrevenue] = useState(0)
    const[user,setuser]=useState([])


    // product api get from allpro.jsx 
    useEffect(() => { findd(); found(); rev();reg() }, [])

    const findd = async () => {
        try {
            const found = await axios.get("http://localhost:9000/api/getproduct")
            if (found.data.statuscode == 1) {
                setproduct(found.data.foundproduct)
            }

            else { alert("not found") }

        }
        catch (err) { alert(err) }

    }

    // category api get from addcat.jsx



    const found = async () => {
        const result = await fetch("http://localhost:9000/api/getcategory", { method: "get" })
        if (result.ok) {
            const res = await result.json()
            if (res.statuscode === 1) {
                
                setcategory(res.category)
            }
            else {
                alert(res.msg)
            }
        }
    }

    // get api take from checkout api and applied in admin dassh total revenue section,total order section 

  




    const rev = async () => {
        const revdata = await fetch("http://localhost:9000/api/allorders", { method: "get" })
        if (revdata) {
            const data = await revdata.json()
            if (data.statuscode == 1) {
                setcartdata(data.allorders)

                // total revenue calculate
                const tot = data.allorders.reduce((sum, item) => {
                    return sum + parseFloat(item.Totalprice)
                }, 0)
               
                const rev = tot.toFixed(2)
                 setrevenue(rev)
               

            }
            else {
                alert("an error occured")
            }
        }

    }


    // get api from register get api and applied in section registered users 

const reg =async()=>{
    const regdata=await fetch("http://localhost:9000/api/user",{method:"get"})
    if(regdata){
        const data=await regdata.json()
        if(data.statuscode==1){
            setuser(data.registeruser)

        }
        else{alert("an error occured")}
    }
}





    //  pie data of category and products 

    const piedata = {
        labels: ["products", "categories"],
        datasets: [
            {
                label: "total listing",
                data: [product.length, category.length],
                backgroundColor: [
                    "#818CF8", // Soft Lavender (products)
                    "#F472B6"  // Soft Rose Pink (categories)
                ],
                borderColor: ["#ffffff", "#ffffff"],
                borderWidth: 2
            }
        ]
    }

    const pieOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    usePointStyle: true,
                    boxWidth: 8,
                    padding: 16,
                    font: { size: 12 }
                }
            }
        }
    }

    // Dummy Weekly Activity for Chart Design
    const barData = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Orders",
                data: [14, 22, 18, 27, 24, 35, 30],
                backgroundColor: "#80b435",
                borderRadius: 6,
            },
            {
                label: "Sales ($100)",
                data: [19, 28, 22, 34, 30, 42, 38],
                backgroundColor: "#dce9c9",
                borderRadius: 6,
            }
        ]
    }

    const barOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    usePointStyle: true,
                    boxWidth: 8,
                    padding: 16,
                    font: { size: 12 }
                }
            }
        },
        scales: {
            x: {
                grid: { display: false }
            },
            y: {
                grid: { color: "#f0f2f5" }
            }
        }
    }





    // --- Dummy Data (Simple Arrays for easy editing) ---
    const stats = [
        {
            title: "Total Revenue",
            value: `$`+revenue,
            subtitle: "+18% from last month",
            icon: "fa-money",
            color: "#80b435",
        },
        {
            title: "Total Orders",
            value: cartdata.length,
            subtitle: "14 orders today",
            icon: "fa-shopping-bag",
            color: "#3b82f6",
        },
        {
            title: "Total Products",
            value: product.length,
            subtitle: `In ${category.length} categories`,
            icon: "fa-cubes",
            color: "#f59e0b",
        },
        {
            title: "Registered Users",
            value: user.length,
            subtitle: "+12 new this week",
            icon: "fa-users",
            color: "#10b981",
        },
    ];

    const recentOrders = [
        { id: "#ODR-1092", customer: "Sophia Turner", product: "Organic Apples, Broccoli", total: "$45.00", status: "Completed" },
        { id: "#ODR-1093", customer: "James Wilson", product: "Fresh Strawberries", total: "$28.50", status: "Processing" },
        { id: "#ODR-1094", customer: "Emma Davis", product: "Natural Pure Honey (500g)", total: "$35.00", status: "Pending" },
        { id: "#ODR-1095", customer: "Michael Brown", product: "Farm Fresh Tomatoes", total: "$19.00", status: "Completed" },
        { id: "#ODR-1096", customer: "Olivia Martinez", product: "Organic Spinach, Carrots", total: "$22.00", status: "Cancelled" },
    ];

    const topSelling = [
        { name: "Organic Red Apples", sales: "142 Sold", price: "$4.99 / kg", image: "/images/other-01.jpg" },
        { name: "Fresh Farm Broccoli", sales: "118 Sold", price: "$3.50 / kg", image: "/images/other-02.jpg" },
        { name: "Pure Organic Honey", sales: "95 Sold", price: "$12.00 / jar", image: "/images/other-03.jpg" },
        { name: "Sweet Fresh Strawberries", sales: "84 Sold", price: "$6.50 / box", image: "/images/other-04.jpg" },
    ];

    // Status badge style helper
    const getBadgeStyle = (status) => {
        switch (status) {
            case "Completed":
                return { backgroundColor: "#e8f5e9", color: "#2e7d32", border: "1px solid #c8e6c9" };
            case "Processing":
                return { backgroundColor: "#e3f2fd", color: "#1565c0", border: "1px solid #bbdefb" };
            case "Pending":
                return { backgroundColor: "#fffde7", color: "#f57f17", border: "1px solid #fff59d" };
            case "Cancelled":
                return { backgroundColor: "#ffebee", color: "#c62828", border: "1px solid #ffcdd2" };
            default:
                return { backgroundColor: "#f5f5f5", color: "#616161", border: "1px solid #e0e0e0" };
        }
    };

    return (
        <>
            {/* ================= 1. PAGE TITLE BANNER (Matches Website Style) ================= */}
            <section className="how-overlay2 bg-img1" style={{ backgroundImage: "url('/images/bg-07.jpg')" }}>
                <div className="container">
                    <div className="txt-center p-t-160 p-b-165">
                        <h2 className="txt-l-101 cl0 txt-center p-b-14 respon1">
                            Admin Dashboard
                        </h2>

                        <span className="txt-m-201 cl0 flex-c-m flex-w">
                            <Link to="/" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
                                Home
                            </Link>
                            <span>/ Admin Dashboard</span>
                        </span>
                    </div>
                </div>
            </section>

            {/* ================= 2. MAIN DASHBOARD CONTENT ================= */}
            <section className="container bg0 p-t-80 p-b-90">

                {/* Section Title with Leaf Symbol Icon */}
                <div className="size-a-1 flex-col-c-m p-b-50">
                    <div className="txt-center txt-m-201 cl10 how-pos1-parent m-b-14">
                        Store Management
                        <div className="how-pos1">
                            <img src="/images/icons/symbol-02.png" alt="IMG" />
                        </div>
                    </div>

                    <h3 className="txt-center txt-l-101 cl3 respon1">
                        Admin Overview & Control Panel
                    </h3>
                </div>

                {/* Quick Action Navigation Buttons */}
                <div className="flex-w flex-c-m m-b-45" style={{ gap: "12px" }}>
                    <Link
                        to="/addproduct"
                        className="flex-c-m txt-s-103 cl0 bg10 size-a-2 hov-btn2 trans-04 p-rl-25"
                        style={{ borderRadius: "30px", textDecoration: "none", height: "45px" }}
                    >
                        <i className="fa fa-plus m-r-8"></i> Add New Product
                    </Link>

                    <Link
                        to="/addcat"
                        className="flex-c-m txt-s-103 cl0 trans-04 p-rl-25"
                        style={{ backgroundColor: "#333333", borderRadius: "30px", textDecoration: "none", height: "45px" }}
                    >
                        <i className="fa fa-folder-open m-r-8"></i> Add Category
                    </Link>

                    <Link
                        to="/allpro"
                        className="flex-c-m txt-s-103 cl3 trans-04 p-rl-25"
                        style={{ backgroundColor: "#f4f6f8", border: "1px solid #dce0e5", borderRadius: "30px", textDecoration: "none", height: "45px" }}
                    >
                        <i className="fa fa-list m-r-8"></i> View All Products
                    </Link>
                </div>

                {/* --- 4 Stats Cards Grid --- */}
                <div className="row p-b-50">
                    {stats.map((stat, index) => (
                        <div key={index} className="col-sm-6 col-lg-3 p-b-25">
                            <div
                                style={{
                                    border: "1px solid #e8ede4",
                                    borderRadius: "10px",
                                    padding: "24px 20px",
                                    backgroundColor: "#ffffff",
                                    boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                                    transition: "all 0.3s ease",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#666" }}>
                                        {stat.title}
                                    </span>
                                    <div
                                        style={{
                                            width: "44px",
                                            height: "44px",
                                            borderRadius: "50%",
                                            backgroundColor: `${stat.color}15`,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: stat.color,
                                            fontSize: "18px",
                                        }}
                                    >
                                        <i className={`fa ${stat.icon}`}></i>
                                    </div>
                                </div>
                                <h4 style={{ fontSize: "26px", fontWeight: "700", color: "#333333", margin: "0 0 6px 0" }}>
                                    {stat.value}
                                </h4>
                                <span style={{ fontSize: "12px", color: "#80b435", fontWeight: "600" }}>
                                    {stat.subtitle}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ================= CHARTS & ANALYTICS SECTION ================= */}
                <div className="row p-b-50">
                    {/* Left Chart: Inventory Distribution (Pie Chart) */}
                    <div className="col-lg-5 p-b-25">
                        <div
                            style={{
                                border: "1px solid #e8ede4",
                                borderRadius: "12px",
                                padding: "26px 24px",
                                backgroundColor: "#ffffff",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                                <div>
                                    <h4 style={{ fontSize: "17px", fontWeight: "700", color: "#333333", margin: 0 }}>
                                        <i className="fa fa-pie-chart m-r-8" style={{ color: "#818CF8" }}></i>
                                        Catalog Distribution
                                    </h4>
                                    <span style={{ fontSize: "12px", color: "#888888" }}>
                                        Products vs Categories ratio
                                    </span>
                                </div>
                                <span
                                    style={{
                                        fontSize: "11px",
                                        fontWeight: "600",
                                        padding: "4px 10px",
                                        borderRadius: "20px",
                                        backgroundColor: "#f4f6f8",
                                        color: "#555555",
                                    }}
                                >
                                    Live Catalog
                                </span>
                            </div>

                            {/* Pie Chart Canvas Container */}
                            <div style={{ position: "relative", height: "240px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <Pie data={piedata} options={pieOptions} />
                            </div>

                            {/* Summary Counter Pills */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    marginTop: "auto",
                                    paddingTop: "16px",
                                    borderTop: "1px solid #f6f8f5",
                                }}
                            >
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: "11px", color: "#888888", fontWeight: "500" }}>Products</div>
                                    <div style={{ fontSize: "18px", fontWeight: "700", color: "#818CF8" }}>
                                        {product.length}
                                    </div>
                                </div>
                                <div style={{ width: "1px", backgroundColor: "#f0f0f0" }}></div>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: "11px", color: "#888888", fontWeight: "500" }}>Categories</div>
                                    <div style={{ fontSize: "18px", fontWeight: "700", color: "#F472B6" }}>
                                        {category.length}
                                    </div>
                                </div>
                                <div style={{ width: "1px", backgroundColor: "#f0f0f0" }}></div>
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ fontSize: "11px", color: "#888888", fontWeight: "500" }}>Total Listed</div>
                                    <div style={{ fontSize: "18px", fontWeight: "700", color: "#333333" }}>
                                        {product.length + category.length}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Chart: Weekly Activity Overview (Bar Chart) */}
                    <div className="col-lg-7 p-b-25">
                        <div
                            style={{
                                border: "1px solid #e8ede4",
                                borderRadius: "12px",
                                padding: "26px 24px",
                                backgroundColor: "#ffffff",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                                <div>
                                    <h4 style={{ fontSize: "17px", fontWeight: "700", color: "#333333", margin: 0 }}>
                                        <i className="fa fa-bar-chart m-r-8" style={{ color: "#80b435" }}></i>
                                        Weekly Store Analytics
                                    </h4>
                                    <span style={{ fontSize: "12px", color: "#888888" }}>
                                        Orders and sales volume performance
                                    </span>
                                </div>
                                <span
                                    style={{
                                        fontSize: "11px",
                                        fontWeight: "600",
                                        padding: "4px 10px",
                                        borderRadius: "20px",
                                        backgroundColor: "#f0f7e9",
                                        color: "#80b435",
                                    }}
                                >
                                    +14.2% Growth
                                </span>
                            </div>

                            {/* Bar Chart Canvas Container */}
                            <div style={{ position: "relative", height: "240px", width: "100%" }}>
                                <Bar data={barData} options={barOptions} />
                            </div>

                            {/* Quick Insights Footer */}
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    marginTop: "auto",
                                    paddingTop: "16px",
                                    borderTop: "1px solid #f6f8f5",
                                    fontSize: "12px",
                                    color: "#666666",
                                    flexWrap: "wrap",
                                    gap: "8px",
                                }}
                            >
                                <span><i className="fa fa-circle m-r-6" style={{ color: "#80b435", fontSize: "9px" }}></i> Peak Volume: <strong>Saturday</strong></span>
                                <span><i className="fa fa-check-circle m-r-6" style={{ color: "#80b435" }}></i> Delivery rate: <strong>98.4%</strong></span>
                                <span><i className="fa fa-trophy m-r-6" style={{ color: "#f59e0b" }}></i> Target: <strong>On Track</strong></span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- Main 2-Column Section --- */}
                <div className="row">

                    {/* Left Column: Recent Orders Table */}
                    <div className="col-lg-8 p-b-40">
                        <div
                            style={{
                                border: "1px solid #e8ede4",
                                borderRadius: "10px",
                                padding: "28px 24px",
                                backgroundColor: "#ffffff",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                            }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                                <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#333333", margin: 0 }}>
                                    <i className="fa fa-shopping-cart m-r-8" style={{ color: "#80b435" }}></i>
                                    Recent Customer Orders
                                </h4>
                                <span style={{ fontSize: "13px", color: "#80b435", fontWeight: "600" }}>
                                    Updated Today
                                </span>
                            </div>

                            <div style={{ overflowX: "auto" }}>
                                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                                    <thead>
                                        <tr style={{ borderBottom: "2px solid #f0f3eb", color: "#777777", fontSize: "12px", textTransform: "uppercase" }}>
                                            <th style={{ padding: "12px 10px" }}>Order ID</th>
                                            <th style={{ padding: "12px 10px" }}>Customer</th>
                                            <th style={{ padding: "12px 10px" }}>Items</th>
                                            <th style={{ padding: "12px 10px" }}>Total</th>
                                            <th style={{ padding: "12px 10px" }}>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {recentOrders.map((order, index) => (
                                            <tr key={index} style={{ borderBottom: "1px solid #f6f8f5", fontSize: "13px" }}>
                                                <td style={{ padding: "14px 10px", fontWeight: "700", color: "#333333" }}>
                                                    {order.id}
                                                </td>
                                                <td style={{ padding: "14px 10px", color: "#444444" }}>
                                                    {order.customer}
                                                </td>
                                                <td style={{ padding: "14px 10px", color: "#666666" }}>
                                                    {order.product}
                                                </td>
                                                <td style={{ padding: "14px 10px", fontWeight: "700", color: "#80b435" }}>
                                                    {order.total}
                                                </td>
                                                <td style={{ padding: "14px 10px" }}>
                                                    <span
                                                        style={{
                                                            ...getBadgeStyle(order.status),
                                                            padding: "4px 12px",
                                                            borderRadius: "20px",
                                                            fontSize: "11px",
                                                            fontWeight: "600",
                                                            display: "inline-block",
                                                        }}
                                                    >
                                                        {order.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Top Products & Admin Info */}
                    <div className="col-lg-4 p-b-40">

                        {/* Top Selling Products Card */}
                        <div
                            style={{
                                border: "1px solid #e8ede4",
                                borderRadius: "10px",
                                padding: "24px 20px",
                                backgroundColor: "#ffffff",
                                boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                                marginBottom: "25px",
                            }}
                        >
                            <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#333333", margin: "0 0 18px 0" }}>
                                <i className="fa fa-star m-r-8" style={{ color: "#f59e0b" }}></i>
                                Top Selling Organic Items
                            </h4>

                            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                                {topSelling.map((item, index) => (
                                    <div
                                        key={index}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            borderBottom: index < topSelling.length - 1 ? "1px solid #f6f8f5" : "none",
                                            paddingBottom: "12px",
                                        }}
                                    >
                                        <div>
                                            <div style={{ fontSize: "14px", fontWeight: "600", color: "#333333" }}>
                                                {item.name}
                                            </div>
                                            <div style={{ fontSize: "12px", color: "#888888" }}>
                                                {item.sales}
                                            </div>
                                        </div>
                                        <div style={{ fontSize: "14px", fontWeight: "700", color: "#80b435" }}>
                                            {item.price}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Admin System Quick Info */}
                        <div
                            style={{
                                border: "1px solid #e8ede4",
                                borderRadius: "10px",
                                padding: "24px 20px",
                                backgroundColor: "#fbfdfa",
                            }}
                        >
                            <h4 style={{ fontSize: "16px", fontWeight: "700", color: "#333333", margin: "0 0 14px 0" }}>
                                <i className="fa fa-shield m-r-8" style={{ color: "#80b435" }}></i>
                                Admin Account Info
                            </h4>

                            <div style={{ fontSize: "13px", color: "#555555", lineHeight: "1.8" }}>
                                <div><strong>Role:</strong> Super Admin</div>
                                <div><strong>Store Status:</strong> <span style={{ color: "#2e7d32", fontWeight: "600" }}>Live & Active 🟢</span></div>
                                <div><strong>Database:</strong> Connected 🟢</div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

            {/* ================= 3. PARTNER LOGOS (Matches Website Style) ================= */}
            <div className="sec-logo bg0">
                <div className="container">
                    <div className="flex-w flex-sa-m bo-t-1 bocl13 p-tb-60">
                        <span className="dis-block how2 p-rl-15 m-tb-20">
                            <img className="trans-04" src="/images/icons/symbol-07.png" alt="IMG" />
                        </span>
                        <span className="dis-block how2 p-rl-15 m-tb-20">
                            <img className="trans-04" src="/images/icons/symbol-08.png" alt="IMG" />
                        </span>
                        <span className="dis-block how2 p-rl-15 m-tb-20">
                            <img className="trans-04" src="/images/icons/symbol-09.png" alt="IMG" />
                        </span>
                        <span className="dis-block how2 p-rl-15 m-tb-20">
                            <img className="trans-04" src="/images/icons/symbol-10.png" alt="IMG" />
                        </span>
                        <span className="dis-block how2 p-rl-15 m-tb-20">
                            <img className="trans-04" src="/images/icons/symbol-11.png" alt="IMG" />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};