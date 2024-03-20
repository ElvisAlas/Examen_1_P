import Express, { request } from "express";

const empleado = Express();

import { getEmpleado, postEmpleado,putEmpledo, deleteEmpleado} from "../controllers/empleadoscontroller.js";


empleado.get('', getEmpleado)

empleado.post('', postEmpleado)

empleado.put('/:id', putEmpledo)

empleado.delete('/:id', deleteEmpleado)




export { empleado }