# Investigación del uso y Configuración de Passport para Bearer Token

Este README proporciona una explicación detallada del código que configura Passport para el uso de Bearer Tokens en una aplicación Node.js. El objetivo es garantizar que cualquier persona pueda comprender el funcionamiento de este código.

## Descripción General

El código proporcionado se encarga de configurar Passport para la autenticación con Bearer Tokens. Passport es una biblioteca de Node.js ampliamente utilizada para la autenticación y autorización en aplicaciones web. Los Bearer Tokens son un tipo de token de acceso que se utiliza comúnmente para autenticar a los usuarios en las API.

## Pasos de Configuración

A continuación, se describen los pasos de configuración realizados en el código:

1. Importación de Bibliotecas y Funciones:

   ```javascript
   import passport from "passport";
   import { Strategy as BearerStrategy } from "passport-http-bearer";
   import { validarToken } from "../token/auth.js";
   ```

   - Se importan las bibliotecas necesarias, incluyendo Passport y Passport HTTP Bearer Strategy.
   - Se importa la función `validarToken` del archivo `auth.js`, que se utilizará para validar los Bearer Tokens.

2. Configuración de la Estrategia Bearer:

   ```javascript
   passport.use(new BearerStrategy(
       { passReqToCallback: true },
       async function(req, token, done) {
           const usuario = await validarToken(req, token);
           if(!usuario) return done(null, false);
           return done(null, usuario);
       }
   ));
   ```

   - Se configura la estrategia de autenticación Bearer Token de Passport. Esta estrategia se utiliza para autenticar a los usuarios que envían un token de acceso en la cabecera de la solicitud.
   - Se pasa `req` a la función de devolución de llamada para que esté disponible dentro de ella.
   - La función de devolución de llamada se ejecuta cuando se recibe una solicitud con un Bearer Token.
   - Dentro de la función de devolución de llamada, se llama a la función `validarToken` para validar el token. Si el token es válido, se recibe el usuario asociado al token.
   - Si el token es válido, se llama a `done(null, usuario)` para indicar que la autenticación fue exitosa y se proporciona el usuario autenticado. Si el token no es válido, se llama a `done(null, false)` para indicar que la autenticación ha fallado.

3. Exportación de Passport Configurado:

   ```javascript
   export default passport;
   ```

   - Finalmente, se exporta la instancia de Passport configurada con la estrategia de Bearer Token. Esta instancia se puede utilizar en la aplicación para autenticar a los usuarios en las rutas que requieren autenticación.

## Uso con Precaución

Se recomienda utilizar este código con precaución y asegurarse de comprender cómo funciona la autenticación con Bearer Tokens antes de implementarlo en un proyecto.

Espero que esta explicación haya sido clara y te haya ayudado a comprender el código de configuración de Passport para Bearer Tokens. Si tienes alguna pregunta adicional o necesitas más información, no dudes en preguntar.