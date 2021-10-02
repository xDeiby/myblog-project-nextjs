import { Article } from "../../components/article";
import { getAllFilesMetadata } from "../../libs/mdx";
import { ContainerBlog } from "../../components/article/article.style";
import { PostsContainer } from "../../components/article";

export default function Blog({ posts }) {
  return (
    <ContainerBlog>
      {/* <h1>Posts</h1> */}

      <PostsContainer>
        {posts.map((post) => (
          <Article key={post.slug} post={post} />
        ))}
      </PostsContainer>
    </ContainerBlog>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();

  return {
    props: {
      posts,
    },
  };
}
