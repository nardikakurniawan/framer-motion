import "../styles/globals.css";
import Navbar from "./../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="py-8 max-w-6xl mx-auto font-lato font-bold">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
