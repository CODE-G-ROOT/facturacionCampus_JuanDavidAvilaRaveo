import { Router } from "express";
import { confiGET } from "../limit/limit.js";
import { middle_Verify_Alquiler, DTO_data_alquiler } from "../middleware/alquiler.js";
import { 
    getAlquileres,
} from "../controllers/alquiler.js";


const alquiler = Router();

alquiler.get("/", confiGET(), getAlquileres, middle_Verify_Alquiler);
alquiler.get("/search=:id", confiGET(), getAlquileres_id, middle_Verify_Alquiler);

alquiler.post("/", confiGET(), postAlquileres, DTO_data_alquiler);
alquiler.post("/many", confiGET(), postManyAlquileres, DTO_data_alquiler);

alquiler.put("/:id", confiGET(), putAlquiler, DTO_data_alquiler);
alquiler.put("/many", confiGET(), postManyAlquileres, DTO_data_alquiler);

export default alquiler;