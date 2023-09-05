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

Api Rest de prueba, el contenido de esta api se basa en un gestor de una farmacia, incluye lo siguiente:

- Gestor de ganancias

- Gestor de ventas

- gestion de caducidad de medicamentos

- Proveedores

- Recetas medicar

  

## Instalación

1. Clona este repositorio o crea uno nuevo utilizando esta plantilla como base.

2. Ubicarse en la carpeta  `src` desde la terminal

3. correr el comando:

   ````bash
   npm update
   ````

4. Luego acceder a la carpeta `DB` y al archivo `db.mongodb`. Seleccionar todo y correr tu base de datos

## Uso

La plantilla incluye una estructura de proyecto básica que puede personalizar según sus necesidades. Algunas de las características clave incluyen:

### Rutas: 

1. Obtener todos los medicamentos con menos de 50 unidades en stock : `http//127.1.1.1:5510/medicamentos/all`

2. Listar los proveedores con su información de contacto en medicamentos :  `http//127.1.1.1:5510/medicamentos/all/pro`

3. Medicamentos comprados al 'Proveedor A' : `http//127.1.1.1:5510/medicamentos/pro/info/a`  

4. Obtener recetas médicas emitidas después del 1 de enero de 2023 `http//127.1.1.1:5510/medicamentos/pro/menos/a`

5. . Total de ventas del medicamento 'Paracetamol' :  `http//127.1.1.1:5510/medicamentos ` **NOT FOUND**

6. Medicamentos que caducan antes del 1 de enero de 2024 : `http//127.1.1.1:5510/medicamentos` **NOT FOUND**

7. Total de medicamentos vendidos por cada proveedor : `http//127.1.1.1:5510/medicamentos `**NOT FOUND**

8. Cantidad total de dinero recaudado por las ventas de medicamentos : `http//127.1.1.1:5510/medicamentos `**NOT FOUND**

9. Recetas prescritas por el Dr. Martínez : `http//127.1.1.1:5510/ ` **NOT FOUND**

10. Medicamentos que no han sido vendidos : `http//127.1.1.1:5510/ `**NOT FOUND**

11. Obtener el medicamento más caro : `http//127.1.1.1:5510/medicamentos/mas_caro `

12. Número de medicamentos por proveedor : `http//127.1.1.1:5510/` **NOT FOUND**

13. Pacientes que han comprado Paracetamol : `http//127.1.1.1:5510//` **NOT FOUND**

14. Proveedores que no han vendido medicamentos en el último año : `http//127.1.1.1:5510//all`**NOT FOUND**

15. Obtener el total de medicamentos vendidos en marzo de 2023 : `http//127.1.1.1:5510//all` **NOT FOUND**

16. Obtener el medicamento menos vendido en 2023 : `http//127.1.1.1:5510//all`**NOT FOUND**

17. Ganancia total por proveedor en 2023 (asumiendo un campo precioCompra en Compras) `http//127.1.1.1:5510//all`:**NOT FOUND**

18. Promedio de medicamentos comprados por venta : `http//127.1.1.1:5510//all`**NOT FOUND**

19. Medicamentos que tienen menos de 50 unidades en stock : `http//127.1.1.1:5510/medicamentos/pro/menos_50`

20. Cantidad de ventas realizadas por cada empleado en 2023 : `http//127.1.1.1:5510//all`**NOT FOUND**

21. Obtener todos los medicamentos que expiren en 2024 : `http//127.1.1.1:5510/medicamentos/caducados/01_01_2024`

22. Empleados que hayan hecho más de 5 ventas en total : `http//127.1.1.1:5510//all`**NOT FOUND**

23. Medicamentos que no han sido vendidos nunca : `http//127.1.1.1:5510//all`**NOT FOUND**

24. Paciente que ha gastado más dinero en 2023 : `http//127.1.1.1:5510//all`**NOT FOUND**

25. Empleados que no han realizado ninguna venta en 2023 : `http//127.1.1.1:5510//all`**NOT FOUND**

26. Proveedor que ha suministrado más medicamentos en 2023 : `http//127.1.1.1:5510//all`**NOT FOUND**

27. Pacientes que compraron el medicamento "Paracetamol" en 2023 : `http//127.1.1.1:5510//all`**NOT FOUND**

28. Total de medicamentos vendidos por mes en 2023 : `http//127.1.1.1:5510//all`**NOT FOUND**

29. Empleados con menos de 5 ventas en 2023 : `http//127.1.1.1:5510//all`**NOT FOUND**

30. Número total de proveedores que suministraron medicamentos en 2023 : `http//127.1.1.1:5510//all`**NOT FOUND**

31. Proveedores de los medicamentos con menos de 50 unidades en stock : `http//127.1.1.1:5510//all`**NOT FOUND**

32. Pacientes que no han comprado ningún medicamento en 2023 : `http//127.1.1.1:5510//all`**NOT FOUND**

33. Medicamentos que han sido vendidos cada mes del año 2023 : `http//127.1.1.1:5510//all`**NOT FOUND**

34. Empleado que ha vendido la mayor cantidad de medicamentos distintos en 2023: `http//127.1.1.1:5510//all`**NOT FOUND**

35. Total gastado por cada paciente en 2023 : `http//127.1.1.1:5510//all`**NOT FOUND**

36. Medicamentos que no han sido vendidos en 2023 : `http//127.1.1.1:5510//all`**NOT FOUND**

37. Proveedores que han suministrado al menos 5 medicamentos diferentes en 2023 : `http//127.1.1.1:5510//all`**NOT FOUND**

38. Total de medicamentos vendidos en el primer trimestre de 2023 : `http//127.1.1.1:5510//all`**NOT FOUND**

39. Empleados que no realizaron ventas en abril de 2023 : `http//127.1.1.1:5510//all`**NOT FOUND**

40. Medicamentos con un precio mayor a 50 y un stock menor a 100 : `http//127.1.1.1:5510//all`**NOT FOUND**



## Personalización

Puede personalizar esta plantilla según las necesidades específicas de su proyecto. Agregue rutas, controladores y modelos adicionales, ajuste la autenticación o modifique la estructura de directorios según sea necesario.

## Ejecución

Puede utilizar [nodemon](https://www.npmjs.com/package/nodemon) para ejecutar su servidor de desarrollo. Ejecute el siguiente comando:

```bash
npm run dev
```

Esto iniciará el servidor y recargará automáticamente cuando realice cambios en el código.

## Contribución

Si encuentra errores o desea mejorar esta plantilla, no dude en contribuir. ¡Apreciamos sus contribuciones! Para contribuir, siga estos pasos:

1. Realice un fork del repositorio.
2. Cree una nueva rama para su contribución: `git checkout -b feature/your-feature-name`
3. Realice sus cambios y asegúrese de que todo funcione correctamente.
4. Envíe sus cambios: `git commit -m 'Agregado nuevo recurso'` y luego `git push origin feature/your-feature-name`
5. Abra una solicitud de extracción (PR) a este repositorio.

## Licencia

Este proyecto está bajo la [Licencia MIT](https://chat.openai.com/c/LICENSE). Puede utilizarlo de acuerdo con los términos de esta licencia.