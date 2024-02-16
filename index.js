
import  express  from "express";

import { empleado } from './routers/apiRRHH.js'
import { salario } from './routers/apiSalarios.js'
const app = express();

app.use(express.json());

const port = 4000;

app.use('/api/empleados',empleado);
app.use('/api/salarios',salario);

app.listen(port,()=>{
console.log(`escuchando en el puerto ${port}`);
});