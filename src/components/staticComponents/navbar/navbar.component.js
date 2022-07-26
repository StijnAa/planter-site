import React from "react";
import StyledNavbar from "./navbar.styled";

function Navbar() {
  return (
    <StyledNavbar>
      <ul>
        <li>logo</li>
        <li>
          <span>Build</span>
        </li>
        <li>
          <span>Inspiration</span>
        </li>
        <li>
          <span>Contact</span>
        </li>
      </ul>
    </StyledNavbar>
  );
}

export default Navbar;
