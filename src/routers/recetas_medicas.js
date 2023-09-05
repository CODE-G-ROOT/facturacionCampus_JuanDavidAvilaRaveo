import { Router } from "express";
import { limitQuery } from "../helpers/others/limit.js";

import {
    get_recetas_before_01_2023
} from "../controllers/recetas_medicas.js"

const recetas_m = Router();

recetas_m.get('/before_01_2023', limitQuery(), get_recetas_before_01_2023)

export default recetas_m;