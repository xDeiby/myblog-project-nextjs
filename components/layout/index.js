import Footer from "../footer";
import Header from "../header";
import Menu from "../menu";

export default function Layout({ children }) {
  return (
    <div>
      <Header>
        <Menu />
      </Header>
      {children}
      <Footer />
    </div>
  );
}
