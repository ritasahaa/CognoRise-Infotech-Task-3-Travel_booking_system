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
        <a className="nav-link" href="#">Travel Agency</a>
      </div>
      
      

      <div className=" justify-content-center" id="navbarNavAltMarkup">
      <div className="navbar-nav px-2 me-2"> 
      <a className="nav-link" href="#"> <FontAwesomeIcon icon={faHome} /> Home</a>
          <a className="nav-link" href="#"> <FontAwesomeIcon icon={faCircleInfo} /> About</a>
          <a className="nav-link" href="#"> <FontAwesomeIcon icon={faSuitcaseMedical} /> Service </a>
          <a className="nav-link" href="#"> <FontAwesomeIcon icon={faAddressBook} /> Contact</a>
      </div>
      </div>
      
      <button className="btn btn-primary " >Sign up</button>
      </div>
       </nav>
      
    
   </div>
  );
};

export default Navbar;
