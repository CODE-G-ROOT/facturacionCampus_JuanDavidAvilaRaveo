// use('FacturacionCampus_JuanDavidAvilaRavelo');
// db.createCollection('medicamentos', {
//     $jsonSchema: {
//         validator: {
//             bsonType: 'object',
//             required: [nombre, precio_unitario],
//             properties: {
//                 nombre: {
//                     bsonType: 'string',
//                     description: 'El campo nombre debe ser de tipo string'
//                 },
//                 cantidad_en_stock: 'int',
//                 nombre_proveedor: 'Paracetaplégicos(S.A.S)',
//                 infor_contacto_proveedor: {
//                     correo: 'paracetaplégicos@gmail.com',
//                     direccion: 'calle 40 con carrera 70, Bucaramanga, Santander, Colombia',
//                     pagina_web: 'https://Paracetaplegicos.co.com'
//                 },
//                 fecha_de_emision: {
//                     dia: 1,
//                     mes: Enero,
//                     año: 2023
//                 },
//                 fecha_de_caducidad: {
//                     dia: '',
//                     mes: '',
//                     año: ''
//                 },
//                 precio_unitario: 0
//             }
//         }
//     }
// });


//TODO: MEDICAMENTOS
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.medicamentos.insertOne({
    id: 1,
    nombre: 'Paracetamol',
    description: 'competencia directa a acetaminofen',
    cantidad_en_stock: 300,
    nombre_proveedor: 'A',
    infor_contacto_proveedor: {
        correo: 'paracetaplégicos@gmail.com',
        direccion: 'calle 40 con carrera 70, Bucaramanga, Santander, Colombia',
        pagina_web: 'https://Paracetaplegicos.co.com'
    },
    fecha_de_emision: new Date("2021-03-20"),
    fecha_de_caducidad: new Date("2020-03-20"),
    precio_unitario: 70
});
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.medicamentos.insertOne({
    id: 2,
    nombre: 'Acetaminofen',
    description: 'no hay nada que no cure',
    cantidad_en_stock: 20,
    nombre_proveedor: 'B',
    infor_contacto_proveedor: {
        correo: 'acetaminoacidos@gmail.com',
        direccion: 'calle 44 con carrera 7, Bucaramanga, Santander, Colombia',
        pagina_web: 'https://Acetaminoacidos.co.com'
    },
    fecha_de_emision: new Date("2023-03-20"),
    fecha_de_caducidad: new Date("2024-03-20"),
    precio_unitario: 50
});
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.medicamentos.insertOne({
    id: 3,
    nombre: 'antistup_300',
    description: 'medicamento para la niños que programan en cobol',
    cantidad_en_stock: 20,
    nombre_proveedor: 'C',
    infor_contacto_proveedor: {
        correo: 'anticobol@gmail.com',
        direccion: 'calle 44 con carrera 7, Bucaramanga, Santander, Colombia',
        pagina_web: 'https://anticobol.co.com'
    },
    fecha_de_emision: new Date("2024-03-20"),
    fecha_de_caducidad: new Date("2024-09-20"),
    precio_unitario: 500
});
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.medicamentos.insertOne({
    id: 4,
    nombre: 'visazo',
    description: 'medicamento para la mejorar la vision',
    cantidad_en_stock: 2,
    nombre_proveedor: 'D',
    infor_contacto_proveedor: {
        correo: 'vision_y_más@gmail.com',
        direccion: 'calle 44 con carrera 7, Bucaramanga, Santander, Colombia',
        pagina_web: 'https://vision_y_más.co.com'
    },
    fecha_de_emision: new Date("2020-03-20"),
    fecha_de_caducidad: new Date("2024-03-20"),
    precio_unitario: 50
});
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.medicamentos.insertOne({
    id: 4,
    nombre: 'cianuro',
    description: 'medicamento para la mejorar la vision',
    cantidad_en_stock: 1,
    nombre_proveedor: 'E',
    infor_contacto_proveedor: {
        correo: 'no_mas_scratch@gmail.com',
        direccion: 'calle 44 con carrera 7, Bucaramanga, Santander, Colombia',
        pagina_web: 'https://no_mas_scratch.co.com'
    },
    fecha_de_emision: new Date("2023-03-20"),
    fecha_de_caducidad: new Date("2050-03-20"),
    precio_unitario: 50
});

//TODO: COMPTRAS
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.compras.insertMany([
    {
        id: 1,
        proveedor: 'A',
        medicamentos: ["paracetamol"],
        cantidad: 20,
        fecha_compra: {
            dia: "02",
            mes: "01",
            año: "2023"
        },
        precio_unitario: 20,
        total: 400
    },
    {
        id: 2,
        proveedor: 'B',
        medicamentos: ["acetaminofen"],
        cantidad: 20,
        fecha_compra: {
            dia: "15",
            mes: "04",
            año: "2023"
        },
        precio_unitario: 10,
        total: 200
    },
    {
        id: 3,
        proveedor: 'A',
        medicamentos: ["antistup_300"],
        cantidad: 10,
        fecha_compra: {
            dia: "25",
            mes: "12",
            año: "2020"
        },
        precio_unitario: 100,
        total: 1000
    }
]);

//TODO: Recetas medicas
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.recetas_medicas.insertMany([
    {
        nombre_doc: 'A',
        descripcion: 'tiene cancer',
        medicamentos: ["Acetaminofen"],
        fecha_de_emision: new Date("2023-05-18T14:10:30Z")
    },
    {
        nombre_doc: 'B',
        descripcion: 'tiene tuberculosis',
        medicamentos: ["Paracetamol"],
        fecha_de_emision: new Date("2021-03-20T11:30:05Z")
    },
    {
        nombre_doc: 'C',
        descripcion: 'programa en cobol',
        medicamentos: ["Paracetamol"],
        fecha_de_emision: new Date("2021-01-15T06:31:15Z")
    },
    {
        nombre_doc: 'D',
        descripcion: 'programa en scratch',
        medicamentos: ["cianuro"],
        fecha_de_emision: new Date("2023-07-22T06:31:15Z")
    }
]);

//TODO: Ventas
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.ventas.insertMany([
    {
        cliente: 'cliente 1',
        empleado: 'empleado 1',
        compra: 'paracetamol',
        cantidad_producto: 4,
        valor_unidad: 70,
        fecha: new Date('2020-05-18T14:10:30Z'),
    },
    {
        cliente: 'cliente 2',
        empleado: 'empleado 1',
        compra: 'acetaminofen',
        cantidad_producto: 7,
        valor_unidad: 50,
        fecha: new Date('2023-05-18T14:10:30Z'),
    },
    {
        cliente: 'cliente 3',
        empleado: 'empleado 2',
        compra: 'paracetamol',
        cantidad_producto: 5,
        valor_unidad: 70,
        fecha: new Date('2023-02-18T14:10:30Z'),
    },
    {
        cliente: 'cliente 4',
        empleado: 'empleado 3',
        compra: 'paracetamol',
        cantidad_producto: 1,
        valor_unidad: 70,
        fecha: new Date('2023-01-18T14:10:30Z'),
    },
])


use('FacturacionCampus_JuanDavidAvilaRavelo');
db.ventas_medicamento.insertMany([
    {
        nombre: "Paracetamol",
        venta_mes: {
            enero: 0,
            febrero: 0,
            marzo: 0,
            abril: 0,
            mayo: 0,
            junio: 0,
            julio: 0,
            agosto: 0,
            septiembre: 0,
            octubre: 0,
            noviembre: 0,
            diciembre: 0
        }
    },
    {
        nombre: "Acetaminofen",
        venta_mes: {
            enero: 0,
            febrero: 0,
            marzo: 0,
            abril: 0,
            mayo: 0,
            junio: 0,
            julio: 0,
            agosto: 0,
            septiembre: 0,
            octubre: 0,
            noviembre: 0,
            diciembre: 0
        }
    }
]);

use('FacturacionCampus_JuanDavidAvilaRavelo');
db.createCollection('proveedores');


use('FacturacionCampus_JuanDavidAvilaRavelo');
db.createCollection('ventas');


