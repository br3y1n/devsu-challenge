import { useState } from "react";
import { IUseSelectState } from "./useSelectState.interfaces";
import { useClickOutside } from "@hooks/useClickOutside/useClickOutside";
import { ISelectOption, ISelectProps } from "../Select.interfaces";

const useSelectState = ({
  options,
  onChange,
}: ISelectProps): IUseSelectState => {
  const [selectedOption, setSelectedOption] = useState(
    options.find((option) => option.selected) ?? options[0],
  );
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const handleOptionSelect = (option: ISelectOption) => {
    setSelectedOption(option);
    onChange(option);
    onClose();
  };

  const toggleDropdown = () => {
    setOpen((prevValue) => !prevValue);
  };

  const { ref } = useClickOutside<HTMLDivElement>({ onClickOutside: onClose });

  return {
    toggleDropdown,
    ref,
    selectedOption,
    open,
    options,
    handleOptionSelect,
  };
};

export { useSelectState };
