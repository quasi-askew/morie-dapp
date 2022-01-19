import NextImage from "next/image";
import { WrapItem } from "@chakra-ui/react";

const Mories = ({ mories }) => {
  if (!mories) {
    return null;
  }

  return (
    <>
      {mories &&
        mories.map((token) => {
          return (
            <WrapItem key={token.tokenID}>
              <NextImage
                height={50}
                width={50}
                src={token.imageURI}
                alt={token.tokenID}
              />
            </WrapItem>
          );
        })}
    </>
  );
};

export default Mories;
