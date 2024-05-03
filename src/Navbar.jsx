import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-around bg-zinc-200 py-4  fixed w-full font-medium z-10">
      <a className="nav-link" href="#">
        Travel Agency
      </a>
      <a className="nav-link" href="#">
        Home
      </a>
      <a className="nav-link" href="#">
        Pricing
      </a>
      <a className="nav-link" href="">
        About us
      </a>
      <a className="nav-link" href="#">
        Contact us
      </a>
      <button className="btn btn-danger  px-2 me-2 ">Sign up</button>
    </nav>
  );
};

export default Navbar;
