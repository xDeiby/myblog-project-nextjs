import React from "react";
import Link from "next/link";

const CustomLink = ({ href, name, className }) => (
  <Link href={href} passHref>
    <a className={className}>{name}</a>
  </Link>
);

export default CustomLink;
