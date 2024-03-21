import Express, { request } from "express";
import multer from "multer";
const empleado = Express();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

import { getEmpleado, postEmpleado,putEmpledo, deleteEmpleado} from "../controllers/empleadoscontroller.js";


empleado.get('', getEmpleado)

empleado.post('', upload.single('imagen'), postEmpleado)

empleado.put('/:id', putEmpledo)

empleado.delete('/:id', deleteEmpleado)




export { empleado }