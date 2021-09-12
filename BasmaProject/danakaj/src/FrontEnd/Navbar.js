import logo from "./Images/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo"></img>
      <div className="links">
        <a href="/"> Home </a>
        <a href="/"> About</a>
        <a href="/"> Services </a>
        <a href="/"> Portfolio </a>
        <a href="/"> Pricing </a>
        <a href="/"> Contact Us </a>
      </div>
    </nav>
  );
};

export default Navbar;
