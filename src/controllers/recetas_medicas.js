import db from "../connection/mongo.js";

const get_recetas_before_01_2023 = async (res, req)=>{
    try {
        const data = db.collection('recetas_medicas');
        const coleccion = await data.find({
            fecha_de_emision: {
                $gte: new Date("2023-01-01")
            }
        }).sort({ id: 1 }).toArray();
        console.log(coleccion);

        res.status(200).send(coleccion)
            // : res.status(404).send({ message: 'Not Found' })

    } catch (error) {
        res.status(404).send(error)
    }
}


export {
    get_recetas_before_01_2023
}