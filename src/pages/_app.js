import "@/styles/global.module.scss";
import Navbar from "@/components/Navbar/index"; // Adjust path if needed

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
