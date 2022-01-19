import NextImage from "next/image";

const Mories = ({ mories }) => {

  if (!mories) {
    return null;
  }

  return (
    <>
      {mories &&
        mories.map((token) => {
          return (
            <NextImage
              key={token.tokenID}
              height={40}
              width={40}
              src={token.imageURI}
              alt={token.tokenID}
            />
          );
        })}
    </>
  );
};

export default Mories;
