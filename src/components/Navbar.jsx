import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faSuitcaseMedical } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
  return (
   <div>
    <nav className="navbar bg-body-tertiary fixed-top navbar-expand-lg border-bottom ">
      <div className="container-fluid">
      <div className="navbar-nav ">
        <Link className="nav-link" to="/">Travel Agency</Link>
      </div>
      
      

      <div className=" justify-content-center" id="navbarNavAltMarkup">
      <div className="navbar-nav px-2 me-2"> 
      <Link className="nav-link" to="/"> <FontAwesomeIcon icon={faHome} /> Home</Link>
          <Link className="nav-link" to="/about"> <FontAwesomeIcon icon={faCircleInfo} /> About</Link>
          <Link className="nav-link" to="/service"> <FontAwesomeIcon icon={faSuitcaseMedical} /> Service </Link>
          <Link className="nav-link" to="/contact"> <FontAwesomeIcon icon={faAddressBook} /> Contact</Link>
      </div>
      </div>
      
      <Link to="/createuser" >Sign up</Link>
      </div>
       </nav>
      
    
   </div>
  );
};

export default Navbar;
