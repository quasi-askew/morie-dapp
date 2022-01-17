import { ChakraProvider } from "@chakra-ui/react";
import { createClient, Provider } from "urql";

const client = createClient({
  url: "https://api.studio.thegraph.com/query/16206/mementomori/v0.0.1",
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}
export default MyApp;
