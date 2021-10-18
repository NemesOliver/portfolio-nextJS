import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oliver Nemes - Home</title>
        <meta
          name="keywords"
          content="Portfolio, Frontend Developer, React Developer"
        />
      </Head>

      <main className={styles.container}>
        <h1>header 1</h1>
        <h2>header 2</h2>
        <h3>HEADER </h3>
        <p>paragraph</p>
      </main>
    </div>
  );
}
