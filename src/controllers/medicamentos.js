import db from "../connection/mongo.js";

const get_medicamentos = async (req, res) => {
    try {

        const data = db.collection('medicamentos');
        const coleccion = await data.aggregate([
            {
                $group: {
                    _id: "$_id",
                    nombre: { $first: "$nombre" },
                    description: { $first: "$description" },
                    cantidad_en_stock: { $first: "$cantidad_en_stock" },
                    precio_unitario: { $first: "$precio_unitario" },
                }
            },
            {
                $project: {
                    id: 1,
                    nombre: 1,
                    description: 1,
                    cantidad_en_stock: 1,
                    precio_unitario: 1,
                }
            }
        ]).sort({ id: 1 }).toArray();

        coleccion.length > 0
            ? res.status(200).send(coleccion)
            : res.status(404).send({ message: 'Not Found' })


    } catch (error) {
        res.status(404).send(error)
    }
};

const get_medicamentos_proveedores = async (req, res) => {
    try {

        const data = db.collection('medicamentos');
        const coleccion = await data.find({}).sort({ id: 1 }).toArray();

        coleccion.length > 0
            ? res.status(200).send(coleccion)
            : res.status(404).send({ message: 'Not Found' })


    } catch (error) {
        res.status(404).send(error)
    }
};

const get_medicamentos_proveedor_A = async (req, res) => {
    try {
        const data = db.collection('compras');
        const query = (req.params.id).toUpperCase();

        const coleccion = await data.aggregate([
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
                $match: { proveedor: query }
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

        coleccion.length > 0
            ? res.status(200).send(coleccion)
            : res.status(404).send({ message: 'Not Found' })

    } catch (error) {
        res.status(404).send(error)
    }
};

const get_medicamentos_proveedor_menos_50_unidades = async (req, res) => {
    try {
        const data = db.collection('medicamentos');

        const coleccion = await data.aggregate([
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

        res.status(200).send(coleccion)

    } catch (error) {
        res.status(404).send(error)
    }
};

const get_medicamentos_caducados_before_1E2024 = async (req, res) => {
    try {
        const data = db.collection('medicamentos');

        const coleccion = await data.find({
            fecha_de_caducidad: {
                $gte: new Date("2024-01-01")
            }
        }).sort({ id: 1 }).toArray();

        coleccion.length > 0 
            ? res.status(200).send(coleccion)
            : res.status(400).send({message: 'Not Found', reference: "https://http.cat/404"})

    } catch (error) {
        res.status(404).send(error)
    }
};

const get_medicamentos_mas_caro = async (req, res) => {
    try {
        const data = db.collection('medicamentos');

        const coleccion = await data.aggregate([
            {
                $group: {
                    _id: "$_id" ,
                    nombre: { $first : "$nombre" },
                    precio_unitario: { $max : "$precio_unitario" }
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

        coleccion.length > 0 
            ? res.status(200).send(coleccion)
            : res.status(400).send({message: 'Not Found', reference: "https://http.cat/404"})

    } catch (error) {
        res.status(404).send(error)
    }
};


export {
    get_medicamentos,
    get_medicamentos_proveedores,
    get_medicamentos_proveedor_A,
    get_medicamentos_proveedor_menos_50_unidades,
    get_medicamentos_caducados_before_1E2024,
    get_medicamentos_mas_caro
}