import React, { useState, useEffect } from "react";
import "./Form.css";
import Navbar from "../../../../components/Navbar/Navbar";

const Inf = () => {
  const [state, setState] = useState({
    companyDetails: { name: "", website: "", category: "" },
    internDetails: {
      designation: "",
      placeOfPostioning: "",
      desc: "",
      duration: "2 Month",
    },
    saleryDetais: { ctcInLPA: "", ctcBreakup: "", bondDetails: "" },
    eligibleCourse: { btech4year: [], mtechDual5year: [], skillBased: [] },
    selectionProcedure: {
      resumeSort: "yes",
      typeOfTest: "technical",
      otherQualificationRound: "gd",
    },
  });

  const handleDuration = (e) => {
    setState((prev) => {
      const newState = {
        ...prev,
        internDetails: {
          ...prev.internDetails,
          duration: e.target.value,
        },
      };
      return newState;
    });
  };
  const handleBtech4year = (e) => {
    const tempArr = state.eligibleCourse.btech4year;
    if (e.target.checked) tempArr.push(e.target.value);
    else tempArr.splice(tempArr.indexOf(e.target.value), 1);
    setState((prev) => {
      const newState = {
        ...prev,
        eligibleCourse: {
          ...prev.eligibleCourse,
          btech4year: tempArr,
        },
      };
      return newState;
    });
  };
  const handleSkillBased = (e) => {
    const tempArr = state.eligibleCourse.skillBased;
    if (e.target.checked) tempArr.push(e.target.value);
    else tempArr.splice(tempArr.indexOf(e.target.value), 1);
    setState((prev) => {
      const newState = {
        ...prev,
        eligibleCourse: {
          ...prev.eligibleCourse,
          skillBased: tempArr,
        },
      };
      return newState;
    });
  };
  const handleMtechDual5Year = (e) => {
    const tempArr = state.eligibleCourse.mtechDual5year;
    if (e.target.checked) tempArr.push(e.target.value);
    else tempArr.splice(tempArr.indexOf(e.target.value), 1);
    setState((prev) => {
      const newState = {
        ...prev,
        eligibleCourse: {
          ...prev.eligibleCourse,
          mtechDual5year: tempArr,
        },
      };
      return newState;
    });
  };

  const hanldeResumeSort = (e) => {
    setState((prev) => {
      const newState = {
        ...prev,
        selectionProcedure: {
          ...prev.selectionProcedure,
          resumeSort: e.target.value,
        },
      };
      return newState;
    });
  };
  const hanldeTypeOfTest = (e) => {
    setState((prev) => {
      const newState = {
        ...prev,
        selectionProcedure: {
          ...prev.selectionProcedure,
          typeOfTest: e.target.value,
        },
      };
      return newState;
    });
  };
  const handleQualificationRound = (e) => {
    setState((prev) => {
      const newState = {
        ...prev,
        selectionProcedure: {
          ...prev.selectionProcedure,
          otherQualificationRound: e.target.value,
        },
      };
      return newState;
    });
  };

  const handleJnfForm = (e) => {
    e.preventDefault();
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
      <h1>INTEERSHIP NOTIFICATION FORM</h1>
      <form className="form" onSubmit={handleJnfForm}>
        <div className="form-section">
          <h2>COMPANY DETAILS</h2>
          <div className="form-field">
            <label htmlFor="company-name">Company Name</label>
            <input
              type="text"
              id="company-name"
              onChange={(e) => {
                setState((prev) => {
                  const newState = {
                    ...prev,
                    companyDetails: {
                      ...prev.companyDetails,
                      name: e.target.value,
                    },
                  };
                  return newState;
                });
              }}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="company-website">Website</label>
            <input
              type="text"
              id="company-website"
              onChange={(e) => {
                setState((prev) => {
                  const newState = {
                    ...prev,
                    companyDetails: {
                      ...prev.companyDetails,
                      website: e.target.value,
                    },
                  };
                  return newState;
                });
              }}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="company-category">Category/Sector</label>
            <input
              type="text"
              id="company-category"
              placeholder="eg. IT,Finance Etc."
              onChange={(e) => {
                setState((prev) => {
                  const newState = {
                    ...prev,
                    companyDetails: {
                      ...prev.companyDetails,
                      category: e.target.value,
                    },
                  };
                  return newState;
                });
              }}
              required
            />
          </div>
        </div>
        <div className="form-section">
          <h2>INTERNSHIP DETAILS</h2>
          <div className="form-field">
            <label htmlFor="designation">DESIGNATION</label>
            <input
              type="text"
              id="designation"
              onChange={(e) => {
                setState((prev) => {
                  const newState = {
                    ...prev,
                    internDetails: {
                      ...prev.internDetails,
                      designation: e.target.value,
                    },
                  };
                  return newState;
                });
              }}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="posting-place">PLACE OF POSTING</label>
            <input
              type="text"
              id="posting-place"
              onChange={(e) => {
                setState((prev) => {
                  const newState = {
                    ...prev,
                    inernDetails: {
                      ...prev.internDetails,
                      placeOfPostioning: e.target.value,
                    },
                  };
                  return newState;
                });
              }}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="description">DESCRIPTION</label>
            <textarea
              type="text"
              id="description "
              onChange={(e) => {
                setState((prev) => {
                  const newState = {
                    ...prev,
                    internDetails: {
                      ...prev.internDetails,
                      desc: e.target.value,
                    },
                  };
                  return newState;
                });
              }}
              required
            />
          </div>
          <div className="slection-item">
            <div>DURATION</div>
            <div className="selection-radio-container">
              <div className="selection-radio">
                <label htmlFor="duration2">2 Months</label>
                <input
                  type="radio"
                  name="duration"
                  id="duration2"
                  value="2 Month"
                  checked={state.internDetails.duration === "2 Month"}
                  onChange={handleDuration}
                />
              </div>
              <div className="selection-radio">
                <label htmlFor="duration4">4 Month</label>
                <input
                  type="radio"
                  name="duration"
                  id="duration4"
                  value="4 Month"
                  checked={state.internDetails.duration === "4 Month"}
                  onChange={handleDuration}
                />
              </div>
              <div className="selection-radio">
                <label htmlFor="duration6">6 Month</label>
                <input
                  type="radio"
                  name="duration"
                  id="duration6"
                  value="6 Month"
                  checked={state.internDetails.duration === "6 Month"}
                  onChange={handleDuration}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="form-section">
          <h2>SALERY DETAILS</h2>
          <div className="form-field">
            <label htmlFor="ctc">CTC in LPA</label>
            <input
              type="number"
              min="1"
              id="ctc"
              onChange={(e) => {
                setState((prev) => {
                  const newState = {
                    ...prev,
                    saleryDetais: {
                      ...prev.saleryDetais,
                      ctcInLPA: e.target.value,
                    },
                  };
                  return newState;
                });
              }}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="ctc-breakup">CTC breakup</label>
            <textarea
              type="text"
              id="posting-place"
              onChange={(e) => {
                setState((prev) => {
                  const newState = {
                    ...prev,
                    saleryDetais: {
                      ...prev.saleryDetais,
                      ctcBreakup: e.target.value,
                    },
                  };
                  return newState;
                });
              }}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="bond">Bond Details (if Any)</label>
            <textarea
              type="text"
              id="bond"
              onChange={(e) => {
                setState((prev) => {
                  const newState = {
                    ...prev,
                    saleryDetais: {
                      ...prev.saleryDetais,
                      bondDetails: e.target.value,
                    },
                  };
                  return newState;
                });
              }}
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
                  value="che"
                  type="checkbox"
                  name=""
                  id="che"
                  onChange={handleBtech4year}
                />
              </div>
              <div className="checkbox-form-group">
                <label htmlFor="ce">Civil Engineering</label>
                <input
                  type="checkbox"
                  value="ce"
                  name=""
                  id="ce"
                  onChange={handleBtech4year}
                />
              </div>
              <div className="checkbox-form-group">
                <label htmlFor="cse">Computer Science and Engineering</label>
                <input
                  type="checkbox"
                  name=""
                  id="cse"
                  value="cse"
                  onChange={handleBtech4year}
                />
              </div>
              <div className="checkbox-form-group">
                <label htmlFor="ee">Electrical Engineering</label>
                <input
                  type="checkbox"
                  name=""
                  id="ee"
                  value="ee"
                  onChange={handleBtech4year}
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
                  value="ece"
                  onChange={handleBtech4year}
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
                  value="eie"
                  onChange={handleBtech4year}
                />
              </div>
              <div className="checkbox-form-group">
                <label htmlFor="ep">Engineering Physics</label>
                <input
                  type="checkbox"
                  name=""
                  id="ep"
                  value="ep"
                  onChange={handleBtech4year}
                />
              </div>
              <div className="checkbox-form-group">
                <label htmlFor="eve">Environmental Engineering</label>
                <input
                  type="checkbox"
                  name=""
                  id="eve"
                  value="eve"
                  onChange={handleBtech4year}
                />
              </div>
              <div className="checkbox-form-group">
                <label htmlFor="mech">Mechanical Engineering</label>
                <input
                  type="checkbox"
                  name=""
                  id="mech"
                  value="mech"
                  onChange={handleBtech4year}
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
                  value="fme"
                  onChange={handleBtech4year}
                />
              </div>
              <div className="checkbox-form-group">
                <label htmlFor="me">Mining Engineering</label>
                <input
                  type="checkbox"
                  name=""
                  id="me"
                  value="me"
                  onChange={handleBtech4year}
                />
              </div>
              <div className="checkbox-form-group">
                <label htmlFor="mme">Mining Machinery Engineering</label>
                <input
                  type="checkbox"
                  name=""
                  id="mme"
                  value="mme"
                  onChange={handleBtech4year}
                />
              </div>
              <div className="checkbox-form-group">
                <label htmlFor="pe">Petrollium Engineering Engineering</label>
                <input
                  type="checkbox"
                  name=""
                  id="pe"
                  value="pe"
                  onChange={handleBtech4year}
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
                  value="5cse"
                  onChange={handleMtechDual5Year}
                />
              </div>
              <div className="checkbox-form-group">
                <label htmlFor="mnc">Mathematics and Computing</label>
                <input
                  type="checkbox"
                  name=""
                  id="mnc"
                  value="mnc"
                  onChange={handleMtechDual5Year}
                />
              </div>
              <div className="checkbox-form-group">
                <label htmlFor="ag">Applied Geology</label>
                <input
                  type="checkbox"
                  name=""
                  id="ag"
                  value="ag"
                  onChange={handleMtechDual5Year}
                />
              </div>
              <div className="checkbox-form-group">
                <label htmlFor="agp">Applied Geophysics</label>
                <input
                  type="checkbox"
                  name=""
                  id="agp"
                  value="agp"
                  onChange={handleMtechDual5Year}
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
                value="C,C++,Java,Python,etc"
                onChange={handleSkillBased}
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
                value="full stack development frontend backend"
                onChange={handleSkillBased}
              />
            </div>
            <div className="checkbox-form-group">
              <label htmlFor="skill3">AI/ML/DL/Data Science</label>
              <input
                type="checkbox"
                name=""
                id="skill3"
                value="AI/ML/DL/Data Science"
                onChange={handleSkillBased}
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
                value="Bussiness/Data Analysis, Product Management"
                onChange={handleSkillBased}
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
                  value="yes"
                  id="resume-yes"
                  checked={state.selectionProcedure.resumeSort === "yes"}
                  onChange={hanldeResumeSort}
                />
              </div>
              <div className="selection-radio">
                <label htmlFor="resume-no">No</label>
                <input
                  type="radio"
                  name="resume-sort"
                  value="no"
                  id="resume-no"
                  checked={state.selectionProcedure.resumeSort === "no"}
                  onChange={hanldeResumeSort}
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
                  value="technical"
                  checked={state.selectionProcedure.typeOfTest === "technical"}
                  onChange={hanldeTypeOfTest}
                />
              </div>
              <div className="selection-radio">
                <label htmlFor="tyt-apt">Aptitude</label>
                <input
                  type="radio"
                  name="tyt"
                  id="tyt-apt"
                  value="aptitude"
                  checked={state.selectionProcedure.typeOfTest === "aptitude"}
                  onChange={hanldeTypeOfTest}
                />
              </div>
              <div className="selection-radio">
                <label htmlFor="tyt-both">Both</label>
                <input
                  type="radio"
                  name="tyt"
                  id="tyt-both"
                  value="both"
                  checked={state.selectionProcedure.typeOfTest === "both"}
                  onChange={hanldeTypeOfTest}
                />
              </div>
              <div className="selection-radio">
                <label htmlFor="tyt-none">None</label>
                <input
                  type="radio"
                  name="tyt"
                  id="tyt-none"
                  value="none"
                  checked={state.selectionProcedure.typeOfTest === "none"}
                  onChange={hanldeTypeOfTest}
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
                  value="gd"
                  checked={
                    state.selectionProcedure.otherQualificationRound === "gd"
                  }
                  onChange={handleQualificationRound}
                />
              </div>
              <div className="selection-radio">
                <label htmlFor="other-case">Case Study</label>
                <input
                  type="radio"
                  name="other"
                  id="other-case"
                  value="Case Study"
                  checked={
                    state.selectionProcedure.otherQualificationRound ===
                    "Case Study"
                  }
                  onChange={handleQualificationRound}
                />
              </div>
              <div className="selection-radio">
                <label htmlFor="other-interview">Interview</label>
                <input
                  type="radio"
                  name="other"
                  id="other-interview"
                  value="interview"
                  checked={
                    state.selectionProcedure.otherQualificationRound ===
                    "interview"
                  }
                  onChange={handleQualificationRound}
                />
              </div>
            </div>
          </div>
        </div>
        <button type="submit">Save And Preview</button>
      </form>
    </div>
  );
};

export default Inf;
