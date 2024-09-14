import { AllIconNamesTypes } from "../icon/IconIndex";

export type TextInputCoustomProps = {
  value: string;
  setValue: (text: string) => void;
  placeholder: string;
  leftIconName?: AllIconNamesTypes;
};
