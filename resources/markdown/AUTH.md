# Expliación de uso y ejemplos de Autenticación y Autorización con Tokens JWT

Explicación detallada del código relacionado con la autenticación y autorización utilizando tokens JWT en una aplicación JavaScript. Asegúrate de utilizar este código con precaución y entender su funcionamiento antes de implementarlo en tu proyecto.

## Importaciones

En este proyecto, utilizamos varias importaciones de módulos y archivos. Aquí están las importaciones y una breve descripción de su propósito:

```javascript
import { SignJWT, jwtVerify } from "jose"
import { connect } from "../../db/connection.js" 
import { ObjectId } from "mongodb";
import config from "../utils/config.js";
```

- `SignJWT` y `jwtVerify` son módulos de la biblioteca "jose" que se utilizan para crear y verificar tokens JWT.
- `connect` se importa desde `db/connection.js` y se utiliza para establecer una conexión con la base de datos MongoDB.
- `ObjectId` se importa desde "mongodb" y se utiliza para representar un ID de MongoDB.
- `config` se importa desde "utils/config.js" y contiene la configuración de la aplicación.

## Conexión a la Base de Datos

Las siguientes líneas de código se utilizan para conectarse a la base de datos MongoDB y obtener la colección `staff`. Ten en cuenta que la colección `staff` se utiliza para almacenar los datos de los usuarios.

```javascript
const db = await connect();
const staff = await db.collection('staff');
```

## Creación de Token

La función `createToken` se utiliza para crear un token JWT. Este token contiene el ID del usuario, el algoritmo de hash utilizado para crear el token y la fecha de caducidad del mismo. Aquí se encuentra una descripción de la función y su funcionamiento:

```javascript
export const createToken = async (req, res, next) => {
    if (Object.keys(req.body).length === 0) return res.status(400).send({message: "No hay suficiente información"});
    
    const { name, password } = req.body;
    if (!name || !password) return res.status(417).send({ message: "Debe proporcionar nombre y contraseña" });
    
    const result = await staff.findOne(req.body)
    if (!result) return res.status(401).send({message: "No autorizado"});

    const id = result._id.toString();
    const jwtConstructor = await new SignJWT({ id: id})
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('3h')
        .sign(Buffer.from(config.key, 'utf-8'));
    req.data = {status: 200, message: jwtConstructor};
    next(); 
}
```

- La función verifica si los datos proporcionados en el cuerpo de la solicitud son suficientes.
- Luego, busca al usuario en la colección `staff`. Si el usuario no existe, devuelve un código de error 401.
- Si el usuario existe, crea un token JWT con los detalles necesarios y lo devuelve en la respuesta.

## Verificación de Token

La función `verifyToken` se utiliza para verificar un token JWT. Aquí se encuentra una descripción de la función y su funcionamiento:

```javascript
export const verifyToken = async (req, token) => {
    try {
        const jwtData = await jwtVerify(token, Buffer.from(config.key, 'utf-8'));
        const result = await staff.findOne({
                _id: new ObjectId(jwtData.payload.id), 
                [`allowances.${req.baseUrl}`]: `${req.headers["accept-version"]}`
            });

        if(!result.allowances[req.baseUrl].includes(req.method)) {
            throw new Error("Método no permitido");
        }; 
        const {_id, allowances, ...session} = result;
        return session;
    } catch (error) { 
        return false;
    }
}
```

- La función verifica la validez del token proporcionado.
- Luego, busca al usuario en la colección `staff`. Si el usuario no existe, devuelve `false`.
- Si el usuario existe y tiene permisos adecuados, devuelve la sesión del usuario.

Esperamos que esta explicación te ayude a comprender cómo funciona este código. Si deseas una traducción del código a español o tienes alguna otra pregunta, no dudes en preguntar.