import {
  HeaderContainer,
  HeaderContent,
  HeaderTitle,
  HeaderDescription,
  Layer,
  HeaderStyled,
} from "./header.style";

export default function Header({ isHome, children }) {
  return (
    <HeaderContainer>
      <Layer />
      <HeaderStyled>
        {children}
        <HeaderContent>
          <HeaderTitle>My Blog</HeaderTitle>
          <HeaderDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book
          </HeaderDescription>
        </HeaderContent>
      </HeaderStyled>
    </HeaderContainer>
  );
}
