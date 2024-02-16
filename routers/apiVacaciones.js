import Express, { request } from "express";

const vaciones = Express();
import {getVacaciones, postVacaciones,putVacaciones, deleteVacaciones} from "../controllers/vacacionescontroller.js";


vaciones.get('', getVacaciones)

vaciones.post('', postVacaciones)

vaciones.put('/:idvacaciones', putVacaciones)

vaciones.delete('/:idvacaciones', deleteVacaciones)

export { vaciones }