import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./StudentPortal.css"


const StudentPortal = () => {
  return <div><Navbar navName="STUDENT PORTAL" navitem={[{ label: "OVERVIEW", href: "#overview" }, { label: "POLICES", href: "#policies" }, { label: "CONTACT US", href: "#contact-us" }]}
  />

    <div id="mainpage">
      <div id="partone">
        <h1 style={{ color: "#01418B" }}>PLACEMENT SEASON (2021-2022)</h1>
        <h4 style={{ color: "#01418B" }} >AT A GLANCE</h4>
        <h4 id="bro">DOWNLOAD BROUCHERE</h4>

      </div>
      <div id="parttwo">


        <div className="parttwoone">VIEW APPLICATION STATUS</div>
        <div className="parttwoone">RESUME GENERATOR</div>
        <div className="parttwoone">RESUME GENERATOR</div>
      </div>

    </div>


    <div class="pipe">

    </div>

    <div id="mid-page">
      <h1 id="head">UPCOMING JOBS/INTERN</h1>
      <div id="search-bar">
        SEARCH
      </div>
      <div id="section">
        <div className="news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem obcaecati quos, iste eveniet eligendi alias ipsa
        </div>
        <div className="news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem obcaecati quos, iste eveniet eligendi alias ipsa
        </div>
        <div className="news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem obcaecati quos, iste eveniet eligendi alias ipsa
        </div>
        <div className="news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem obcaecati quos, iste eveniet eligendi alias ipsa
        </div>
        <div className="news">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem obcaecati quos, iste eveniet eligendi alias ipsa
        </div>
      </div>

    </div>
    <div class="pipe"></div>








  </div>;

};

export default StudentPortal;
