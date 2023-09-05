# Investigacion sobre el uso de Clases Genéricas para Interar con Base de Datos

Este README describe una clase genérica llamada `DatabaseModel` que permite interactuar con una base de datos MongoDB de manera sencilla y flexible. Puede utilizar esta clase como base para gestionar datos de cualquier tipo de colección en su base de datos MongoDB. A continuación, se detalla cómo funciona la clase y cómo puede utilizarla.

## Clase `DatabaseModel`

La clase `DatabaseModel` proporciona métodos para realizar operaciones comunes en una colección de MongoDB, como buscar, agregar, actualizar y eliminar documentos. La clase está diseñada para ser lo más genérica posible, lo que la hace adecuada para diferentes tipos de colecciones y aplicaciones.

## Instalación

Para utilizar esta clase, primero debe asegurarse de que tiene instalado el controlador MongoDB para Node.js. Puede instalarlo utilizando npm o yarn:

```shell
npm install mongodb
```

## Uso de la Clase `DatabaseModel`

Para utilizar la clase `DatabaseModel` en su proyecto, siga estos pasos:

1. Importe la clase y configure su instancia.

```javascript
import { MongoClient } from 'mongodb';

class DatabaseModel {
    constructor(collectionName) {
        this.collectionName = collectionName;
    }

    async connect() {
        const client = new MongoClient('mongodb://localhost:27017', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        try {
            await client.connect();
            this.db = client.db('mydatabase');
            this.collection = this.db.collection(this.collectionName);
        } catch (error) {
            console.error('Error connecting to the database', error);
        }
    }
}
```

2. Cree una instancia de la clase `DatabaseModel` para su colección específica.

```javascript
const animalsModel = new DatabaseModel('animals');
await animalsModel.connect();
```

3. Utilice los métodos de la clase para interactuar con la base de datos. Aquí hay algunos ejemplos:

- **Buscar documentos**:

```javascript
const allAnimals = await animalsModel.find();
const specificAnimal = await animalsModel.findById('12345');
```

- **Agregar documentos**:

```javascript
const newAnimal = { name: 'Lion', species: 'Mammal' };
const insertedAnimal = await animalsModel.insertOne(newAnimal);
```

- **Actualizar documentos**:

```javascript
const animalToUpdate = { _id: '12345', name: 'Updated Lion' };
const updatedAnimal = await animalsModel.updateOne(animalToUpdate);
```

- **Eliminar documentos**:

```javascript
const deletedAnimalId = '12345';
await animalsModel.deleteOne(deletedAnimalId);
```

## Personalización

Puede personalizar esta clase aún más según sus necesidades específicas. Añada más métodos o ajuste los existentes para que se adapten mejor a su aplicación.

La clase `DatabaseModel` proporciona una base sólida para la gestión de datos en una base de datos MongoDB de manera genérica y flexible, lo que facilita la reutilización de código y la administración de diferentes tipos de colecciones en su proyecto.

Esperamos que esta explicación le ayude a comprender cómo utilizar esta clase genérica para interactuar con su base de datos MongoDB. Si tiene alguna pregunta adicional o necesita más información, no dude en preguntar.