import IconBattery from "./iconsSVG/IconBattery";
import IconBatteryOff from "./iconsSVG/IconBatteryOff";
import IconCalendarCancel from "./iconsSVG/IconCalendarCancel";
import IconClock from "./iconsSVG/IconClock";
import IconFavorite from "./iconsSVG/IconFavorite";
import IconKey from "./iconsSVG/Iconkey";
import IconLogout from "./iconsSVG/IconLogout";
import IconLookOpen from "./iconsSVG/IconLookOpen";
import IconSignal from "./iconsSVG/IconSignal";
import IconSignalOff from "./iconsSVG/IconSignalOff";
import IconUser from "./iconsSVG/IconUser";

export const allIcons = {
  user: IconUser,
  key: IconKey,
  lookOpen: IconLookOpen,
  favorite: IconFavorite,
  logout: IconLogout,
  clock: IconClock,
  signal: IconSignal,
  signalOff: IconSignalOff,
  battery: IconBattery,
  batteryOff: IconBatteryOff,
  calendarCancel: IconCalendarCancel,
};

export type AllIconNamesTypes = keyof typeof allIcons;
