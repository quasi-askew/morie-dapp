import Head from "next/head";
import NextImage from "next/image";
import { Box, Wrap, WrapItem, Image} from "@chakra-ui/react";
import { useQuery } from "urql";
import randomColor from "randomcolor";

const MorieQuery = `
  query {
		tokens(first: 1000) {
			id
			tokenID
			imageURI
		}
	}
`;

export default function Home() {
  const [result, reexecuteQuery] = useQuery({
    query: MorieQuery,
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
    <div>
      <Head>
        <title>mementomories</title>
        <meta
          name="description"
          content='"memento mori" is a latin saying that means"Remember you die".'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box py={8}>
          <Wrap spacing={0} justify={"center"}>
            {data?.tokens &&
              data.tokens.map((token) => {
                return (
                  <WrapItem key={token.tokenID}>
                    <NextImage
                      height={50}
                      width={50}
                      src={token.imageURI}
                      alt={token.tokenID}
                      placeholder="blur"
                      blurDataURL={rgbDataURL(
                        randomColor({
                          luminosity: "bright",
                          format: "rgbArray",
                        })
                      )}
                    />
                    {/* <Image
                      borderRadius="full"
                      boxSize="50px"
                      src={token.imageURI}
                      alt={token.tokenID}
											fallbackSrc={'https://cryptomories.iwwon.com/images/tetesolo.png'}
                    /> */}
                  </WrapItem>
                );
              })}
          </Wrap>
        </Box>
      </main>
    </div>
  );
}
