import { Router } from "express";
import { limitQuery } from "../helpers/others/limit.js";
// import { middle_Verify_Alquiler, DTO_data_alquiler } from "../middleware/alquiler.js";
import { 
    get_medicamentos, 
    get_medicamentos_proveedores,
    get_medicamentos_proveedor_A,
    get_medicamentos_proveedor_menos_50_unidades,
    get_medicamentos_caducados_before_1E2024,
    get_medicamentos_mas_caro
} from "../controllers/medicamentos.js";



const medicamentos = Router();


medicamentos.get("/all", limitQuery() ,get_medicamentos);
medicamentos.get("/pro", limitQuery() ,get_medicamentos_proveedores);
medicamentos.get("/pro/info/:id", limitQuery() ,get_medicamentos_proveedor_A);
medicamentos.get("/pro/menos_50", limitQuery() ,get_medicamentos_proveedor_menos_50_unidades);
medicamentos.get("/caducados/01_01_2024", limitQuery() ,get_medicamentos_caducados_before_1E2024);
medicamentos.get("/mas_caro", limitQuery() ,get_medicamentos_mas_caro);



export default medicamentos;