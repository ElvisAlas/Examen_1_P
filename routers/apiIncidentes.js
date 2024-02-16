import Express, { request } from "express";

const incidente = Express();
import {getIdIncidentes, postIdIncidentes,putidIncidentes, deleteIdincidentes} from "../controllers/incidenteController.js";


incidente.get('', getIdIncidentes)

incidente.post('', postIdIncidentes)

incidente.put('/:idincidentes', putidIncidentes)

incidente.delete('/:idincidentes', deleteIdincidentes)

export { incidente }