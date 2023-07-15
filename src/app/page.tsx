import Image from "next/image";
import styles from "./page.module.css";
import Button from "@components/Button/Button";
import { VariantEnum } from "@enums";
import TextField from "@/components/TextField/TextField";

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

    <main className={styles.main}>
      {
        // TODO remove all
      }
      <h3>TextField:</h3>
      <TextField label="ID" id="id" />

      <br />
      <hr />
      <br />

      <h3>Button Secondary:</h3>
      <Button variant={VariantEnum.SECONDARY}>Agregar</Button>

      <br />
      <br />
      <hr />
      <br />

      <h3>Button Primary disabled:</h3>
      <Button variant={VariantEnum.PRIMARY} disabled>
        Reiniciar
      </Button>

      <br />
      <br />
      <hr />
      <br />

      <h3>Dots button:</h3>
      <p>coming soon...</p>

      <br />
      <br />
      <hr />
      <br />

      <h3>Menu:</h3>
      <p>coming soon...</p>

      <br />
      <br />
      <hr />
      <br />

      <h3>InfoIcong:</h3>
      <p>coming soon...</p>

      <br />
      <br />
      <hr />
      <br />

      <h3>Table:</h3>
      <p>coming soon...</p>
    </main>
  </>
);

export default Home;
