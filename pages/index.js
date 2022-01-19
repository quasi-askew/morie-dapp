import Head from "next/head";
import Mories from "../components/Mories";
import { gql } from "@apollo/client";
import client from "../apollo-client";

const Home = ({
  morieWave1,
  morieWave2,
  morieWave3,
  morieWave4,
  morieWave5,
  morieWave6,
  morieWave7,
  morieWave8,
  morieWave9,
  morieWave10,
}) => {
  const allMories = [
    ...morieWave1,
    ...morieWave2,
    ...morieWave3,
    ...morieWave4,
    ...morieWave5,
    ...morieWave6,
    ...morieWave7,
    ...morieWave8,
    ...morieWave9,
    ...morieWave10,
  ];

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
        <div
        >
          <Mories mories={allMories} />
        </div>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const { data: morieWave1 } = await client.query({
    query: gql`
      query {
        tokens(orderBy: tokenID, first: 1000, where: { tokenID_gt: 0 }) {
          tokenID
          imageURI
        }
      }
    `,
  });

  const { data: morieWave2 } = await client.query({
    query: gql`
      query {
        tokens(orderBy: tokenID, first: 1000, where: { tokenID_gt: 1000 }) {
          tokenID
          imageURI
        }
      }
    `,
  });

  const { data: morieWave3 } = await client.query({
    query: gql`
      query {
        tokens(orderBy: tokenID, first: 1000, where: { tokenID_gt: 2000 }) {
          tokenID
          imageURI
        }
      }
    `,
  });

  const { data: morieWave4 } = await client.query({
    query: gql`
      query {
        tokens(orderBy: tokenID, first: 1000, where: { tokenID_gt: 3000 }) {
          tokenID
          imageURI
        }
      }
    `,
  });

  const { data: morieWave5 } = await client.query({
    query: gql`
      query {
        tokens(orderBy: tokenID, first: 1000, where: { tokenID_gt: 4000 }) {
          tokenID
          imageURI
        }
      }
    `,
  });

  const { data: morieWave6 } = await client.query({
    query: gql`
      query {
        tokens(orderBy: tokenID, first: 1000, where: { tokenID_gt: 5000 }) {
          tokenID
          imageURI
        }
      }
    `,
  });

  const { data: morieWave7 } = await client.query({
    query: gql`
      query {
        tokens(orderBy: tokenID, first: 1000, where: { tokenID_gt: 6000 }) {
          tokenID
          imageURI
        }
      }
    `,
  });

  const { data: morieWave8 } = await client.query({
    query: gql`
      query {
        tokens(orderBy: tokenID, first: 1000, where: { tokenID_gt: 7000 }) {
          tokenID
          imageURI
        }
      }
    `,
  });

  const { data: morieWave9 } = await client.query({
    query: gql`
      query {
        tokens(orderBy: tokenID, first: 1000, where: { tokenID_gt: 8000 }) {
          tokenID
          imageURI
        }
      }
    `,
  });

  const { data: morieWave10 } = await client.query({
    query: gql`
      query {
        tokens(orderBy: tokenID, first: 1000, where: { tokenID_gt: 9000 }) {
          tokenID
          imageURI
        }
      }
    `,
  });

  return {
    props: {
      morieWave1: morieWave1.tokens,
      morieWave2: morieWave2.tokens,
      morieWave3: morieWave3.tokens,
      morieWave4: morieWave4.tokens,
      morieWave5: morieWave5.tokens,
      morieWave6: morieWave6.tokens,
      morieWave7: morieWave7.tokens,
      morieWave8: morieWave8.tokens,
      morieWave9: morieWave9.tokens,
      morieWave10: morieWave10.tokens,
    },
  };
}
