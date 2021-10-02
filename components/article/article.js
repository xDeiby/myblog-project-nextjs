import {
  ArticleContent,
  ContainerArticle,
  Excerpt,
  Time,
  Title,
} from "./article.style";
import Image from "next/image";
import blogImage from "../../public/images/blog01.jpg";
import Tag from "../tags";

export default function Article({ post }) {
  const { author, createdAt, title, excerpt, tags } = post;

  return (
    <ContainerArticle>
      <Image src={blogImage} alt="imagen article" />
      <ArticleContent>
        {tags && <Tag tags={tags} />}
        <Title>{title}</Title>
        <Excerpt>{excerpt}</Excerpt>
      </ArticleContent>
    </ContainerArticle>
  );
}
