import React, { useEffect, useState } from "react";

export const Complaint = () => {

  const [complt, setcomplt] = useState([])



  // get api of complaint made by using contact.jsx data

  useEffect(() => { comp() }, [])



  const comp = async () => {
    const data = await fetch("https://organive-store.onrender.com/api/complaint", { method: "get" })

    if (data.ok) {
      const compdata = await data.json()
      if (compdata.statuscode == 1) {
        setcomplt(compdata.complaintdata)
      }
      else {
        alert("an error occurred ")
      }
    }
  }





  return (
    <div className="container" style={{ paddingTop: "60px", paddingBottom: "80px" }}>
      {/* Page Heading */}
      <div className="text-center" style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "30px", fontWeight: "700", color: "#333", marginBottom: "8px" }}>
          Customer Complaints
        </h2>
        <p style={{ fontSize: "15px", color: "#666" }}>
          Customer complaint details and messages
        </p>
      </div>

      {/* Complaint Cards Grid */}
      <div className="row">
        {/* Card 1 */}
        {complt.map((a, index) =>
          <div className="col-md-6 col-12" style={{ marginBottom: "24px" }} key={index}>
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "24px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)"
              }}
            >
              <h4 style={{ fontSize: "18px", fontWeight: "700", color: "#2d3748", marginBottom: "12px" }}>
                <i className="fa fa-user" style={{ color: "#80b435", marginRight: "10px" }}></i>
                {a.name}
              </h4>

              <p style={{ fontSize: "14px", color: "#4a5568", margin: "8px 0" }}>
                <i className="fa fa-envelope" style={{ color: "#3182ce", marginRight: "10px", width: "16px" }}></i>
                <strong>Email: </strong> {a.email}
              </p>

              <p style={{ fontSize: "14px", color: "#4a5568", margin: "8px 0" }}>
                <i className="fa fa-phone" style={{ color: "#38a169", marginRight: "10px", width: "16px" }}></i>
                <strong>Phone: </strong>{a.phone}
              </p>

              <div
                style={{
                  marginTop: "16px",
                  padding: "12px 16px",
                  backgroundColor: "#f7fafc",
                  borderRadius: "8px",
                  borderLeft: "4px solid #80b435"
                }}
              >
                <strong style={{ fontSize: "13px", color: "#718096", display: "block", marginBottom: "4px" }}>
                  <i className="fa fa-commenting-o" style={{ marginRight: "6px" }}></i>
                  Message:
                </strong>
                <p style={{ fontSize: "14px", color: "#2d3748", margin: 0, lineHeight: "1.6" }}>
                  {a.message}
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default Complaint;
