# Uso de la Configuración de Rutas y versiones

Este README proporciona una explicación detallada del código que se utiliza para configurar las rutas destinadas a eliminar datos en una API RESTful. El objetivo es garantizar que cualquier persona pueda comprender cómo funcionan estas rutas y cómo se gestionan las diferentes versiones de la API.

## Descripción General

El código proporcionado define una función llamada `deleteInitRoute` que se utiliza para inicializar las rutas destinadas a eliminar datos en una API RESTful. Estas rutas permiten a los usuarios de la API eliminar información de diferentes tipos, como hábitats, animales, emergencias, servicios, personal, y más.

## Pasos de Configuración

A continuación, se describen los pasos de configuración realizados en la función `deleteInitRoute`:

1. Importación de Bibliotecas y Controladores:

   ```javascript
   import { Router } from "express";
   import { deleteHabitatController, deleteAnimalsController, deleteEmergenciesController, deleteServicesController, deleteStaffsController, deleteTacoShopController } from "../controllers/deleteData.js";
   import passportHelper from "../helpers/passport.js";
   import routesVersioning from "express-routes-versioning";
   ```

   - La función comienza importando las bibliotecas necesarias, incluyendo Express, `express-routes-versioning`, y controladores que se encargan de realizar las operaciones de eliminación.

2. Creación de la Ruta Principal y Versión:

   ```javascript
   export const deleteInitRoute = () => {
       const app = Router();
       const version = routesVersioning();
   ```

   - Dentro de la función, se crea un objeto `app` de la clase Router de Express. Este objeto se utilizará para definir y gestionar las rutas relacionadas con la eliminación de datos.
   - Se crea también un objeto `version` de la clase `routesVersioning`. Este objeto se utilizará para aplicar la versioning a las rutas de la API, lo que permite gestionar diferentes versiones de las mismas.

3. Configuración de Autenticación Bearer:

   ```javascript
       app.use(passportHelper.authenticate("bearer"), { session: false });
   ```

   - Se utiliza el método `use()` en el objeto `app` para configurar la autenticación Bearer. La autenticación Bearer se utiliza para verificar la identidad de los usuarios que acceden a la API mediante tokens de acceso.

4. Definición de Rutas para Eliminar Datos:

   ```javascript
       app.delete("/habitats", version({
           "^1.0.0": deleteHabitatController,
           "^2.0.0": deleteHabitatController,
           "3.0.0": notAllowed
       }));
       // Otras rutas similares para eliminar diferentes tipos de datos
   ```

   - Se definen rutas para eliminar datos utilizando el método `delete()` en el objeto `app`. Cada ruta hace referencia a un controlador específico (`deleteHabitatController`, `deleteAnimalsController`, etc.) que se encarga de realizar la operación de eliminación.
   - El objeto `version` se utiliza para gestionar diferentes versiones de las rutas. Cada versión tiene su propio controlador. Por ejemplo, para la versión "1.0.0" y "2.0.0", se utiliza el controlador `deleteHabitatController`, mientras que para la versión "3.0.0", se devuelve una respuesta indicando que la operación no está permitida (`notAllowed`).

5. Devolución de la Ruta Configurada:

   ```javascript
       return app;
   }
   ```

   - Finalmente, la función devuelve el objeto `app` que contiene todas las rutas configuradas para eliminar datos. Este objeto se utilizará para crear y gestionar el servidor de la API.

## Uso con Precaución

Se recomienda utilizar este código con precaución y asegurarse de comprender cómo funcionan las rutas de eliminación de datos en una API RESTful. La autenticación Bearer garantiza la seguridad de las operaciones de eliminación, y la versioning permite gestionar cambios en las rutas de manera efectiva.

Espero que esta explicación haya sido clara y te haya ayudado a comprender cómo funcionan las rutas de eliminación de datos en una API RESTful. Si tienes alguna pregunta adicional o necesitas más información, no dudes en preguntar.