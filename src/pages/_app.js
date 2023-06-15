import { ToastContainer } from "react-toastify";
import "../../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "../store/store";
import { ApolloProvider } from "@apollo/client";
import client from "../gql/apolloclient";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CircularProgress } from "@mui/material";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("finished");
      setLoading(false);
    };
    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeError", end);
    router.events.on("routeChangeComplete", end);
    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <ApolloProvider client={client}>
            <Header />

            {loading ? (
              <div className="mx-auto flex items-center justify-center mt-5">
                <CircularProgress className="mx-auto" />
              </div>
            ) : (
              <Component {...pageProps} />
            )}
            <ToastContainer />
          </ApolloProvider>
        </Provider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
