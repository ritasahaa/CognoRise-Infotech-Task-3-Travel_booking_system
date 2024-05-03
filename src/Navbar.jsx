import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-around bg-zinc-200 py-4  fixed w-full font-medium z-10">
      <a class="nav-link" href="#">
        Travel Agency
      </a>
      <a class="nav-link" href="#">
        Home
      </a>
      <a class="nav-link" href="#">
        Pricing
      </a>
      <a class="nav-link" href="">
        About us
      </a>
      <a class="nav-link" href="#">
        Contact us
      </a>
      <button class="btn btn-danger  px-2 me-2 ">Sign up</button>
    </nav>
  );
};

export default Navbar;
