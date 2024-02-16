import { db } from "../db/conn.js";

const getsalario = async (req, res) => {
    const sql = `select * from tbl_salarios order by 1`;
    const result = await db.query(sql);
    res.json(result)

}

const getInfoEmpleado = async (req, res) => {
    const sql = `select rrhh.nombre,departamento.nombre as departamento, puesto.nombrepuesto as puesto, salario.salario as salario
                    from tbl_Empleados empleado
                    inner join tbl_RRHH rrhh on rrhh.id=empleado.idrrhhempleado
                        inner join tbl_Puestos puesto on  puesto.idDepartamento=empleado.idpuesto
                            inner join tbl_Departamento departamento on departamento.iddepartamento=puesto.iddepartamento
                                inner join tbl_salarios salario on salario.idsalario=puesto.idSalario
                    order by rrhh.nombre`;
    const result = await db.query(sql);
    res.json(result)

}

const postSalario = async (req, res) => {

    const { Salario } = req.body;
    const params = [Salario];
    const sql = `insert into tbl_salarios
                (Salario)
                values
                ($1) returning * `
    const result = await db.query(sql, params);
    res.json(result);
}


const putSalario = async (req, res) => {

    const { Salario } = req.body;
    const { idSalario } = req.params;

    const params = [
        Salario,
        idSalario
    ]

    const sql = `update tbl_salarios set Salario=$1 where idSalario=$2 returning * `
    const result = await db.query(sql, params);
    res.json(result);

}


const deleteSalario = async (req, res) => {

    const params = [req.params.idSalario];
    const sql = `delete from  tbl_salarios where idSalario=$1 returning * `
    const result = await db.query(sql, params);
    res.json(result);
}


export {getsalario,getInfoEmpleado,postSalario ,putSalario,deleteSalario}




