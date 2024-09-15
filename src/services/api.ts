import { AtlasAdapterList } from "../domain/adapters/Atlas.adapter";
import { FarmAdapterList } from "../domain/adapters/Farm.adapter";
import { LoginDataModel } from "../domain/models/LoginData.model";

const API_AUTH = "https://preapi.spherag.com/Authentication/Login";

//Login
export const loginRequest = async (loginData: LoginDataModel): Promise<any> => {
  try {
    const response = await fetch(API_AUTH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(`Login failed: ${error.message}`);
  }
};

//Get Farms list
export const getFarmList = async (token: string | null, page: number) => {
  try {
    const response = await fetch(
      `https://preapicore.spherag.com/System/List?Init=${page}&Limit=10&Total=true`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    const res = {
      data: FarmAdapterList(data.records),
      maxPagesSize: data.totalPages,
    };
    return res;
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
};

//GET Systems List by Id
export const getSystemListByFarmId = async (
  token: string | null,
  id: string,
  page: number
) => {
  try {
    const response = await fetch(
      `https://preapicore.spherag.com/Atlas/BySystem/${id}?Init=${page}&Limit=20&showConnectors=true`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      console.log("ERROR");
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    const res = {
      data: AtlasAdapterList(data.records),
      maxPagesSize: data.totalPages,
    };
    return res;
  } catch (error) {
    throw new Error("Error fetching data:", error);
  }
};

//GET Atlas Detail by imei
export const getAtlasByImei = async (token: string | null, imei: string) => {
  try {
    const response = await fetch(
      `https://preapicore.spherag.com/Atlas/${imei}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
