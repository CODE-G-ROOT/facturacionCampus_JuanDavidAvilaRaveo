# Explicación y ejemplos de validaciónes de Datos con Express Validator

Este README proporciona una explicación detallada del código que realiza la validación de datos utilizando el módulo `express-validator` en JavaScript. Además, se incluye un apartado con un listado de los métodos disponibles en `express-validator` para realizar diferentes tipos de validaciones.

## Validación de Datos

El código se encarga de validar datos utilizando el módulo `express-validator`. A continuación, se muestra el código que define las reglas de validación para un objeto `animal`:

```
javascript
import { check } from 'express-validator';

const animal = {
    id_staff: "staffId",
    animal_name: "name",
    species: "species",
    // ... Otras propiedades ...
    reason: "reason"
};

export const animalsDtoV1 = [
    // Regla de validación para id_staff
    check(`${animal.id_staff}`)
        .notEmpty().withMessage(`${animal.id_staff} is required`)
        .isNumeric().withMessage(`${animal.id_staff} should be a number of a staff member`),

    // Regla de validación para animal_name
    check(`${animal.animal_name}`)
        .notEmpty().withMessage(`${animal.animal_name} is required`)
        .isString().withMessage(`${animal.animal_name} should be a string`)
        .matches(/^[a-zA-Z]+$/).withMessage(`${animal.animal_name} don't accept special characters`),
        
    // ... Otras reglas de validación ...
];
```

Este código define un array llamado `animalsDtoV1` que contiene varias reglas de validación para las propiedades de un objeto `animal`. Las reglas de validación utilizan métodos proporcionados por `express-validator` para verificar que los datos cumplan con ciertos criterios, como no estar vacíos, ser de un tipo específico o cumplir con un patrón regular.

## Listado de Métodos de Express Validator

A continuación, se presenta un listado de algunos de los métodos disponibles en `express-validator` para realizar diferentes tipos de validaciones:

- `check()`: Crea una nueva regla de validación.
- `notEmpty()`: Verifica que el valor no esté vacío.
- `isString()`: Verifica que el valor sea una cadena.
- `isNumeric()`: Verifica que el valor sea un número.
- `isInt()`: Verifica que el valor sea un número entero.
- `isFloat()`: Verifica que el valor sea un número de coma flotante.
- `isBoolean()`: Verifica que el valor sea un booleano.
- `isDate()`: Verifica que el valor sea una fecha.
- `isEmail()`: Verifica que el valor sea una dirección de correo electrónico válida.
- `isUrl()`: Verifica que el valor sea una URL válida.
- `isAlpha()`: Verifica que el valor solo contenga caracteres alfabéticos.
- `isAlphanumeric()`: Verifica que el valor solo contenga caracteres alfabéticos y numéricos.
- `min()`: Verifica que el valor sea mayor o igual que un número dado.
- `max()`: Verifica que el valor sea menor o igual que un número dado.
- `between()`: Verifica que el valor esté entre dos números dados.
- `oneOf()`: Verifica que el valor sea uno de los valores dados.
- `required()`: Verifica que el valor esté presente.
- `optional()`: Verifica que el valor esté presente o no.
- `trim()`: Elimina espacios en blanco al principio y al final del valor.
- `lowercase()`: Convierte el valor a minúsculas.
- `uppercase()`: Convierte el valor a mayúsculas.
- `regex()`: Verifica que el valor coincida con una expresión regular dada.
- `custom()`: Crea una regla de validación personalizada.

Este listado es una muestra de los métodos disponibles en `express-validator`. Puedes utilizar estos métodos según tus necesidades de validación en tu proyecto.