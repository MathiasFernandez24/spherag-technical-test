import { AtlasAdapterList } from "../domain/adapters/Atlas.adapter";
import { FarmAdapterList } from "../domain/adapters/Farm.adapter";
import { LoginDataModel } from "../domain/models/LoginData.model";

const API_AUTH = "https://preapi.spherag.com/Authentication/Login";
// const API_GETFARM =
//   "https://preapicore.spherag.com/System/List?Init=1&Limit=5&Total=true";

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

// --- hasta acá chequeado--- 12/9  00:18hs
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
    console.error("Error fetching data:", error);
  }
};

// --- hasta acá chequeado--- 13/9  17:11hs
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
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    const res = {
      data: AtlasAdapterList(data.records),
      maxPagesSize: data.totalPages,
    };

    return res;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// --- hasta acá chequeado--- 00/9  00:00hs
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

/**
PRUEBA TECNICA SPHERAG
Buenas tardes Mathias,
La prueba técnica consiste en realizar una app de móvil en React Native. Para realizar las diferentes llamadas a la API, se deberá realizar una llamada para obtener un token que se enviará en las diferentes llamadas como bearer token. La obtención de este token será transparente para el usuario.

 Esta aplicación mostrará las siguientes pantallas:
 - Listado de fincas:
  - Mostrará el listado paginado de fincas. Al pinchar en cada finca, navegaremos al listado de atlas vinculados a la finca. Mostraremos los siguientes campos:
    - Nombre
    - Favorita
    - Timezone
    - Descripción
 - Listado de atlas:   
   - Mostrará el listado paginado de atlas de la finca/sistema seleccionada previamente. AL pinchar en cada elemento, navegaremos al detalle de dicho atlas. De cada atlas, mostraremos los siguientes campos en una tarjeta:
     - Nombre
     - Estado
     - imei
     - Batería
     - Señal
     - Tipo de producto
     - Fin de suscripción
 - Detalle del Atlas:
   - Mostrará los datos del atlas y de sus conectores:
     - Atlas:
       - Nombre
       - Estado
       - imei
       - Batería
       - Señal
       - Tipo de producto
       - Fin de suscripción
       - Modo de energía
     - Conectores:
       - Inputs:
         - Flowmeter
           - Nombre
           - Acumulado24h: Valor+símbolo (Ej: 54€) - Si es null, pintamos N/A
         - Digital Input:
           - Nombre
           - Estado
       - Outputs:
         - Bomba:
           - Nombre
           - Modo
           - Estado
         - Válvula:
           - Nombre
           - Modo
           - Estado
         - Abonador:
           - Nombre
           - Modo
           - Estado
         - Mezclador:
           - Nombre
           - Modo
           - Estado
       - Sensors (clasificados por BusType):
         - I2C/SDI
           - Nombre
           - Tipo
           - Valores: Valor+símbolo (Ej: 54€) -  Si es null, pintamos N/A
         - SDI
           - Nombre
           - Tipo
           - Valores: Valor+símbolo (Ej: 54€) - Si es null, pintamos N/A
     - Mapa:
       - Se pintarán los conectores y el atlas en un mapa

 Se valorará:
 - UX/UI
 - Uso de iconos (Ej: estados, señal, batería, Tipo...)
 - Clean code
 - Uso de patrones.
 - Rendimiento
 - Proactividad
 - Entrega en plazo (17/09/2024)

 A continuación se detallan los diferentes endpoints de los que se hará uso:
 Login
 Endpoint: https://preapi.spherag.com/Authentication/Login
 Method: POST
 Body:
{
  "username": "testUserII@spherag.com",
  "password": "P@ssw0rd12345!"
}


 Get Systems
 Endpoint: https://preapicore.spherag.com/System/List?Init=1&Limit=20&Total=true
 Method: GET
 Params:
 - Init: Número de página
 - Limit: Registros a obtener
 - Total: Informa del total de registros
 Result:
 - SystemResponse:
   - Id: Identificador
   - Name: Nombre
   - Description: Descripción
   - TimeZone: TimeZone de la finca
   - Favourite: Favorito

 Get AtlasList By System
 Endpoint: https://preapicore.spherag.com/Atlas/BySystem/288?Init=1&Limit=40&showConnectors=true
 Method: GET
 Params:
   - 288: Id de la finca/system (Usar el de la finca seleccionada)
   - Init: Número de página
   - Limit: Registros a obtener
   - Total: Informa del total de registros
 Result:
 - AtlasResponse:
   - Imei: Identificador
   - Name: Nombre
   x- ProductTypeName: Nombre del tipo de producto
   x- Latitude: Latitud de las coordenadas
   x- Longitude: Longitud de las coordenadas
   - BatteryPercentage: % de batería
   - SignalPercentage: % de Señal
   - ExpiredDate: Fecha de fin de suscripción
   - EnergyMode:
     - 0: RealTime
     - 1: Eco
     - 2: Sleep
   - AtlasStatus:
     - 1: Dormido
     - 2: Dormido sin comunicación
     - 3: Dormido sin batería
     - 4: Dormido con batería baja
     - 5: Dormido con señal baja
     - 6: Dormido con batería y señal bajas
     - 7: RealTime
     - 8: RealTime sin comunicación
     - 9: RealTime sin batería
     - 10: RealTime con batería baja
     - 11: RealTime con señal baja
     - 12: RealTime con batería y señal bajas


 GetAtlas
 Endpoint: https://preapicore.spherag.com/Atlas/865648065109316
 Method: GET
 Params:
   - 865648065109316: Imei del atlas
 Result:
   +- Imei: Identificador
   +- Name: Nombre
   - ProductTypeName: Nombre del tipo de producto
   - Latitude: Latitud de las coordenadas
   - Longitude: Longitud de las coordenadas
   - BatteryPercentage: % de batería
   - SignalPercentage: % de Señal
   - ExpiredDate: Fecha de fin de suscripción
   - EnergyMode:
     - 0: RealTime
     - 1: Eco
     - 2: Dormido
   - AtlasStatus:
     - 1: Dormido
     - 2: Dormido sin comunicación
     - 3: Dormido sin batería
     - 4: Dormido con batería baja
     - 5: Dormido con señal baja
     - 6: Dormido con batería y señal bajas
     - 7: RealTime
     - 8: RealTime sin comunicación
     - 9: RealTime sin batería
     - 10: RealTime con batería baja
     - 11: RealTime con señal baja
     - 12: RealTime con batería y señal bajas
   - Conectores:
       - Campos comunes:
         - ConnectorNumber: Indica la posición en la que pintar el elemento
         - Name: Nombre
         - Type:
           - Válvula: 0
           - Bomba: 1
           - Abonador: 2
           - Mezclador: 3
           - Contador: 4
           - Digital Input: 5
           - Sensor: 6
         - Latitude: Latitud de las coordenadas
         - Longitude: Longitud de las coordenadas
       - Input:
         - Flowmeter:
           - accumulated24:
             - Value: Valor
             - Symbol: Símbolo
         - DigitalInput:
           - Status:
             - Cerrado: 0
             - Abierto: 1
       - Output:
         - Válvula:
           - Mode:
             - Manual: 0
             - Auto: 1
           - Status:
             - Cerrado: 0
             - Abierto: 1
         - Bomba:
           - Mode:
             - Manual: 0
             - Auto: 1
           - Status:
             - Cerrado: 0
             - Abierto: 1
         - Abonador:
           - Mode:
             - Manual: 0
             - Auto: 1
           - Status:
             - Cerrado: 0
             - Abierto: 1
         - Mezclador:
           - Mode:
             - Manual: 0
             - Auto: 1
           - Status:
             - Cerrado: 0
             - Abierto: 1
       - Sensor:
         - BusType: I2C/420/SDI
         - Tipo:
           - PRESION: 1
           - AMBIENT: 2
           - SOIL: 3
           - DEPTH: 4
           - SENTEK MT 10CM: 5
           - SENTEK MT 30CM : 6
           - SENTEK MT 60CM: 7
           - SENTEK MTS 10CM: 8
           - SENTEK MTS 30CM : 9
           - SENTEK MTS 60CM: 10
           - ENVIROPRO 40CM: 11
           - ENVIROPRO 80CM: 12
           - ENVIROPRO 40CM: 13
           - ENVIROPRO 80CM: 14
           - DECAGON: 15
           - 420 GENERICO: 16
           - TINOVI: 17
           - DLQIFENG5TE: 18
         - Values:
             - Value: Valor
             - Symbol: Símbolo

Adjunto la colección de llamadas y el entorno con las distintas urls para que puedas hacer pruebas usando postman.
Si necesitas ayuda en cualquier parte, podemos agendar una llamada e intento aclarar lo que necesites.

Un saludo.
**/
