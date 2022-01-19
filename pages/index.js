import Head from "next/head";
import Mories from "../components/Mories";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { Box, Wrap } from "@chakra-ui/react";

const Home = ({
  morieWave,
}) => {

  return (
    <div>
      <Head>
        <title>mementomories</title>
        <meta
          name="description"
          content='"Memento Mori" is a latin saying that means "Remember you die".'
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box>
          <Wrap justify={"center"} spacing={0} outline={0}>
            <Mories mories={morieWave} />
          </Wrap>
        </Box>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const { data: morieWave } = await client.query({
    query: gql`
      query {
        tokens(orderBy: tokenID, first: 1000, where: { tokenID_gt: 0 }) {
          tokenID
          imageURI
					contentURI
        }
      }
    `,
  });


  return {
    props: {
      morieWave: morieWave.tokens,
    },
  };
}
