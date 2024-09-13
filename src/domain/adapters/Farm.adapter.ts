import { Farm } from "../models/Farm.model";

export const FarmAdapter = (farm: any): Farm => {
  const formatedFarm: Farm = {
    name: farm.name,
    description: farm.description,
    favorite: farm.favourite,
    timezone: farm.timeZone,
    id: farm.id,
  };
  return formatedFarm;
};
export const FarmAdapterList = (farm: any): Farm[] => {
  const formatedFarm: Farm[] = farm.map(
    (farmItem: any): Farm => FarmAdapter(farmItem)
  );
  return formatedFarm;
};
