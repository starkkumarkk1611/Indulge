import React, { useState, useEffect } from "react";
import "./Form.css";
import { useAuth } from "../../../../hooks/useAuth";
import Navbar from "../../../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { confirmJnfApi } from "../../../../apiServices/adminApi";

const ViewJnf = () => {
  const { user } = useAuth();
  const { state: jnf } = useLocation();
  const [state, setState] = useState({
    companyDetails: {
      name: jnf.companyDetails.name,
      website: jnf.companyDetails.website,
      category: jnf.companyDetails.category,
    },
    jobDetails: {
      designation: jnf.jobDetails.designation,
      placeOfPostioning: jnf.jobDetails.placeOfPostioning,
      desc: jnf.jobDetails.desc,
    },
    saleryDetails: {
      ctcInLPA: jnf.saleryDetails.ctcInLPA,
      ctcBreakup: jnf.saleryDetails.ctcBreakup,
      bondDetails: jnf.saleryDetails.bondDetails,
    },
    eligibleCourses: {
      btech4year: jnf.eligibleCourses.btech4year,
      mtechDual5year: jnf.eligibleCourses.mtechDual5year,
      skillBased: jnf.eligibleCourses.skillBased,
    },
    selectionProcedure: {
      resumeSort: jnf.selectionProcedure.resumeSort,
      typeOfTest: jnf.selectionProcedure.typeOfTest,
      otherQualificationRound: jnf.selectionProcedure.otherQualificationRound,
    },
  });
  const [error, setError] = useState();
  const [message, setMessage] = useState();

  const handleConfirm = async (e) => {
    e.preventDefault();
    try {
      const res = await confirmJnfApi({
        accessToken: user.accessToken,
        jnfId: jnf.jnfId,
      });
      setMessage(res.data.payload.message);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="form-page">
      <Navbar
        navName="RECRUITER PORTAL"
        navitem={[
          { label: "OVERVIEW", href: "#overview" },
          { label: "POLICES", href: "#policies" },
          { label: "CONTACT US", href: "#contact-us" },
        ]}
      />
      <h1>JOB NOTIFICATION FORM</h1>
      {!error && message && <div className="text-success">{message}</div>}
      {!message && error && <div className="text-danger">{error}</div>}
      <form className="form">
        <fieldset disabled>
          <div className="form-section">
            <h2>COMPANY DETAILS</h2>
            <div className="form-field">
              <label htmlFor="company-name">Company Name</label>
              <input
                type="text"
                id="company-name"
                defaultValue={state.companyDetails.name}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="company-website">Website</label>
              <input
                type="text"
                id="company-website"
                defaultValue={state.companyDetails.website}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="company-category">Category/Sector</label>
              <input
                type="text"
                id="company-category"
                placeholder="eg. IT,Finance Etc."
                defaultValue={state.companyDetails.category}
                required
              />
            </div>
          </div>
          <div className="form-section">
            <h2>JOB DETAILS</h2>
            <div className="form-field">
              <label htmlFor="designation">DESIGNATION</label>
              <input
                type="text"
                id="designation"
                defaultValue={state.jobDetails.designation}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="posting-place">PLACE OF POSTING</label>
              <input
                type="text"
                id="posting-place"
                defaultValue={state.jobDetails.placeOfPostioning}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="description">DESCRIPTION</label>
              <textarea
                type="text"
                id="description "
                defaultValue={state.jobDetails.desc}
                required
              />
            </div>
          </div>
          <div className="form-section">
            <h2>SALERY DETAILS</h2>
            <div className="form-field">
              <label htmlFor="ctc">CTC in LPA</label>
              <input
                defaultValue={state.saleryDetails.ctcInLPA}
                type="number"
                min="1"
                id="ctc"
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="ctc-breakup">CTC breakup</label>
              <textarea
                type="text"
                id="ctc-break"
                defaultValue={state.saleryDetails.ctcBreakup}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="bond">Bond Details (if Any)</label>
              <textarea
                type="text"
                id="bond"
                defaultValue={state.saleryDetails.bondDetails}
                required
              />
            </div>
          </div>
          <div className="form-section">
            <h2>ELIGIBLE COURCES AND DISCIPLNES</h2>
            <div className="eligible-type">
              <h4>4 Year B.tech Programs</h4>
              <p> Admitted through JEE (Advanced)</p>
              <div>
                <div className="checkbox-form-group">
                  <label htmlFor="che">Chemical Engineering</label>
                  <input
                    defaultValue="che"
                    type="checkbox"
                    name=""
                    id="che"
                    defaultChecked={state.eligibleCourses.btech4year.includes(
                      "che"
                    )}
                  />
                </div>
                <div className="checkbox-form-group">
                  <label htmlFor="ce">Civil Engineering</label>
                  <input
                    type="checkbox"
                    defaultValue="ce"
                    name=""
                    id="ce"
                    defaultChecked={state.eligibleCourses.btech4year.includes(
                      "ce"
                    )}
                  />
                </div>
                <div className="checkbox-form-group">
                  <label htmlFor="cse">Computer Science and Engineering</label>
                  <input
                    type="checkbox"
                    name=""
                    id="cse"
                    defaultValue="cse"
                    defaultChecked={state.eligibleCourses.btech4year.includes(
                      "cse"
                    )}
                  />
                </div>
                <div className="checkbox-form-group">
                  <label htmlFor="ee">Electrical Engineering</label>
                  <input
                    type="checkbox"
                    name=""
                    id="ee"
                    defaultValue="ee"
                    defaultChecked={state.eligibleCourses.btech4year.includes(
                      "ee"
                    )}
                  />
                </div>
                <div className="checkbox-form-group">
                  <label htmlFor="ece">
                    Electrical &apm; Communication Engineering
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="ece"
                    defaultValue="ece"
                    defaultChecked={state.eligibleCourses.btech4year.includes(
                      "ece"
                    )}
                  />
                </div>
                <div className="checkbox-form-group">
                  <label htmlFor="eie">
                    Electronics &apm; Instrumentation Engineering
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="eie"
                    defaultValue="eie"
                    defaultChecked={state.eligibleCourses.btech4year.includes(
                      "eie"
                    )}
                  />
                </div>
                <div className="checkbox-form-group">
                  <label htmlFor="ep">Engineering Physics</label>
                  <input
                    type="checkbox"
                    name=""
                    id="ep"
                    defaultValue="ep"
                    defaultChecked={state.eligibleCourses.btech4year.includes(
                      "ep"
                    )}
                  />
                </div>
                <div className="checkbox-form-group">
                  <label htmlFor="eve">Environmental Engineering</label>
                  <input
                    type="checkbox"
                    name=""
                    id="eve"
                    defaultValue="eve"
                    defaultChecked={state.eligibleCourses.btech4year.includes(
                      "eve"
                    )}
                  />
                </div>
                <div className="checkbox-form-group">
                  <label htmlFor="mech">Mechanical Engineering</label>
                  <input
                    type="checkbox"
                    name=""
                    id="mech"
                    defaultValue="mech"
                    defaultChecked={state.eligibleCourses.btech4year.includes(
                      "mech"
                    )}
                  />
                </div>
                <div className="checkbox-form-group">
                  <label htmlFor="fme">
                    Miniral and Metalergical Engineering
                  </label>
                  <input
                    type="checkbox"
                    name=""
                    id="fme"
                    defaultValue="fme"
                    defaultChecked={state.eligibleCourses.btech4year.includes(
                      "fme"
                    )}
                  />
                </div>
                <div className="checkbox-form-group">
                  <label htmlFor="me">Mining Engineering</label>
                  <input
                    type="checkbox"
                    name=""
                    id="me"
                    defaultValue="me"
                    defaultChecked={state.eligibleCourses.btech4year.includes(
                      "me"
                    )}
                  />
                </div>
                <div className="checkbox-form-group">
                  <label htmlFor="mme">Mining Machinery Engineering</label>
                  <input
                    type="checkbox"
                    name=""
                    id="mme"
                    defaultValue="mme"
                    defaultChecked={state.eligibleCourses.btech4year.includes(
                      "mme"
                    )}
                  />
                </div>
                <div className="checkbox-form-group">
                  <label htmlFor="pe">Petrollium Engineering Engineering</label>
                  <input
                    type="checkbox"
                    name=""
                    id="pe"
                    defaultValue="pe"
                    defaultChecked={state.eligibleCourses.btech4year.includes(
                      "pe"
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="eligible-type">
              <h4>5 Year Dual Degree/ Integrated M.tech Programs</h4>
              <p>Admitted through JEE (ADVANCE)</p>
              <div>
                <div className="checkbox-form-group">
                  <label htmlFor="5cse">Computer Science and Engineering</label>
                  <input
                    type="checkbox"
                    name=""
                    id="5cse"
                    defaultValue="5cse"
                    defaultChecked={state.eligibleCourses.mtechDual5year.includes(
                      "5cse"
                    )}
                  />
                </div>
                <div className="checkbox-form-group">
                  <label htmlFor="mnc">Mathematics and Computing</label>
                  <input
                    type="checkbox"
                    name=""
                    id="mnc"
                    defaultValue="mnc"
                    defaultChecked={state.eligibleCourses.mtechDual5year.includes(
                      "mnc"
                    )}
                  />
                </div>
                <div className="checkbox-form-group">
                  <label htmlFor="ag">Applied Geology</label>
                  <input
                    type="checkbox"
                    name=""
                    id="ag"
                    defaultValue="ag"
                    defaultChecked={state.eligibleCourses.mtechDual5year.includes(
                      "ag"
                    )}
                  />
                </div>
                <div className="checkbox-form-group">
                  <label htmlFor="agp">Applied Geophysics</label>
                  <input
                    type="checkbox"
                    name=""
                    id="agp"
                    defaultValue="agp"
                    defaultChecked={state.eligibleCourses.mtechDual5year.includes(
                      "agp"
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="eligible-type">
              <h4>Skill Based hiring</h4>
              <p>
                Students with certified technical expertise in the following
                skills (from Coursera, Udemy etc.)
              </p>
              <div className="checkbox-form-group">
                <label htmlFor="skill1">C, C++, Java, Python, etc.</label>
                <input
                  type="checkbox"
                  name=""
                  id="skill1"
                  defaultValue="C,C++,Java,Python,etc"
                  defaultChecked={state.eligibleCourses.skillBased.includes(
                    "C,C++,Java,Python,etc"
                  )}
                />
              </div>
              <div className="checkbox-form-group">
                <label htmlFor="skill2">
                  Full Stack Development (Fronend/ Backend)
                </label>
                <input
                  type="checkbox"
                  name=""
                  id="skill2"
                  defaultValue="full stack development frontend backend"
                  defaultChecked={state.eligibleCourses.skillBased.includes(
                    "full stack development frontend backend"
                  )}
                />
              </div>
              <div className="checkbox-form-group">
                <label htmlFor="skill3">AI/ML/DL/Data Science</label>
                <input
                  type="checkbox"
                  name=""
                  id="skill3"
                  defaultValue="AI/ML/DL/Data Science"
                  defaultChecked={state.eligibleCourses.skillBased.includes(
                    "AI/ML/DL/Data Science"
                  )}
                />
              </div>
              <div className="checkbox-form-group">
                <label htmlFor="skill4">
                  Business/ Data Analysis, Product Management
                </label>
                <input
                  type="checkbox"
                  name=""
                  id="skill4"
                  defaultValue="Bussiness/Data Analysis, Product Management"
                  defaultChecked={state.eligibleCourses.skillBased.includes(
                    "Bussiness/Data Analysis, Product Management"
                  )}
                />
              </div>
            </div>
          </div>
          <div className="form-section">
            <h2>SELCTION PROCEDURE</h2>
            <div className="slection-item">
              <div>Resume Shortlisting</div>
              <div className="selection-radio-container">
                <div className="selection-radio">
                  <label htmlFor="resume-yes">Yes</label>
                  <input
                    type="radio"
                    name="resume-sort"
                    defaultValue="yes"
                    id="resume-yes"
                    defaultChecked={
                      state.selectionProcedure.resumeSort === "yes"
                    }
                  />
                </div>
                <div className="selection-radio">
                  <label htmlFor="resume-no">No</label>
                  <input
                    type="radio"
                    name="resume-sort"
                    defaultValue="no"
                    id="resume-no"
                    defaultChecked={
                      state.selectionProcedure.resumeSort === "no"
                    }
                  />
                </div>
              </div>
            </div>
            <div className="slection-item">
              <div>Type of Test</div>
              <div className="selection-radio-container">
                <div className="selection-radio">
                  <label htmlFor="tyt-tech">Technical</label>
                  <input
                    type="radio"
                    name="tyt"
                    id="tyt-tech"
                    defaultValue="technical"
                    defaultChecked={
                      state.selectionProcedure.typeOfTest === "technical"
                    }
                  />
                </div>
                <div className="selection-radio">
                  <label htmlFor="tyt-apt">Aptitude</label>
                  <input
                    type="radio"
                    name="tyt"
                    id="tyt-apt"
                    defaultValue="aptitude"
                    defaultChecked={
                      state.selectionProcedure.typeOfTest === "aptitude"
                    }
                  />
                </div>
                <div className="selection-radio">
                  <label htmlFor="tyt-both">Both</label>
                  <input
                    type="radio"
                    name="tyt"
                    id="tyt-both"
                    defaultValue="both"
                    defaultChecked={
                      state.selectionProcedure.typeOfTest === "both"
                    }
                  />
                </div>
                <div className="selection-radio">
                  <label htmlFor="tyt-none">None</label>
                  <input
                    type="radio"
                    name="tyt"
                    id="tyt-none"
                    defaultValue="none"
                    defaultChecked={
                      state.selectionProcedure.typeOfTest === "none"
                    }
                  />
                </div>
              </div>
            </div>
            <div className="slection-item">
              <div>Other Qualification Round</div>
              <div className="selection-radio-container">
                <div className="selection-radio">
                  <label htmlFor="other-gd">GD</label>
                  <input
                    type="radio"
                    name="other"
                    id="other-gd"
                    defaultValue="gd"
                    defaultChecked={
                      state.selectionProcedure.otherQualificationRound === "gd"
                    }
                  />
                </div>
                <div className="selection-radio">
                  <label htmlFor="other-case">Case Study</label>
                  <input
                    type="radio"
                    name="other"
                    id="other-case"
                    defaultValue="Case Study"
                    defaultChecked={
                      state.selectionProcedure.otherQualificationRound ===
                      "Case Study"
                    }
                  />
                </div>
                <div className="selection-radio">
                  <label htmlFor="other-interview">Interview</label>
                  <input
                    type="radio"
                    name="other"
                    id="other-interview"
                    defaultValue="interview"
                    defaultChecked={
                      state.selectionProcedure.otherQualificationRound ===
                      "interview"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </fieldset>
        <button onClick={handleConfirm} type="submit">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default ViewJnf;
