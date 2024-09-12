import { Farm } from "../models/Farm.model";

export const FarmAdapter = (farm: any): Farm[] => {
  console.log('""""""""""""""farm""""""""""""""');
  console.log(farm);

  const formaterFarm = farm.map(
    (farmItem: any): Farm => ({
      name: farmItem.name,
      description: farmItem.description,
      favorite: farmItem.favourite,
      timezone: farmItem.timeZone,
      id: farmItem.id,
    })
  );
  return formaterFarm;
};
