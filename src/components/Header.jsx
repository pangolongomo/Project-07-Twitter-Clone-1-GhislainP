import stars from "../images/icons/stars.svg";

function Header() {
  return (
    <header className="header">
      <h1 className="page-title">Home</h1>
      <img src={stars} alt="stars" className="top-tweets" />
    </header>
  );
}

export default Header;
