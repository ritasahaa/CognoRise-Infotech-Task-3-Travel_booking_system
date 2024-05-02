import React from 'react'

const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav class="navbar bg-body-tertiary fixed-top navbar-expand-lg">
       
        <div class="container-fluid">
            <div class="navbar-nav" >
                <a class="nav-link" href="#"> Travel Agency</a>
            </div>
            <div class="collapse navbar-collapse nav justify-content-center" id="navbarNavAltMarkup">
                <div class="navbar-nav" >
                 <a class="nav-link" href="#">Home</a>
                 <a class="nav-link" href="#">Pricing</a>
                 <a class="nav-link" href="#">About us</a>
                 <a class="nav-link" href="#">Contact us</a>
                </div>
               </div>

               <button class="btn btn-danger  px-2 me-2 " >Sign up</button>
             
              
           </div> 
    </nav>
      
    </div>
  )
}

export default Navbar