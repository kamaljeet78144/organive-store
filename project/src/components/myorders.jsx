import React, { useEffect, useState } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";

export const MyOrders = () => {
const[myorders,setmyorders]=useState([])



const navigate=useNavigate()

// get api of myorders and get from checkout.jsx 


useEffect(()=>{
  const odd=JSON.parse(localStorage.getItem("user"))
if(odd){
  const id=odd.useridd

  odr(id)
}
else{
  navigate("/login")
}

},[])

const odr=async(id)=>{
  try{
    const myodr=await axios.get (`http://localhost:9000/api/myorders/${id}`)
    if(myodr.data.statuscode==1){
       setmyorders(myodr.data.myorderss)
      
    }
    else{
      alert("my order is not added")
    }
  }
  catch(err){
    alert(err)
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
              My Orders
            </h2>

            <span className="txt-m-201 cl0 flex-c-m flex-w">
              <Link to="/" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
                Home
              </Link>
              <span>/ My Orders</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Orders Section */}
      <section className="container bg0 p-t-70 p-b-90">
        <div className="size-a-1 flex-col-c-m p-b-40">
          <div className="txt-center txt-m-201 cl10 how-pos1-parent m-b-14">
            Purchase History
            <div className="how-pos1">
              <img src="/images/icons/symbol-02.png" alt="IMG" />
            </div>
          </div>

          <h3 className="txt-center txt-l-101 cl3 respon1">
            Items You Ordered
          </h3>
        </div>

        {/* Order Cards List */}
        <div className="row">
          {/* Order 1 */}
          {myorders.map((a,index)=>
          <div className="col-12" style={{ marginBottom: "30px" }} key={index}>
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
                  flexWrap: "wrap",
                  borderBottom: "1px solid #edf2f7",
                  paddingBottom: "14px",
                  marginBottom: "16px",
                  gap: "10px"
                }}
              >
                <div>
                  <span style={{ fontSize: "13px", color: "#718096", display: "block" }}>
                    Order Number
                  </span>
                  <strong style={{ fontSize: "18px", color: "#80b435" }}>
                   {a.OrderId}
                  </strong>
                </div>

                <div>
                  <span style={{ fontSize: "13px", color: "#718096", display: "block" }}>
                    Order Date
                  </span>
                  <strong style={{ fontSize: "15px", color: "#2d3748" }}>
                    Oct 04, 2026
                  </strong>
                </div>

                <span
                  style={{
                    backgroundColor: "#e6fffa",
                    color: "#234e52",
                    border: "1px solid #b2f5ea",
                    padding: "6px 14px",
                    borderRadius: "20px",
                    fontSize: "13px",
                    fontWeight: "600"
                  }}
                >
                  <i className="fa fa-check-circle" style={{ marginRight: "6px" }}></i>
                  Delivered
                </span>
              </div>

              {/* Ordered Items List */}
              <div style={{ marginBottom: "18px" }}>
                <strong style={{ fontSize: "14px", color: "#4a5568", display: "block", marginBottom: "10px" }}>
                  <i className="fa fa-shopping-basket" style={{ color: "#80b435", marginRight: "8px" }}></i>
                  Ordered Products:
                </strong>

                {/* Item 1 */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 0",
                    borderBottom: "1px dashed #e2e8f0",
                    fontSize: "14px",
                    color: "#2d3748"
                  }}
                >
                  <span>Organic Fresh Apples</span>
                  <span>Qty: 2</span>
                  <strong>$9.98</strong>
                </div>

                {/* Item 2 */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "10px 0",
                    borderBottom: "1px dashed #e2e8f0",
                    fontSize: "14px",
                    color: "#2d3748"
                  }}
                >
                  <span>Farm Fresh Broccoli</span>
                  <span>Qty: 1</span>
                  <strong>$3.50</strong>
                </div>
              </div>

              {/* Order Footer (Address & Total) */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  backgroundColor: "#f7fafc",
                  padding: "14px 18px",
                  borderRadius: "8px",
                  gap: "10px"
                }}
              >
                <div>
                  <span style={{ fontSize: "13px", color: "#718096", display: "block" }}>
                    <i className="fa fa-map-marker" style={{ color: "#e53e3e", marginRight: "6px" }}></i>
                    Delivery Address:
                  </span>
                  <span style={{ fontSize: "14px", color: "#2d3748", fontWeight: "500" }}>
                  {a.address}
                  </span>
                </div>

                <div>
                  <span style={{ fontSize: "13px", color: "#718096", display: "block" }}>
                    Payment:{a.payment}
                  </span>
                  <strong style={{ fontSize: "18px", color: "#2d3748" }}>
                    Total: $13.48
                  </strong>
                </div>
              </div>
            </div>
          </div>
)}
       
        </div>
      </section>
    </>
  );
};

export default MyOrders;
