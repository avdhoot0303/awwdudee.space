import "../styles/globals.css";
import Head from "next/head"
import { ThemeProvider } from "next-themes";

const App = ({ Component, pageProps }) => {
  return (
    

    <ThemeProvider>
      <Head>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>


  );
};

export default App;
