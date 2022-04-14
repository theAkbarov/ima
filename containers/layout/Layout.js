import Head from "next/head";
import Header from "../../components/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import styles from "./layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <Header />
      <Sidebar />
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
}
