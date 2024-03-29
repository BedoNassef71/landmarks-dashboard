"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import { getUsername, isLoggedIn, logout } from '@/app/(auth)/(utils)/helpers/auth.helper'

export default function CustomNavbar() {
  const isAuthenticated:boolean = isLoggedIn(); // Assume isLoggedIn checks if the user is authenticated

  return (
    <Navbar>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/landmarks">
            Landmarks
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="/cities" aria-current="page">
            Cities
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/tags">
            Tags
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {isAuthenticated ? isAuth() : notAuth()}
      </NavbarContent>
    </Navbar>
  );
}

const notAuth = () => (
  <>
    <NavbarItem className="hidden lg:flex">
      <Link href="/login">Login</Link>
    </NavbarItem>
    <NavbarItem>
      <Button as={Link} color="primary" href="/sign-up" variant="flat">
        Sign Up
      </Button>
    </NavbarItem>
  </>
);


const isAuth = () => {
  return (
    <>
      <NavbarItem className="hidden lg:flex">
        <Link onClick={logout} href={'/login'}>Logout</Link>
      </NavbarItem>
      <NavbarItem>
        <Button as={Link} color="primary" href="/profile" variant="flat">
          {getUsername()}
        </Button>
      </NavbarItem>
    </>
  );
};
