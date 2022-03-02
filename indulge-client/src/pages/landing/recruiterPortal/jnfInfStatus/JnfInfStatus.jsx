import React, { useEffect, useState } from "react";
import { getJnfsApi } from "../../../../apiServices/recruiterApi";
import { useAuth } from "../../../../hooks/useAuth";
import Navbar from "../../../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
const JnfInfStatus = () => {
  const { user } = useAuth();
  const [jnfs, setJnfs] = useState([]);
  const getJnfs = async () => {
    const res = await getJnfsApi({ accessToken: user.accessToken });
    setJnfs(res.data.payload.jnfs);
  };

  useEffect(() => {
    getJnfs();
  }, []);

  return (
    <div>
      <Navbar
        navName="RECRUITER PORTAL"
        navitem={[
          { label: "OVERVIEW", href: "#overview" },
          { label: "POLICES", href: "#policies" },
          { label: "CONTACT US", href: "#contact-us" },
        ]}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "#01418B", margin: "1rem" }}>Your JNF</h1>
        <div
          style={{
            display: "flex",
            width: "70%",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {jnfs.map((jnf) => (
            <div
              key={jnf.jnfId}
              style={{
                // border: "2px solid blue",
                margin: "1rem",
                padding: "1rem",
                background: "#01418B",
                color: "white",
                borderRadius: "1rem",
              }}
            >
              <h3>JNF details</h3>
              <div className="jnf-id">JNF-ID: {jnf.jnfId}</div>
              <div className="job-details-status">
                <div className="job-details-item">
                  <div>Designation : {jnf.jobDetails.designation}</div>
                  <div>
                    Place of Postioning : {jnf.jobDetails.placeOfPostioning}
                  </div>
                </div>
              </div>
              <div style={{ margin: "1rem", marginLeft: "0" }}>
                <Link
                  to="/recruiter/edit-jnf"
                  style={{
                    textDecoration: "none",
                    color: "#01418B",
                    backgroundColor: "white",
                    padding: "0.2rem",
                    borderRadius: ".2rem",
                  }}
                  state={jnf}
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JnfInfStatus;
