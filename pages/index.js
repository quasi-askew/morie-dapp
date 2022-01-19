import dynamic from "next/dynamic";
import { lazy, Suspense, useEffect, useState } from "react";
import Head from "next/head";
import { Box, Wrap } from "@chakra-ui/react";
const Mories = lazy(() => import('../components/Mories'))


const Home = () => {
  const [showChild, setShowChild] = useState(false);

  // Wait until after client-side hydration to show
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    // You can show some kind of placeholder UI here
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
        <Box>
          <Wrap spacing={0} justify={"center"}>
            <Suspense>
              <Mories skip={0} first={1000} />
            </Suspense>
            <Suspense>
              <Mories skip={1000} first={1000} />
            </Suspense>
            <Suspense>
              <Mories skip={2000} first={1000} />
            </Suspense>
            <Suspense>
              <Mories skip={3000} first={1000} />
            </Suspense>
            <Suspense>
              <Mories skip={4000} first={1000} />
            </Suspense>
            <Suspense>
              <Mories skip={5000} first={1000} />
            </Suspense>
            <Suspense>
              <Mories skip={6000} first={1000} />
            </Suspense>
            <Suspense>
              <Mories skip={7000} first={1000} />
            </Suspense>
            <Suspense>
              <Mories skip={8000} first={1000} />
            </Suspense>
            <Suspense>
              <Mories skip={9000} first={1000} />
            </Suspense>
          </Wrap>
        </Box>
      </main>
    </div>
  );
};

export default Home;
