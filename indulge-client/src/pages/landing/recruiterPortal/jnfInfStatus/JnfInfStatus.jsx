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
    console.log(res);
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
      <div>
        {jnfs.map((jnf) => (
          <div key={jnf.jnfId}>
            <h1 className="jnf-id">JNF ID: {jnf.jnfId}</h1>
            <div className="job-details-status">
              <h3>Job details</h3>
              <div className="job-details-item">
                <div>Designation : {jnf.jobDetails.designation}</div>
                <div>
                  Place of Postioning : {jnf.jobDetails.placeOfPostioning}
                </div>
              </div>
            </div>
            <div>
              <Link to="/recruiter/edit-jnf" state={jnf}>
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JnfInfStatus;
