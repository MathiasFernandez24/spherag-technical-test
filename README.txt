Prueba Técnica Spherag
Descripción del Proyecto
Esta aplicación móvil, desarrollada en React Native, es parte de la prueba técnica solicitada por Spherag. La aplicación interactúa con varios endpoints de una API para mostrar información sobre fincas, atlas y conectores en una interfaz amigable para el usuario. Las principales funcionalidades incluyen:

Listado de Fincas: Muestra un listado paginado de fincas, incluyendo nombre, estado favorito, zona horaria y descripción.
Listado de Atlas por Finca: Permite navegar al listado de atlas vinculados a una finca específica, mostrando detalles como estado, batería, modo de bateria, señal, tipo de producto y fecha de expiración.
Detalle de Atlas y Conectores: Proporciona información detallada de un atlas seleccionado, incluidos sus conectores clasificados por tipo.

Mapa de Conectores: Visualiza los atlas y conectores en un mapa interactivo, permitiendo hacer zoom para ver todos los pines sin superposición y autofocus animado.


Tecnologías Utilizadas
React Native: Framework para el desarrollo de aplicaciones móviles multiplataforma.
Expo: Herramienta para la construcción y ejecución de aplicaciones React Native.
React Navigation: Librería para la navegación en aplicaciones React Native.
React Native Maps: Para la integración de mapas en la aplicación.
Jest y Testing Library: Herramientas para la realización de pruebas unitarias y de integración.


Pasos a seguir para ejecutar el proyecto:

1- Clona este repositorio en tu máquina local:
    git clone https://github.com/MathiasFernandez24/spherag-technical-test

2- Ingresa a la raiz del proyecto:
    cd spherag-technical-test

3- Instala las dependencias en la raiz del proyecto:
    yarn install
    ó
    npm i

4- Ejecuta la aplicacion:
    npx expo start

5- Escanea el codigo QR con la app "Expo go" desde tu dispositivo o presiona la letra "a" si tienes un emulador de android corriendo o la letra "i" si tienes un emulador de Ios corriendo