const Nav = () => {
  const linkStyle = {
    textDecoration: "none",
    borderRadius: "50px",
    padding: ".5rem 1rem",
    border: "2px solid transparent",
  };

  return (
    <nav className="main-nav">
      <ul style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "30px", listStyle: "none" }}>
        <li>
          <a href="#0" style={linkStyle}>
            Mac
          </a>
        </li>
        <li>
          <a href="#0" style={linkStyle}>
            iphone
          </a>
        </li>
        <li>
          <a href="#0" style={linkStyle}>
            ipad
          </a>
        </li>
        <li>
          <a href="#0" style={linkStyle}>
            iwatch
          </a>
        </li>
        <li>
          <a href="#0" style={linkStyle}>
            Support
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
