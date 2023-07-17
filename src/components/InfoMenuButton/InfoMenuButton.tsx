import DotsButton from "../DotsButton/DotsButton";
import Menu from "../Menu/Menu";
import { IInfoMenuButtonProps } from "./InfoMenuButton.interfaces";
import { useInfoMenuButtonState } from "./hooks/useInfoMenuButtonState";

const InfoMenuButton = ({ items }: IInfoMenuButtonProps) => {
  const { ref, open, onClose, toggleOpen } = useInfoMenuButtonState();

  return (
    <>
      <DotsButton
        ref={ref}
        onClick={() => {
          toggleOpen();

          console.log("entro");
        }}
      >
        Hola
      </DotsButton>

      {open && <Menu anchorEl={ref} onClose={onClose} items={items} />}
    </>
  );
};

export default InfoMenuButton;
