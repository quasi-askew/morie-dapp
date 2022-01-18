import NextImage from "next/image";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { useQuery } from "urql";
import randomColor from "randomcolor";
import MorieQuery from "../utils/MorieQuery";

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
                height={40}
                width={40}
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
            </WrapItem>
          );
        })}
    </>
  );
};

export default Mories;
