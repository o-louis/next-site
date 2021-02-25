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
  const API_URL = "https://pokeapi.co/api/v2/pokemon?limit=150";
  const IMAGE_URL = "https://pokeres.bastionbot.org/images/pokemon/:id.png";

  const response = await fetch(API_URL);
  const { results } = await response.json();

  const regex = /\/pokemon\/(\d+)\//;
  const pokemons = results.map(({ name, url }) => {
    let img = null;
    if (url.match(regex).length)
      img = IMAGE_URL.replace(":id", url.match(regex)[1]);
    return { name, img };
  });
  return { props: { pokemons } };
}

export default Pokedex;
