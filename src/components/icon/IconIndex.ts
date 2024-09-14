import IconClock from "./iconsSVG/IconClock";
import IconFavorite from "./iconsSVG/IconFavorite";
import IconKey from "./iconsSVG/Iconkey";
import IconLogout from "./iconsSVG/IconLogout";
import IconLookOpen from "./iconsSVG/IconLookOpen";
import IconUser from "./iconsSVG/IconUser";

export const allIcons = {
  user: IconUser,
  key: IconKey,
  lookOpen: IconLookOpen,
  favorite: IconFavorite,
  logout: IconLogout,
  clock: IconClock,
};

export type AllIconNamesTypes = keyof typeof allIcons;
