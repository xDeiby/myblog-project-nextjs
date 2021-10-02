import { MDXRemote } from "next-mdx-remote";
import * as React from "react";
import { getFileBySlug, getFiles } from "../../libs/mdx";

export default function Post({ frontMatter, source }) {
  return <MDXRemote {...source} />;
}

export async function getStaticProps({ params }) {
  const { frontMatter, source } = await getFileBySlug(params.slug);

  return {
    props: {
      source,
      frontMatter,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles();
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
