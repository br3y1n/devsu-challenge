"use client";
import { ISelectProps } from "./Select.interfaces";
import {
  OptionsContainerStyled,
  SelectContainer,
  SelectItemStyled,
  SelectedStyled,
  TriangleIcon,
} from "./Select.styles";
import { useSelectState } from "./hooks/useSelectState";

const Select = (props: ISelectProps) => {
  const {
    toggleDropdown,
    ref,
    selectedOption,
    open,
    options,
    handleOptionSelect,
  } = useSelectState(props);

  return (
    <SelectContainer ref={ref}>
      <SelectedStyled onClick={toggleDropdown}>
        {selectedOption.text}
      </SelectedStyled>

      <TriangleIcon $open={open} />

      {open && (
        <OptionsContainerStyled>
          {options.map((option, index) => (
            <SelectItemStyled
              key={index}
              onClick={() => handleOptionSelect(option)}
            >
              {option.text}
            </SelectItemStyled>
          ))}
        </OptionsContainerStyled>
      )}
    </SelectContainer>
  );
};

export default Select;
