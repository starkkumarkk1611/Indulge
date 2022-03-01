import React, { useState, useEffect } from "react";
import "./Form.css";

const Inf = () => {
  const [state, setState] = useState({
    companyDetails: { name: "", website: "", category: "" },
    jobDetails: { designation: "", placeOfPostioning: "", desc: "" },
    saleryDetais: { ctcInLPA: "", ctcBreakup: "", bondDetails: "" },
    eligibleCourse: { btech4year: [], mtechDual5year: [], skillBased: [] },
    selectionProcedure: {
      resumeSort: "",
      typeOfTest: "",
      otherQualificationRound: "",
    },
  });
  const handleBtech4year = (e) => {
    const tempArr = state.eligibleCourse.btech4year;
    if (e.target.checked) tempArr.push(e.target.value);
    else tempArr.splice(tempArr.indexOf(e.target.value), 1);
    console.log(tempArr);
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
    console.log(tempArr);
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
    console.log(tempArr);
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

  useEffect(() => {
    console.log(state);
  }, [state]);

  const handleJnfForm = () => {};
  return (
    <div className="form-page">
      <h1>JOB NOTIFICATION FORM</h1>
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
              onChange={(e) => {
                setState((prev) => {
                  const newState = {
                    ...prev,
                    jobDetails: {
                      ...prev.jobDetails,
                      designation: e.target.value,
                    },
                  };
                  return newState;
                });
              }}
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
                    jobDetails: {
                      ...prev.jobDetails,
                      placeOfPostioning: e.target.value,
                    },
                  };
                  return newState;
                });
              }}
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
                    jobDetails: {
                      ...prev.jobDetails,
                      desc: e.target.value,
                    },
                  };
                  return newState;
                });
              }}
            />
          </div>
        </div>
        <div className="form-section">
          <h2>SALERY DETAILS</h2>
          <div className="form-field">
            <label htmlFor="ctc">CTC in LPA</label>
            <input
              type="number"
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
            />
          </div>
          <div className="form-field">
            <label htmlFor="ctc-breakup">CTC breakup</label>
            <input
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
            />
          </div>
          <div className="form-field">
            <label htmlFor="bond">Bond Details (if Any)</label>
            <input
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
            <h4>Resume Shortlisting</h4>
            <div className="selection-radio-container">
              <div className="selection-radio">
                <label htmlFor="resume-yes">Yes</label>
                <input type="radio" name="resume-sort" id="resume-yes" />
              </div>
              <div className="selection-radio">
                <label htmlFor="resume-no">No</label>
                <input type="radio" name="resume-sort" id="resume-no" />
              </div>
            </div>
          </div>
          <div className="slection-item">
            <h4>Type of Test</h4>
            <div className="selection-radio-container">
              <div className="selection-radio">
                <label htmlFor="tyt-tech">Technical</label>
                <input type="radio" name="tyt" id="tyt-tech" />
              </div>
              <div className="selection-radio">
                <label htmlFor="tyt-apt">Aptitude</label>
                <input type="radio" name="tyt" id="tyt-apt" />
              </div>
              <div className="selection-radio">
                <label htmlFor="tyt-both">Both</label>
                <input type="radio" name="tyt" id="tyt-both" />
              </div>
              <div className="selection-radio">
                <label htmlFor="tyt-none">None</label>
                <input type="radio" name="tyt" id="tyt-none" />
              </div>
            </div>
          </div>
          <div className="slection-item">
            <h4>Other Qualification Round</h4>
            <div className="selection-radio-container">
              <div className="selection-radio">
                <label htmlFor="other-gd">GD</label>
                <input type="radio" name="other" id="other-gd" />
              </div>
              <div className="selection-radio">
                <label htmlFor="other-case">Case Study</label>
                <input type="radio" name="other" id="other-case" />
              </div>
              <div className="selection-radio">
                <label htmlFor="other-interview">Interview</label>
                <input type="radio" name="other" id="other-interview" />
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
