import { lazy, Suspense, } from "react";
import Head from "next/head";
const Mories = lazy(() => import("../components/Mories"));

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
        <div style={{display: "flex", flexDirection: "column", flexWrap: "wrap", maxHeight: "100vh"}}>
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
        </div>
      </main>
    </div>
  );
};

export default Home;
