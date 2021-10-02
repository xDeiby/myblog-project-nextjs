import React from "react";
import Link from "next/link";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Li, A, Icon, Nav, NavLeft, NavRight } from "./menu.style";
import { faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Menu() {
  return (
    // Menu Container
    <Nav>
      {/* Menu Buttons */}
      <NavLeft>
        <Li>
          <Link href="/" passHref>
            <A>Home</A>
          </Link>
        </Li>
        <Li>
          <Link href="/blog" passHref>
            <A>Blog</A>
          </Link>
        </Li>

        <Li>
          <Link href="/" passHref>
            <A>About</A>
          </Link>
        </Li>
        <Li>
          <Link href="/" passHref>
            <A>Contact</A>
          </Link>
        </Li>
      </NavLeft>
      {/* Icon Buttons */}
      <NavRight>
        {/* <Icon icon={faSun} /> */}
        <Icon icon={faMoon} />
        <Icon icon={faGithub} />
        <Icon icon={faFacebook} />
      </NavRight>
    </Nav>
  );
}
