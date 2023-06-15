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
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Provider store={store}>
          <ApolloProvider client={client}>
            <Header />
            <Component {...pageProps} />

            <ToastContainer />
          </ApolloProvider>
        </Provider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
