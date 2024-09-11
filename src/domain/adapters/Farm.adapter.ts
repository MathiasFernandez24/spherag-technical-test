import { Farm } from "../models/Farm.model";

export const FarmAdapter = (farm: any): Farm => {
  const formaterFarm: Farm = {
    name: farm.name,
    description: farm.description,
    favorite: farm.favorite,
    timezone: farm.timezone,
  };
  return formaterFarm;
};
