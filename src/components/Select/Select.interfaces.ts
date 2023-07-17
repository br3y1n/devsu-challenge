interface ISelectOption {
  text: string;
  value: string | number;
  selected: boolean;
}

interface ISelectProps {
  options: ISelectOption[];
  onChange: (option: ISelectOption) => void;
}

export type { ISelectOption, ISelectProps };
