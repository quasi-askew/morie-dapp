import Head from "next/head";
import { Box, Wrap } from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import Mories from "../components/Mories";

const Home = () => {
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
            <Mories skip={0} first={100} />
            <Mories skip={100} first={100} />
            <Mories skip={200} first={100} />
            <Mories skip={300} first={100} />
            <Mories skip={400} first={100} />
            <Mories skip={500} first={100} />
            <Mories skip={600} first={100} />
            <Mories skip={700} first={100} />
            <Mories skip={800} first={100} />
            <Mories skip={900} first={100} />
            <Mories skip={1000} first={100} />
            <Mories skip={1100} first={100} />
            <Mories skip={1200} first={100} />
            <Mories skip={1300} first={100} />
            <Mories skip={1400} first={100} />
            <Mories skip={1500} first={100} />
            <Mories skip={1600} first={100} />
            <Mories skip={1700} first={100} />
          </Wrap>
        </Box>
      </main>
    </div>
  );
};

export default withUrqlClient((_ssrExchange, ctx) => ({
  url: "https://api.thegraph.com/subgraphs/name/quasi-askew/world-of-iwwon",
}))(Home);
