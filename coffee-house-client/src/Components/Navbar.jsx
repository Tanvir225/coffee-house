import { NavLink } from "react-router-dom";
import logo from "../assets/images/more/logo1.png";
import "./Navbar/navbar.css"
const Navbar = () => {
    const links = <>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/add-coffee"}>Add Coffee</NavLink></li>
            
    </>
  return (
    <div className="bg-yellow-950 px-10 py-2 text-base-100 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-16 rounded-full" />
        <h2 className="text-2xl font-light">Espresso Emporium</h2>
      </div>

      <ul className="flex items-center gap-5 text-lg">
        {
            links
        }
      </ul>
    </div>
  );
};

export default Navbar;
