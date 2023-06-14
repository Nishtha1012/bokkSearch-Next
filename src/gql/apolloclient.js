import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://bookserver-khaki.vercel.app",
  cache: new InMemoryCache(),
});

export default client;
