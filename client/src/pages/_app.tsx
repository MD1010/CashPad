import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "utils/apolloClient";

function App({ Component, pageProps }: any) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default App;
