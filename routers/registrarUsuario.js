import Express, { request } from "express";
import multer from "multer";

const nuevoUsuario = Express();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

import {postnuevoUsuario } from "../controllers/nuevoUsuarioController.js"


nuevoUsuario.post('', upload.single('imagen'), postnuevoUsuario);

export { nuevoUsuario }