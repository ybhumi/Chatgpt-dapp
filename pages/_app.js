import Head from "next/head";
import "../styles/globals.css";


//internal
import { StateContextProvider } from "../Context/index";

export default function App({ Component, pageProps }) {
  return (
    <>
<Head>
  <link ref= 'icon' href = "assets/imgaes/favicon.png"></link>

</Head>


<StateContextProvider>
<Component {...pageProps} />
</StateContextProvider>

    {/* import scripts */}

    <scripts src = "assets/js/bootstrap.bundle.min.js"></scripts>
    <scripts src = "assets/js/swiper-bundle.min.js"></scripts>
    <scripts src = "assets/js/aos.js"></scripts>
    <scripts src = "assets/js/custom-aos.js"></scripts>
    <scripts src = "assets/js/home-animation.js"></scripts>
    <scripts src = "assets/js/header_sticky.js"></scripts>
    <scripts src = "assets/js/script.js"></scripts>

    
    </>
       
  );
}
