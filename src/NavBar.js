import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1>Cats From The Hood</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/AboutUs">About us</Link>
        <Link to="/CatsList">Meet Our Cats</Link>
      </div>
    </nav>
  );
}
