import { db } from "../db/conn.js";

const getPermisos = async (req, res) => {
    const sql = `select * from tbl_Empleados_Permisos order by id`;
    const result = await db.query(sql);
    res.json(result)

}

const postPermisos = async (req, res) => {

    const { idrrhhempleado, motivo ,tiempo} = req.body;S
    const params = [idrrhhempleado, motivo,tiempo];
    const sql = `insert into tbl_Empleados_Permisos
                (idrrhhempleado,motivo,tiempo)
                values
                ($1,$2,$3) returning * `
    const result = await db.query(sql, params);
    res.json(result);
}

const putPermisos = async (req, res) => {

    const { idrrhhempleado, motivo,tiempo } = req.body;
    const { id } = req.params;

    const params = [
        idrrhhempleado,
        motivo,
        tiempo,
        id
    ]

    const sql = `update tbl_Empleados_Permisos set idrrhhempleado=$1, motivo=$2,tiempo=$3 where id=$4 returning * `
    const result = await db.query(sql, params);
    res.json(result);

}

const deletePermisos = async (req, res) => {

    const params = [req.params.id];
    const sql = `delete from  tbl_Empleados_Permisos where id=$1 returning * `
    const result = await db.query(sql, params);
    res.json(result);
}


export { getPermisos, postPermisos,putPermisos, deletePermisos}




