import Express, { request } from "express";

const salario = Express();

import {getsalario,getInfoEmpleado ,postSalario ,putSalario,deleteSalario} from "../controllers/salariosController.js"

salario.get('/salario', getsalario)
salario.get('/empleados', getInfoEmpleado)
salario.post('', postSalario)
salario.put('/:idSalario', putSalario)
salario.delete('/:idSalario', deleteSalario)

export { salario }