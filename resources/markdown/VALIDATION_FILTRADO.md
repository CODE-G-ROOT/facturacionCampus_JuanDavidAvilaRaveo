# Como utilizar la Validación y Filtrado de Datos en una Solicitud POST

Este README proporciona una explicación detallada del código que realiza la validación y el filtrado de datos en una solicitud POST utilizando la biblioteca `express-validator` en JavaScript. El objetivo es garantizar que cualquier persona pueda comprender el funcionamiento de este código.

## Descripción General

El código proporcionado define una función llamada `animalsPostValidate`. Esta función se utiliza para validar los datos que se envían en una solicitud POST a la ruta `/animals`. A continuación, se explica paso a paso cómo funciona esta función:

## Paso 1: Validación de Datos

```javascript
const errors = validationResult(req);
if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array() });
}
```

- La función comienza utilizando el método `validationResult()` de la biblioteca `express-validator` para obtener una lista de errores de validación.
- Si se encuentran errores en la validación, la función devuelve una respuesta HTTP con el código de estado 400 (Solicitud incorrecta) y una lista de errores en formato JSON.

## Paso 2: Filtrado de Datos

```javascript
const keys = Object.keys(req.body);
const data = Object.assign({}, req.body);

for (const key of keys) {
    if (data[key] === undefined) {
        delete data[key];
    }
}
```

- Si no hay errores de validación, la función continúa con el proceso de filtrado de datos.
- Primero, se obtienen todas las claves (nombres de campos) del cuerpo de la solicitud en un array llamado `keys`.
- Se crea un objeto `data` que es una copia de `req.body` para que podamos realizar modificaciones en él sin afectar el objeto original.
- La función itera a través de las claves (campos) en el objeto `data` y verifica si el valor de cada campo es `undefined`. Si es así, significa que el campo está vacío en la solicitud, y lo elimina del objeto `data`.

## Paso 3: Actualización de la Solicitud

```javascript
req.body = data;
next();
```

- Finalmente, después de filtrar los datos, la función asigna el objeto `data` modificado a la propiedad `body` de la solicitud (`req.body`). Esto actualiza los datos que se utilizarán en la ruta de manejo de la solicitud POST.
- Luego, se llama a la función `next()` para continuar con el ciclo de solicitud/respuesta y permitir que la solicitud siga su flujo normal.

## Código en Español

Se proporciona una versión del código en español para mayor claridad:

```javascript
export const animalsPostValidate = async (req, res, siguiente) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ error: errores.array() });
    }

    const claves = Object.keys(req.body);
    const data = Object.assign({}, req.body);

    for (const key of claves) {
        if (data[key] === undefined) {
            delete data[key];
        }
    }

    req.body = data;
    siguiente();
}
```

Esperamos que esta explicación haya sido clara y te haya ayudado a comprender cómo funciona el código. Si tienes alguna pregunta adicional o necesitas más información, no dudes en preguntar.