import styled from "styled-components";

// Blog container
const ContainerBlog = styled.div`
  background-color: #eff1f5;
`;

// Container posts
export const PostsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
`;

export const ArticleContent = styled.div`
  background-color: white;
  font-family: Yaldevi, sans-serif;
  padding: 20px;
  text-align: center;
  letter-spacing: 1px;
  flex-grow: 1;
`;

const Title = styled.h1`
  margin: 0px;
  font-size: 1.5em;
  color: black;
`;

const Excerpt = styled.p`
  color: #606263;
  font-size: 0.8em;
  font-weight: 700;
`;

// Articles
const ContainerArticle = styled.article`
  transition: ease 0.2s;
  flex-direction: row;
  flex-grow: 1;
  flex-basis: 400px;
  max-width: 400px;
  min-width: 300px;
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    border: solid 1px blue;
    ${Title} {
      color: blue;
    }
    ${Excerpt} {
      color: blue;
    }
  }
`;

const Time = styled.time``;

export { ContainerArticle, ContainerBlog, Title, Excerpt, Time };
