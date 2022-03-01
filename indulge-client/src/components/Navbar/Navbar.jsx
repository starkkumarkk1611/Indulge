import React from "react";
import { NavLink, Link } from "react-router-dom";
import ismLogo from "../../assets/image/ISMLogo.png";
import "./Navbar.css";
import { useAuth } from "../../hooks/useAuth";
import { Navbar as ReactNavbar, Container, Nav, Button } from "react-bootstrap";

const Navbar = ({ navitem, navName }) => {
  const { user, logout } = useAuth();
  console.log(user);
  const handleLogout = async () => {
    await logout();
  };
  return (
    <ReactNavbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#01418B" }}
      variant="dark"
    >
      <Container>
        <ReactNavbar.Brand href="#home">
          <div id="main-logo">
            <img height="80px" src={ismLogo} alt="" />
            <div
              style={{
                margin: "0.6rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h4 style={{ margin: "0" }}>{navName}</h4>
              <p style={{ fontSize: "0.9em", margin: "0" }}>
                Legacy that inspires the future
              </p>
            </div>
          </div>
        </ReactNavbar.Brand>

        <ReactNavbar.Toggle aria-controls="responsive-navbar-nav" />

        <ReactNavbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>

          <Nav
            style={{
              // border: "2px solid red",
              display: "flex",
              alignItems: "center",
            }}
          >
            {navitem.map(({ label, href }, index) => (
              <Nav.Link key={index} href={`${href}`}>
                {label}
              </Nav.Link>
            ))}
            {user && (
              <div
                style={{
                  color: "white",
                  display: "flex",
                  // border: "2px solid red",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "0.7rem",
                }}
              >
                <div
                  style={{
                    color: "white",
                    display: "flex",
                    // border: "2px solid red",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "0.7rem",
                  }}
                >
                  {user.email}
                </div>
                <Button
                  className="m-2"
                  style={{
                    whiteSpace: "nowrap",
                    backgroundColor: "white",
                    color: "#01418B",
                  }}
                  onClick={handleLogout}
                >
                  Log Out
                </Button>
              </div>
            )}
          </Nav>
        </ReactNavbar.Collapse>
      </Container>
    </ReactNavbar>
  );
};

export default Navbar;
