import { ChakraProvider } from "@chakra-ui/react";
// import { createClient, Provider } from "urql";

// const client = createClient({
//   url: "https://api.thegraph.com/subgraphs/name/quasi-askew/world-of-iwwon",
// });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
