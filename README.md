# API REST - Plantilla

Este es un README de plantilla para una API REST que utiliza las siguientes dependencias:

- [class-transformer](https://www.npmjs.com/package/class-transformer) (v0.5.1)
- [class-validator](https://www.npmjs.com/package/class-validator) (v0.14.0)
- [dotenv](https://www.npmjs.com/package/dotenv) (v16.3.1)
- [express](https://www.npmjs.com/package/express) (v4.18.2)
- [express-rate-limit](https://www.npmjs.com/package/express-rate-limit) (v6.9.0)
- [express-routes-versioning](https://www.npmjs.com/package/express-routes-versioning) (v1.0.1)
- [jose](https://www.npmjs.com/package/jose) (v4.14.4)
- [mongodb](https://www.npmjs.com/package/mongodb) (v6.0.0)
- [nodemon](https://www.npmjs.com/package/nodemon) (v3.0.1)
- [passport](https://www.npmjs.com/package/passport) (v0.6.0)
- [passport-http-bearer](https://www.npmjs.com/package/passport-http-bearer) (v1.0.1)
- [reflect-metadata](https://www.npmjs.com/package/reflect-metadata) (v0.1.13)
- [typescript](https://www.npmjs.com/package/typescript) (v5.2.2)

## Descripción

Esta plantilla proporciona una base sólida para crear una API REST utilizando Node.js y TypeScript. Incluye una configuración básica para las dependencias mencionadas anteriormente, lo que le permite comenzar a desarrollar su API de manera eficiente.

## Instalación

1. Clona este repositorio o crea uno nuevo utilizando esta plantilla como base.

2. Ejecuta el siguiente comando para instalar las dependencias:

   ```bash
   npm install
   ```

## Uso

La plantilla incluye una estructura de proyecto básica que puede personalizar según sus necesidades. Algunas de las características clave incluyen:

- Rutas versionadas con [express-routes-versioning](https://www.npmjs.com/package/express-routes-versioning).
- Autenticación de token Bearer con [passport](https://www.npmjs.com/package/passport) y [passport-http-bearer](https://www.npmjs.com/package/passport-http-bearer).
- Validación de solicitudes utilizando [class-validator](https://www.npmjs.com/package/class-validator).
- Clases DTO para transformar y validar datos utilizando [class-transformer](https://www.npmjs.com/package/class-transformer) y [class-validator](https://www.npmjs.com/package/class-validator).
- Configuración de variables de entorno utilizando [dotenv](https://www.npmjs.com/package/dotenv).

## Personalización

Puede personalizar esta plantilla según las necesidades específicas de su proyecto. Agregue rutas, controladores y modelos adicionales, ajuste la autenticación o modifique la estructura de directorios según sea necesario.

## Ejecución

Puede utilizar [nodemon](https://www.npmjs.com/package/nodemon) para ejecutar su servidor de desarrollo. Ejecute el siguiente comando:

```bash
npm run dev
```

Esto iniciará el servidor y recargará automáticamente cuando realice cambios en el código.



# Más info

Archivos de referencia de investigación:

- [Auth](./resources/markdown/AUTH.md) : Investigación de autenticación y validacion por tokens jwt
- [Controllers](./resources/markdown/CONTROLLERS.md) : Investigación de manejo de controladores
- [Express_validator](./resources/markdown/AUTH.md) : Investigación sobre como usar esta dependencia
- [Gen](./resources/markdown/GEN.md) : Archivo de generación de el archivo .env ya configurado
- [Generacion_id](./resources/markdown/GENERACIÓN_ID.md) : Explicaión y como usar la el codigo de autogeneración de id
- [Iteracion](./resources/markdown/Iteracion.md) : no recuerdo xd
- [Limit](./resources/markdown/LIMIT.md) : Investigación de la dependencia y ejemplos de como usarla
- [Passport](./resources/markdown/PASSPORT.md) : Investigación de la dependencia y ejemplos de como usarla
- [Routers](./resources/markdown/ROUTES.md) : Descripción y ejemplos de configuraión de rutas
- [Validation](./resources/markdown/VALIDATION_FILTRADO.md) : Descripción de validaciones y ejepmlos de como realizarlas

## Contribución

Si encuentra errores o desea mejorar esta plantilla, no dude en contribuir. ¡Apreciamos sus contribuciones! Para contribuir, siga estos pasos:

1. Realice un fork del repositorio.
2. Cree una nueva rama para su contribución: `git checkout -b feature/your-feature-name`
3. Realice sus cambios y asegúrese de que todo funcione correctamente.
4. Envíe sus cambios: `git commit -m 'Agregado nuevo recurso'` y luego `git push origin feature/your-feature-name`
5. Abra una solicitud de extracción (PR) a este repositorio.

## Licencia

Este proyecto está bajo la [Licencia MIT](https://chat.openai.com/c/LICENSE). Puede utilizarlo de acuerdo con los términos de esta licencia.