import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header title="Pokedex" />
      <main>{children}</main>
      <Footer description="2021. Oriane" />
    </>
  );
}
