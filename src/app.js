import express from 'express';
import dotenv from 'dotenv';
import medicamentos from './routers/medicamentos.js';
import recetas_m from './routers/recetas_medicas.js';
// import { appToken, appVerify} from './helpers/jwt.js';

dotenv.config();
let app = express();

app.use(express.json());
app.use("/medicamentos", medicamentos);
// app.use("/recetas_m", recetas_m)

const server_config = JSON.parse(process.env.MY_SERVER)
app.listen(server_config, ()=>{
    console.log(`http://${server_config.hostname}:${server_config.port}`);
});