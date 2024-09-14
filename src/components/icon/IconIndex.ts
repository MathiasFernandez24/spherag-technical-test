import IconKey from "./iconsSVG/Iconkey";
import IconLookOpen from "./iconsSVG/IconLookOpen";
import IconUser from "./iconsSVG/IconUser";

export const allIcons = {
  user: IconUser,
  key: IconKey,
  lookOpen: IconLookOpen,
};

export type AllIconNamesTypes = keyof typeof allIcons;
