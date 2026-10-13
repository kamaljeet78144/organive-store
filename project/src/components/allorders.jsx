import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AllOrders = () => {
const[order,setorder]=useState([])

// get api of allorders which is connected to checkout.jsx



useEffect(()=>{odr()},[])

const odr=async()=>{
  const allodr=await fetch("http://localhost:9000/api/allorders",{method:"get"})
  if(allodr.ok){
    const data=await allodr.json()
    if(data.statuscode==1){
      setorder(data.allorders)
    }
    else{
      alert("an error occurred")
    }
  }
}

  return (
    <>
      {/* Title Banner */}
      <section
        className="how-overlay2 bg-img1"
        style={{ backgroundImage: "url('/images/bg-07.jpg')" }}
      >
        <div className="container">
          <div className="txt-center p-t-160 p-b-165">
            <h2 className="txt-l-101 cl0 txt-center p-b-14 respon1">
              Customer Orders
            </h2>

            <span className="txt-m-201 cl0 flex-c-m flex-w">
              <Link to="/" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
                Home
              </Link>
              <span>/ All Orders</span>
            </span>
          </div>
        </div>
      </section>

      {/* Orders Section */}
      <section className="container bg0 p-t-70 p-b-90">
        <div className="size-a-1 flex-col-c-m p-b-40">
          <div className="txt-center txt-m-201 cl10 how-pos1-parent m-b-14">
            Order Management
            <div className="how-pos1">
              <img src="/images/icons/symbol-02.png" alt="IMG" />
            </div>
          </div>

          <h3 className="txt-center txt-l-101 cl3 respon1">
            All Placed Orders
          </h3>
        </div>

        {/* Static Order Cards Grid */}
        <div className="row">
          {/* Order Card 1 */}
          {order.map((a,index)=>
          <div className="col-lg-6 col-12" style={{ marginBottom: "25px" }} key={index}>
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "24px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)"
              }}
            >
              {/* Order Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #edf2f7",
                  paddingBottom: "12px",
                  marginBottom: "16px"
                }}
              >
                <div>
                  <span style={{ fontSize: "12px", color: "#718096", display: "block" }}>
                    Order ID
                  </span>
                  <strong style={{ fontSize: "17px", color: "#80b435" }}>
                    {a.OrderId}
                  </strong>
                </div>

                <span
                  style={{
                    backgroundColor: "#e6fffa",
                    color: "#234e52",
                    border: "1px solid #b2f5ea",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: "600"
                  }}
                >
                  Confirmed
                </span>
              </div>

              {/* Customer Details */}
              <h4 style={{ fontSize: "17px", fontWeight: "700", color: "#2d3748", marginBottom: "10px" }}>
                <i className="fa fa-user" style={{ color: "#80b435", marginRight: "8px" }}></i>
           {a.name}
              </h4>

              <p style={{ fontSize: "14px", color: "#4a5568", margin: "6px 0" }}>
                <i className="fa fa-envelope" style={{ color: "#3182ce", marginRight: "8px", width: "16px" }}></i>
                <strong>Email: </strong> {a.email}
              </p>

              <p style={{ fontSize: "14px", color: "#4a5568", margin: "6px 0" }}>
                <i className="fa fa-phone" style={{ color: "#38a169", marginRight: "8px", width: "16px" }}></i>
                <strong>Phone: </strong> {a.phone}
              </p>

              <p style={{ fontSize: "14px", color: "#4a5568", margin: "6px 0" }}>
                <i className="fa fa-map-marker" style={{ color: "#e53e3e", marginRight: "8px", width: "16px" }}></i>
                <strong>Address: </strong>{a.address}
              </p>

              <p style={{ fontSize: "14px", color: "#4a5568", margin: "6px 0" }}>
                <i className="fa fa-credit-card" style={{ color: "#d69e2e", marginRight: "8px", width: "16px" }}></i>
                <strong>Payment: </strong>{a.payment}
              </p>

              {/* Ordered Products Box */}
              <div
                style={{
                  marginTop: "16px",
                  padding: "12px 14px",
                  backgroundColor: "#f7fafc",
                  borderRadius: "8px",
                  borderLeft: "4px solid #80b435"
                }}
              >
                <strong style={{ fontSize: "13px", color: "#4a5568", display: "block", marginBottom: "6px" }}>
                  <i className="fa fa-shopping-basket" style={{ marginRight: "6px" }}></i>
                  Products Ordered:
                </strong>
                <p style={{ fontSize: "14px", color: "#2d3748", margin: 0 }}>
                  Fresh Farm Broccoli (Qty: 2), Organic Red Apples (Qty: 1)
                </p>
              </div>
            </div>
          </div>
          )}

        
        </div>
      </section>
    </>
  );
};

export default AllOrders;
