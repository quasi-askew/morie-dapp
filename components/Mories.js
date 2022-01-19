import NextImage from "next/image";
import { WrapItem } from "@chakra-ui/react";
import randomColor from "randomcolor";
import MorieQuery from "../utils/MorieQuery";
import { withUrqlClient, initUrqlClient } from "next-urql";
import {
  ssrExchange,
  dedupExchange,
  cacheExchange,
  fetchExchange,
  useQuery,
} from "urql";

const Mories = ({ skip, first }) => {
  const [result, reexecuteQuery] = useQuery({
    query: MorieQuery,
    variables: {
      skip: skip,
      first: first,
    },
  });

  const { data, fetching, error } = result;

  const keyStr =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  const triplet = (e1, e2, e3) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

  const rgbDataURL = (rbg) => {
    return `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, rbg[0], rbg[2]) + triplet(rbg[1], 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;
  };

  if (!data) {
    return null;
  }

  return (
    <>
      {data?.tokens &&
        data.tokens.map((token) => {
          return (
            <WrapItem key={token.tokenID}>
              <NextImage
                height={100}
                width={100}
                src={token.imageURI}
                alt={token.tokenID}
                placeholder="blur"
                blurDataURL={rgbDataURL(
                  randomColor({
                    luminosity: "light",
                    format: "rgbArray",
                  })
                )}
              />
            </WrapItem>
          );
        })}
    </>
  );
};

export async function getStaticProps(ctx) {
  const ssrCache = ssrExchange({ isClient: false });
  const client = initUrqlClient({
    url: "https://api.thegraph.com/subgraphs/name/quasi-askew/world-of-iwwon",
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  });

  // This query is used to populate the cache for the query
  // used on this page.
  await client.query(MorieQuery).toPromise();

  return {
    props: {
      // urqlState is a keyword here so withUrqlClient can pick it up.
      urqlState: ssrCache.extractData(),
    },
    revalidate: 600,
  };
}

export default withUrqlClient(
  (ssr) => ({
    url: "https://api.thegraph.com/subgraphs/name/quasi-askew/world-of-iwwon",
  }),
  { ssr: false } // Important so we don't wrap our component in getInitialProps
)(Mories);
