"use client";
/* istanbul ignore file*/
import InfoMenuButton from "@components/InfoMenuButton/InfoMenuButton";
import Button from "@components/Button/Button";
import DotsButton from "@components/DotsButton/DotsButton";
import InfoIcon from "@components/InfoIcon/InfoIcon";
import Logo from "@components/Logo/Logo";
import Select from "@components/Select/Select";
import TextField from "@components/TextField/TextField";
import Tooltip from "@components/Tooltip/Tooltip";
import { VariantEnum } from "@enums";
import Image from "next/image";
import { HeaderStyled, MainStyled } from "./page.styles";

const Home = () => (
  <>
    <HeaderStyled>
      <Image
        src="/images/banco-pichincha.webp"
        alt="banco pichincha"
        width={200}
        height={49}
        priority
      />
    </HeaderStyled>

    <MainStyled>
      {
        // TODO remove all
      }
      <h3>TextField:</h3>
      <TextField label="ID" id="id" disabled />

      <br />
      <hr />
      <br />

      <h3>TextField with error:</h3>
      <TextField label="ID" id="id" error helperText="ID invalido" />

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
      <DotsButton />

      <br />
      <br />
      <hr />
      <br />

      <h3>InfoIcon:</h3>
      <InfoIcon />

      <br />
      <br />
      <hr />
      <br />

      <h3>Logo:</h3>
      <Logo
        alt="Empanadas"
        src="https://img-global.cpcdn.com/recipes/93eb395044826742/400x400cq70/photo.jpg"
      />

      <br />
      <br />
      <hr />
      <br />

      <h3>Select:</h3>
      <Select
        options={[
          { selected: false, text: "1", value: 1 },
          { selected: true, text: "2", value: 2 },
          { selected: false, text: "3", value: 3 },
        ]}
        onChange={() => {}}
      />

      <br />
      <br />
      <hr />
      <br />

      <Tooltip content="Este es un tooltip">
        <h3 style={{ display: "inline-block" }}>Tooltip:</h3>
      </Tooltip>

      <br />
      <br />
      <hr />
      <br />

      <h3>InfoMenuButton:</h3>
      <InfoMenuButton
        items={[
          { text: "menu 1", onClick: () => {} },
          { text: "menu 2", onClick: () => {} },
          { text: "menu 3", onClick: () => {} },
        ]}
      />
    </MainStyled>
  </>
);

export default Home;
