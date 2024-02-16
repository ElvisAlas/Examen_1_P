import Express, { request } from "express";

const permiso = Express();
import { getPermisos, postPermisos,putPermisos, deletePermisos} from "../controllers/permisosController.js";


permiso.get('', getPermisos)

permiso.post('', postPermisos)

permiso.put('/:idpermiso', putPermisos)

permiso.delete('/:idpermiso', deletePermisos)

export { permiso }