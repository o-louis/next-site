import Head from "next/head";

const Pokedex = ({ pokemons }) => {
  return (
    <div className="container">
      <Head>
        <title>Pokedex</title>
      </Head>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
  const pokemons = await response.json();
  return { props: { pokemons } };
}

export default Pokedex;
