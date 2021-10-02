import Link from "next/link";
import React from "react";
import Tags, { ContainerTags, StyledTag } from ".";

const CustomTag = ({ tag }) => (
  <Link href={"/"} passHref>
    <StyledTag>{tag}</StyledTag>
  </Link>
);

export default function Tag({ tags }) {
  const parsedTags = tags.trim().split(",");

  return (
    <ContainerTags>
      {tags
        .trim()
        .split(",")
        .map((tag, index) => (
          <CustomTag key={index} tag={tag} />
        ))}
    </ContainerTags>
  );
}
