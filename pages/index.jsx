import Head from "next/head";
import Pokemon from "../components/Pokemon/Pokemon";

const Pokedex = ({ pokemons }) => {
  return (
    <div>
      <Head>
        <title>Pokedex</title>
      </Head>
      <div className="py-8 mx-auto max-w-5xl grid justify-items-center grid-col-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pokemons.map(({ name, img }, id) => (
          <Pokemon
            className="max-w-xs w-5/12 lg:w-7/12"
            src={img}
            alt={name}
            key={id}
          />
        ))}
      </div>
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
