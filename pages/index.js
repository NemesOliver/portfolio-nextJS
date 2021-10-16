import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oliver Nemes / Home</title>
        <meta
          name="keywords"
          content="Portfolio, Frontend Developer, React Developer"
        />
        <link rel="icon" href="/assets/menu_icon.png" />
      </Head>

      <main className={styles.container}>Home</main>
    </div>
  );
}
