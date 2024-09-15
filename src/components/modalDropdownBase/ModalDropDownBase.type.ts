import { ReactNode } from "react";

export type ModalDropdownBaseType = {
  visibility: boolean;
  onClose: () => void;
  children: ReactNode;
};
