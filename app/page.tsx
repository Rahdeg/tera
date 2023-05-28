"use client";
import InputForm from "./components/Input";
import styles from "./styles/page.module.css";
import Movies from "./components/Movies";
import { useStateValue } from "./context/contextProvider";

export default function Home() {
  const [{ searchItem }, dispatch] = useStateValue();
  return (
    <main className={styles.main}>
      <p className={styles.title}>
        Show<span className={styles.titlespan}>Flix</span>
      </p>
      <div className={styles.container}>
        <p className={styles.explore}>Explore</p>
        <InputForm />
      </div>
      <p className={styles.results}>
        Results for:{" "}
        <span className={styles.searchitem}>
          {searchItem ? searchItem : "Mortal combat"}
        </span>
      </p>
      <div className={styles.grid}>
        <Movies />
      </div>
    </main>
  );
}
