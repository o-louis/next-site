import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header
        title="Pokedex"
        className="w-full h-14 bg-red-700 flex justify-center items-center text-white uppercase text-xl font-bold tracking-wide"
      />
      <main>{children}</main>
      <Footer description="2021. Oriane" />
    </>
  );
}
