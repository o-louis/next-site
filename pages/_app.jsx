import "tailwindcss/tailwind.css";
import Layout from "../components/Layouts/Layouts";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
