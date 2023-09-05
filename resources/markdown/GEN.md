# Configuración de Archivo de Entorno (.env)

Este README proporciona una explicación del código que se encarga de crear y configurar un archivo de entorno llamado `.env`. El archivo de entorno es utilizado para almacenar configuraciones y credenciales sensibles en una aplicación Node.js.

## Código de Configuración

```javascript
import fs from 'fs/promises';

const contenido = `
ATLAS_USER="JuanDev856"
ATLAS_PASSWORD="juan856"
ATLAS_DB="zoologico"
JWT_PRIVATE_KEY="cc"
MY_SERVER={"hostname":"127.1.1.1","port":5510}
`;

const archivo = '.env';

(async () => {
    try {
        await fs.writeFile(archivo, contenido);
        console.log(`Se ha creado el archivo "${archivo}"`);
        console.warn("No te olvides de agregar tus credenciales en el archivo .env\n");
    } catch (err) {
        console.error('Error al crear el archivo:', err);
    }
})();
```

## Funcionamiento del Código

Este código realiza las siguientes acciones:

1. Importa el módulo `fs/promises` de Node.js para realizar operaciones de lectura y escritura de archivos de forma asíncrona.

2. Define el contenido que se agregará al archivo de entorno `.env`. En este caso, se definen varias variables y sus valores como pares clave-valor. Estos valores representan configuraciones y credenciales sensibles que la aplicación utilizará.

3. Define el nombre del archivo de entorno como `archivo`.

4. Se utiliza una función asíncrona autoinvocada (`(async () => {...})()`) para ejecutar el código de manera asíncrona.

5. Dentro de la función asíncrona, se utiliza un bloque `try...catch` para manejar errores que puedan ocurrir durante la escritura del archivo.

6. Se utiliza `await fs.writeFile(archivo, contenido)` para escribir el contenido en el archivo `.env`. Esto crea el archivo si no existe o sobrescribe su contenido si ya existe.

7. Si la escritura del archivo se realiza con éxito, se muestra un mensaje en la consola indicando que el archivo se ha creado y se emite una advertencia para recordar al usuario que debe agregar sus propias credenciales en el archivo `.env`.

8. Si se produce un error durante la escritura del archivo, se captura el error y se muestra un mensaje de error en la consola.

## Uso del Archivo .env

Una vez que se ha ejecutado este código y se ha creado el archivo `.env`, es importante que el usuario agregue sus propias credenciales y configuraciones sensibles en el archivo para que la aplicación pueda utilizarlas de manera segura.

Este archivo de entorno se utiliza comúnmente en aplicaciones Node.js para separar la configuración sensible del código fuente y mantener la seguridad de las credenciales de acceso, como contraseñas de bases de datos o claves de API.