/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import "./Nav.css";
import "../Variables.css";

export default function Nav() {
  return (
    <nav >
        <div className="nav-left">
            <h1>Website</h1>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Features</a>
        </div>
      
        <form>
        <input type="text" placeholder="Search"/>
        <input type="submit" value="Search" />
        </form>
    </nav>
  );
}
