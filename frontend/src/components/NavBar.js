import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem,Button} from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar position="static">
      <NavbarBrand>
        <p className="font-extrabold text-inherit text-xl">Recipe Tracker</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" to='/'>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link to='/about' aria-current="page">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link to={'/contact'} color="foreground" href="#">
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button onClick={()=>window.location.reload()}
                color="primary" href="#" variant="flat">
            Refresh
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
