import "./Navbar.css";

export const Footer = function () {
  return (
    <footer
      className="footer"
      style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "blue",
        color: "white",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <p> &copy; Copyright 2025. Some rights reserved.</p>
    </footer>
  );
};

function Navbar() {
  return (
    <nav
      className="navbar"
      style={{ backgroundColor: "blue", color: "white", padding: "10px" }}
    >
      <h1>TODO APP </h1>
    </nav>
  );
}

export default Navbar;
