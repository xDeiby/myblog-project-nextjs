import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

export const getFiles = () => fs.readdirSync(path.join(root, "data"));

export const getFileBySlug = async (slug) => {
  const mdxSource = fs.readFileSync(
    path.join(root, "data", `${slug}.mdx`),
    "utf-8"
  );

  const { data, content } = await matter(mdxSource);
  const source = await serialize(content, {});

  return {
    source,
    frontMatter: {
      ...data,
      source,
    },
  };
};

export const getAllFilesMetadata = async () => {
  const files = getFiles();

  return files.reduce((allPosts, postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, "data", postSlug),
      "utf-8"
    );
    const { data } = matter(mdxSource);

    return [{ ...data, slug: postSlug.replace(".mdx", "") }, ...allPosts];
  }, []);
};
