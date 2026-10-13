import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Users = () => {


  const[user,setuserdata]=useState([])
  
  
  
  // get api of user made by using register.jsx data
  
  useEffect(()=>{reg()},[])
  
  
  
  const reg=async()=>{
    const data =await fetch("http://localhost:9000/api/user" ,{method:"get"})
  
    if(data.ok){
      const regdata=await data.json()
      if(regdata.statuscode==1){
  setuserdata( regdata.registeruser)
      }
      else{
        alert("an error occurred ")
      }
    }
  }

  // delete api 
  
  const del=async(id)=>{
    const confirm=window.confirm("Do YOu want to delete user?")
    if(confirm==true){
    const remove=await fetch(`http://localhost:9000/api/deleteuser/${id}`,{method:"delete"})
    if(remove.ok){
      const deluser=await remove.json()
        if(deluser.statuscode==1){
          reg()
  
        }
        else{
          alert("user is not deleted")
        }
      }}
      else
        {reg()}
    }
  

  return (
    <>
      {/* Title page */}
      <section
        className="how-overlay2 bg-img1"
        style={{ backgroundImage: "url('/images/bg-07.jpg')" }}
      >
        <div className="container">
          <div className="txt-center p-t-160 p-b-165">
            <h2 className="txt-l-101 cl0 txt-center p-b-14 respon1">
              Registered Users
            </h2>

            <span className="txt-m-201 cl0 flex-c-m flex-w">
              <Link to="/" className="txt-m-201 cl0 hov-cl10 trans-04 m-r-6">
                Home
              </Link>
              <span>/ Registered Users</span>
            </span>
          </div>
        </div>
      </section>

      {/* Users Cards Section */}
      <section className="container bg0 p-t-70 p-b-90">
        <div className="size-a-1 flex-col-c-m p-b-40">
          <div className="txt-center txt-m-201 cl10 how-pos1-parent m-b-14">
            User Accounts
            <div className="how-pos1">
              <img src="/images/icons/symbol-02.png" alt="IMG" />
            </div>
          </div>

          <h3 className="txt-center txt-l-101 cl3 respon1">
            All Registered Customers
          </h3>
        </div>

        {/* Cards Grid (Pure static JSX, no map, no useState, no API) */}
        <div className="row">
          {/* User Card 1 */}
{user.map((a,index)=>

          <div className="col-md-6 col-lg-4 col-12" style={{ marginBottom: "24px" }} key={index}>
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "24px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)"
              }}
            >
              <div style={{ display: "flex", alignItems: "center", marginBottom: "14px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    backgroundColor: "#80b43520",
                    color: "#80b435",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    marginRight: "12px"
                  }}
                >
                  <i className="fa fa-user"></i>
                </div>
                <div>
                  <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#2d3748", margin: 0 }}>
                  {a.name}
                  </h4>
                  <span style={{ fontSize: "12px", color: "#80b435", fontWeight: "600" }}>
                    Registered User
                  </span>
                </div>
              </div>

              <p style={{ fontSize: "14px", color: "#4a5568", margin: "8px 0" }}>
                <i className="fa fa-envelope" style={{ color: "#3182ce", marginRight: "10px", width: "16px" }}></i>
                <strong>Email: </strong> {a.email}
              </p>

              <p style={{ fontSize: "14px", color: "#4a5568", margin: "8px 0" }}>
                <i className="fa fa-phone" style={{ color: "#38a169", marginRight: "10px", width: "16px" }}></i>
                <strong>Phone: </strong> {a.phone}
              </p>
                <p style={{ fontSize: "14px", color: "#4a5568", margin: "8px 0" }}>
                   <i className="fa fa-user" style={{ color: "#38a169", marginRight: "10px", width: "16px" }}></i>
                <strong>Role: </strong> {a.Role}
              </p>
              <button style={{ backgroundColor: "#dd6b77ff", color: "#fff", padding: "8px 20px", border: "none", borderRadius: "4px", cursor: "pointer", fontWeight: "600" }} onClick={()=>del(a._id)}>
											Delete
										</button>
            </div>
          </div>

)}
    
        </div>
      </section>
    </>
  );
};

export default Users;
