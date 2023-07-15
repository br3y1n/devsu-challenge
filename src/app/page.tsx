import Image from "next/image";
import styles from "./page.module.css";

const Home = () => (
  <>
    <header className={styles.header}>
      <Image
        src="/images/banco-pichincha.webp"
        alt="banco pichincha"
        width={200}
        height={39}
      />
    </header>

    <main className={styles.main}></main>
  </>
);

export default Home;
