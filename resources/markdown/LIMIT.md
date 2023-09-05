# Middleware de Limitación de Solicitudes

Este README proporciona una explicación del código que implementa un middleware de limitación de solicitudes en una aplicación Express.js. El middleware limita la cantidad de solicitudes que un cliente puede realizar dentro de un período de tiempo determinado.

## Código de Middleware

```javascript
import rateLimit from "express-rate-limit";

export let limitQuery = () => {
    return rateLimit({
        windowMs: 40 * 1000,           // Período de ventana en milisegundos (40 segundos)
        max: 5,                        // Número máximo de solicitudes permitidas
        standardHeaders: true,         // Uso de encabezados HTTP estándar para la limitación
        legacyHeaders: false,          // No se utilizan encabezados HTTP heredados para la limitación
        skip: (req, res) => {
            if (req.headers["content-length"] > 350) {
                res.status(413).send({
                    status: 413,
                    message: "Tamaño de la solicitud alcanzado"
                });
                return true;
            }
        },
        message: (req, res) => {
            res.status(429).send({
                status: 429,
                message: "Límite alcanzado"
            });
        }
    });
}
```

## Funcionamiento del Middleware

Este código implementa un middleware de limitación de solicitudes utilizando la biblioteca `express-rate-limit`. A continuación, se describe cómo funciona el middleware:

- Se exporta una función llamada `limitQuery` que devuelve una instancia de `rateLimit`. Esta instancia se configurará como middleware en las rutas que se deseen proteger contra solicitudes abusivas.

- Dentro de la configuración de `rateLimit`, se definen las siguientes opciones:

    - `windowMs`: Define el período de ventana en milisegundos durante el cual se contabilizan las solicitudes. En este caso, se establece en 40 segundos, lo que significa que se permite un máximo de 5 solicitudes dentro de ese período.

    - `max`: Especifica el número máximo de solicitudes permitidas dentro del período de ventana.

    - `standardHeaders`: Indica si se deben utilizar encabezados HTTP estándar para informar sobre la limitación de solicitudes. Se establece en `true` para usar los encabezados estándar.

    - `legacyHeaders`: Se establece en `false`, lo que significa que no se utilizarán encabezados HTTP heredados para la limitación de solicitudes.

    - `skip`: Esta función permite omitir la limitación de solicitudes en casos específicos. En este caso, se verifica si el encabezado "content-length" de la solicitud es mayor que 350 bytes. Si es así, se responde con un código de estado 413 (Solicitud demasiado grande) y se devuelve `true` para indicar que la limitación se omite.

    - `message`: Define el mensaje de respuesta que se envía cuando se alcanza el límite de solicitudes. En este caso, se responde con un código de estado 429 (Demasiadas solicitudes) y un mensaje indicando que se ha alcanzado el límite.

## Uso del Middleware

Este middleware puede utilizarse en rutas específicas de una aplicación Express.js para limitar la cantidad de solicitudes que un cliente puede realizar dentro del período de ventana especificado. Al configurar este middleware en una ruta, se protege esa ruta contra solicitudes excesivas o abusivas, lo que ayuda a prevenir ataques de denegación de servicio (DDoS) y garantiza la estabilidad de la aplicación.