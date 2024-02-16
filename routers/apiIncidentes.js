import Express, { request } from "express";

const incidente = Express();
import {getIncidentes, postIncidentes,putIncidentes, deleteincidentes} from "../controllers/incidenteController.js";


incidente.get('', getIncidentes)

incidente.post('', postIncidentes)

incidente.put('/:idincidentes', putIncidentes)

incidente.delete('/:idincidentes', deleteincidentes)

export { incidente }