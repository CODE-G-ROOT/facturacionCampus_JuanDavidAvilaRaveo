
// use('FacturacionCampus_JuanDavidAvilaRavelo');
// db.ventas.find({}).sort({id: 1}).toArray();

// Obtener todos los medicamentos con menos de 50 unidades en stock
//? CHECK
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.medicamentos.aggregate([
    {
        $group: {
            _id: "$_id",
            nombre: { $first: "$nombre" },
            descripiton: { $first: "$descripiton" },
            cantidad_en_stock: { $first: "$cantidad_en_stock" },
            nombre_proveedor: { $first: "$nombre_proveedor" },
            fecha_emision: { $first: "$fecha_emision" },
            fecha_expiracion: { $first: "$fecha_expiracion" },
            precio_unitario: { $first: "$precio_unitario" },
        }
    },
    {
        $project: {
            id: 1,
            nombre: 1,
            descripiton: 1,
            cantidad_en_stock: 1,
            nombre_proveedor: 1,
            fecha_emision: 1,
            fecha_expiracion: 1,
            precio_unitario: 1,
        }
    }
]).sort({ id: 1 }).toArray();


//Listar los proveedores con su información de contacto en medicamentos
//? CHECK
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.medicamentos.find.sort({ id: 1 }).toArray();

//TODO Medicamentos comprados al proveedor A
//? CHEKC
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.compras.aggregate([
    {
        $group: {
            _id: "$_id",
            proveedor: { $first: "$proveedor" },
            medicamentos: { $first: "$medicamentos" },
            cantidad: { $first: "$cantidad" },
            fecha_compra: { $first: "$fecha_compra" },
            precio_unitario: { $first: "$precio_unitario" },
            total: { $first: "$total" },
        }
    },
    {
        $match: { proveedor: "A" }
    },
    {
        $project: {
            proveedor: 1,
            medicamentos: 1,
            cantidad: 1,
            fecha_compra: 1,
            precio_unitario: 1,
            total: 1
        }
    }
]).sort({ id: 1 }).toArray();

//? CHECK
//Obtener recetas médicas emitidas después del 1 de enero de 2023
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.recetas_medicas.find({
    fecha_de_emision: {
        $gte: new Date("2023-01-01")
    }
}).sort({ id: 1 }).toArray();


// Total de ventas del medicamento 'Paracetamol'
//! PENDIENTE
//TODO          MUESTRA LAS VENTAS CON SUS TOTALES
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.ventas.aggregate([
    {
        $group: {
            _id: "$_id",
            cliente: { $first: "$cliente" },
            emplea: { $first: "$empleado"},
            compra: { $first: "$compra"},
            cantidad_producto: { $first: "$cantidad_producto" },
            fecha: { $first: "$fecha" },
            valor_unidad: { $first: "$valor_unidad" },
            total: { $sum : { $multiply : ["$cantidad_producto", "$valor_unidad"] }},
        }
    },
    {
        $match: {
            compra: "paracetamol"
        }
    },
    {
        $project: {
            _id: 1,
            cliente: 1,
            emplea: 1,
            compra: 1,
            cantidad_producto: 1,
            fecha: 1,
            valor_unidad: 1,
            total: 1,
        }
    },
]).sort({ id: 1 }).toArray();

//  Medicamentos que caducan antes del 1 de enero de 2024
//? CHECK
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.medicamentos.find({
    fecha_de_caducidad: {
        $lt: new Date("2024-01-01")
    }
}).sort({ id: 1 }).toArray();

////TODO: PENDIENTE -> Total de medicamentos vendidos por cada proveedor
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.medicamentos.find({ fecha_caducidad: '01-01-2023' }).sort({ id: 1 }).toArray();

//TODO: PENDIENTE -> Cantidad total de dinero recaudado por las ventas de medicamentos
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.medicamentos.find({}).sort({ id: 1 }).toArray();

// Medicamentos que no han sido vendidos
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.ventas.aggregate([
    {
        $lookup: {
            from: "medicamentos",
            localField: "compra",
            foreignField: "nombre",
            as: "medicamentos"
        }
    },
    {
        $unwind:"$medicamentos"
    },
    {
        $group: {
            _id: '$id',
            compra: { $first: "$compra" },
            medicamentos: { $addToSet: "$medicamentos" }
        }
    },
    {
        $project: {
            _id: 1,
            compra: 1,
            medicamentos: 1
        }
    }
]).sort({ id: 1 }).toArray();


//  Obtener el medicamento más caro
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.medicamentos.aggregate([
    {
        $group: {
            _id: "$_id" ,
            nombre: { $first : "$nombre" },
            precio_unitario: { $last: "$precio_unitario" }
        }
    },
    {
        $project: {
            _id: 1,
            nombre: 1,
            precio_unitario: 1,
        }
    }
]).sort({ id: 1 }).toArray();

// Número de medicamentos por proveedor
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.medicamentos.find({
    valor_unitario: {
        $gte: 'el más caro xd'
    }
}).sort({ id: 1 }).toArray();

//Número de medicamentos por proveedor
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.proveedores.find({ medicamentos: [] }).sort({ id: 1 }).toArray();

//TODO: PENDIENTE -> Pacientes que han comprado Paracetamol
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.pacientes.find({
    medicamentos_comprados: {
        $in: {
            $exists: "Paracetamol"
        }
    }
}).sort({ id: 1 }).toArray();

// Proveedores que no han vendido medicamentos en el último año
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.proveedores.find({ vendidos: 0 }).sort({ id: 1 }).toArray();

// Obtener el total de medicamentos vendidos en marzo de 2023
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.medicamentos.find({
    total: 0, fecha: {
        $regex: /2023/i
    }
}).sort({ id: 1 }).toArray();

// Obtener el medicamento menos vendido en 2023
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.medicamentos.find({ nombre: 0 }).sort({ id: 1 }).toArray();

// Ganancia total por proveedor en 2023 (asumiendo un campo precioCompra en Compras)
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.compras.find({ precioCompra: 0 }).sort({ id: 1 }).toArray();

// Promedio de medicamentos comprados por venta
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.compras.find({ precioCompra: 0 }).sort({ id: 1 }).toArray();

//TODO:  Medicamentos que tienen menos de 50 unidades en stock
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.medicamentos.find({ stock: [] }).sort({ id: 1 }).toArray();

//TODO:  Medicamentos que tienen menos de 50 unidades en stock
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.empleados.find({ ventas: 0, año: '2023' }).sort({ id: 1 }).toArray();

// Obtener todos los medicamentos que expiren en 2024
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.medicamentos.find({ fecha_expiracion: '2024', año: '2023' }).sort({ id: 1 }).toArray();

// Empleados que hayan hecho más de 5 ventas en total
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.medicamentos.find({
    ventas: {
        $gt: 5
    }
}).sort({ id: 1 }).toArray();

// Medicamentos que no han sido vendidos nunca
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.compras.find({ medicamentos: 'asdlfkaj', vendidos: 0 }).sort({ id: 1 }).toArray();

//TODO: Paciente que ha gastado más dinero en 2023
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.compras.find({ Paciente: 0, total: 0 }).sort({ id: 1 }).toArray();

// Empleados que no han realizado ninguna venta en 2023
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.empleados.find({ ventas: 0 }).sort({ id: 1 }).toArray();

// Proveedor que ha suministrado más medicamentos en 2023
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.proveedores.find({ medicamentos: 0, fecha: '2023' }).sort({ id: 1 }).toArray();

// Pacientes que compraron el medicamento "Paracetamol" en 2023
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.compras.find({ medicamentos: ['Paracetamol'], fecha_de_la_compra: '2023' }).sort({ id: 1 }).toArray();

// Total de medicamentos vendidos por mes en 2023
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.compras.find({ medicamentos: 0, fecha_de_la_compra: '2023' }).sort({ id: 1 }).toArray();
//? La fecha de compra se dividirá por dia, mes y año, seŕa un objeto

// Empleados con menos de 5 ventas en 2023
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.empleados.find({ ventas: 0, fecha_de_la_venta: '2023' }).sort({ id: 1 }).toArray();

// Número total de proveedores que suministraron medicamentos en 2023
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.proveedores.find({ medicamentos: 0, fecha_de_la_venta: '2023' }).sort({ id: 1 }).toArray();
// si el array de medicamentos está vacio, no retornar nada

// Proveedores de los medicamentos con menos de 50 unidades en stock
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.medicamentos.aggregate([
    {
        $group: {
            _id: "$_id" ,
            nombre: { $first: "$nombre"} ,
            cantidad_en_stock: { $first: "$cantidad_en_stock"} ,
            nombre_proveedor: { $first: "$nombre_proveedor"} ,
        }
    },
    {
        $match: { cantidad_en_stock: {
            $lte: 50
        } }
    },
    {
        $project: {
            _id: 1,
            nombre: 1,
            cantidad_en_stock: 1,
            nombre_proveedor: 1,
        }
    }
]).sort({ id: 1 }).toArray();

//  Pacientes que no han comprado ningún medicamento en 2023
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.pacientes.find({
    año: {
        $exists: '2023'
    }
}).sort({ id: 1 }).toArray();

//TODO:  Medicamentos que han sido vendidos cada mes del año 2023
//este queda pendiente, ya que tengo la idea de que al realizar una compra de un medicamento qeu esté almacenado, la colección de medicamentos con el campo de dicho medicamento comprado y con un campo llamado: 'vendidos', se actualice al realizar una compra de dicho medicamento
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.proveedores.find({ medicamentos: [] }).sort({ id: 1 }).toArray();

//TODO: Pendiente -> Empleado que ha vendido la mayor cantidad de medicamentos distintos en 2023
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.ventas.find({ medicamentos: [] }).sort({ id: 1 }).toArray();

// Total gastado por cada paciente en 2023
// colección de pacientes, junto con el campo, gastos, este campo de debe actualizar por compras
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.pacientes.find({ gastos: [], año: '2023' }).sort({ id: 1 }).toArray();

// Medicamentos que no han sido vendidos en 2023
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.ventas.find({ estado: 'no vendido', año: '2023' }).sort({ id: 1 }).toArray();

// Proveedores que han suministrado al menos 5 medicamentos diferentes en 2023
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.proveedores.find({ suministros: [], año: '2023' }).sort({ id: 1 }).toArray();
//implementar un map para verificar que ninguno se parezca

//TODO: PENDIENTE -> Total de medicamentos vendidos en el primer trimestre de 2023
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.proveedores.find({
    total: 0, año: {
        trimestre: 1
    }
}).sort({ id: 1 }).toArray();

//TODO: PENDIENTE ->  Empleados que no realizaron ventas en abril de 2023
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.ventas.find({ suministros: [], año: '2023' }).sort({ id: 1 }).toArray();

// Medicamentos con un precio mayor a 50 y un stock menor a 100
use('FacturacionCampus_JuanDavidAvilaRavelo');
db.medicamentos.find({ precioCompra: { $gt: 50 }, stock: { $lt: 100 } }).sort({ id: 1 }).toArray();

