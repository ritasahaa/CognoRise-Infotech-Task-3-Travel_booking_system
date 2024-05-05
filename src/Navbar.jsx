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
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#">Pricing</a>
          <a className="nav-link" href="#">About us</a>
          <a className="nav-link" href="#">Contact us</a>
      </div>
      </div>
      
      <button className="btn btn-primary " >Sign up</button>
      </div>
       </nav>
      
    
   </div>
  );
};

export default Navbar;
