import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>IDL Foundation</title>
        <meta
          name="description"
          content="Solana IDL Working Group - Specification and Tools"
        />
        <meta
          property="og:image"
          content="https://www.idl.foundation/card.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://www.idl.foundation/card.png"
        />
        <meta name="twitter:url" content="https://www.idl.foundation" />
        <meta name="twitter:title" content="IDL Foundation" />
        <meta
          name="twitter:description"
          content="Solana IDL Working Group - Specification and Tools."
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>IDL Foundation</h1>

        {/* List of company names */}
      </main>
    </div>
  );
}
