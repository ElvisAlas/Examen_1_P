import Express, { request } from "express";

const permisos = Express();
import { getPermisos, postPermisos,putPermisos, deletePermisos} from "../controllers/permisosController.js";


permisos.get('', getPermisos)

permisos.post('', postPermisos)

permisos.put('/:id', putPermisos)

permisos.delete('/:id', deletePermisos)




export { permisos }