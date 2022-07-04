import "./topbar.scss";
import { Person, Mail } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className={"topbar active"}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Bojan
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+1 703 909 0093</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>golichbojan@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}