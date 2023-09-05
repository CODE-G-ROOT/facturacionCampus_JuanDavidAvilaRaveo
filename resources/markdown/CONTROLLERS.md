# Explicación y ejemplos para la creación de Controladores en una API REST

Este README proporciona una guía genérica sobre cómo crear controladores en una API REST para manejar diferentes tipos de recursos y operaciones de eliminación. Los ejemplos aquí se basan en un código previamente escrito, pero se pueden aplicar a otros proyectos.

## Importación de Servicios

Primero, es importante importar las funciones necesarias desde un módulo de servicios. Estas funciones contendrán la lógica para realizar las operaciones de eliminación en la base de datos. En el ejemplo, se importan funciones de eliminación para diferentes tipos de recursos:

```javascript
import { deleteServiceHabitat, deleteServiceAnimals, deleteServiceEmergencies, deleteServiceServices, deleteServiceStaff, deleteServiceTacoShop } from "../services/delete.js"
```

Asegúrate de que las funciones de servicios estén definidas en un módulo separado y que estén diseñadas para manejar la eliminación de recursos específicos.

## Creación de Controladores

Luego, debes crear los controladores que manejarán las solicitudes de eliminación para cada tipo de recurso. A continuación, se muestra un ejemplo de un controlador para eliminar registros de "Habitat":

```javascript
export const deleteHabitatController = async (req, res) => {
    try {
        const { id } = req.query;
        const habitat = await deleteServiceHabitat(id);
        res.status(201).json({ "Habitat deleted": habitat });
    } catch (err) {
        res.status(500).send(err);
    }
}
```

- El controlador recibe una solicitud HTTP DELETE y extrae el parámetro `id` de la consulta de la solicitud.
- Luego, llama a la función `deleteServiceHabitat(id)` desde el módulo de servicios para eliminar el registro de "Habitat" con el ID proporcionado.
- Si la eliminación se realiza con éxito, el controlador envía una respuesta JSON con un mensaje indicando que el "Habitat" ha sido eliminado y puede incluir el objeto eliminado.
- Si se produce un error durante el proceso de eliminación, el controlador devuelve una respuesta HTTP con el código de estado 500, que indica un error interno del servidor.

## Controladores para Otros Tipos de Recursos

Los demás controladores siguen un patrón similar al del controlador de "Habitat" pero están diseñados para eliminar recursos de diferentes tipos, como "Animals," "Emergencies," "Services," "Staff," y "TacoShop." Cada controlador sigue el flujo general mencionado anteriormente.

## Resumen

En resumen, estos controladores son responsables de procesar solicitudes HTTP DELETE para eliminar registros de diferentes tipos de recursos en una API REST. Cada controlador llama a la función correspondiente en el módulo de servicios para realizar la eliminación y luego envía una respuesta adecuada al cliente, ya sea un mensaje de éxito o un mensaje de error en caso de fallo.

Recuerda que estos ejemplos son genéricos y se pueden personalizar según las necesidades de tu proyecto y los tipos de recursos que deseas eliminar en tu API REST.