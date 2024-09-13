import { Farm } from "../models/Farm.model";

export const FarmAdapter = (farm: any): Farm => {
  const formaterFarm = {
    name: farm.name,
    description: farm.description,
    favorite: farm.favourite,
    timezone: farm.timeZone,
    id: farm.id,
  };
  return formaterFarm;
};
export const FarmAdapterList = (farm: any): Farm[] => {
  const formaterFarm = farm.map((farmItem: any): Farm => FarmAdapter(farmItem));
  return formaterFarm;
};
