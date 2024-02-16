import { db } from "../db/conn.js";

const getEmpleado = async (req, res) => {
    const sql = `select * from tbl_RRHH order by id`;
    const result = await db.query(sql);
    res.json(result)

}

const postEmpleado = async (req, res) => {

    const { identidad, nombre } = req.body;S
    const params = [identidad, nombre];
    const sql = `insert into tbl_rrhh
                (identidad,nombre)
                values
                ($1,$2) returning * `
    const result = await db.query(sql, params);
    res.json(result);
}

const putEmpledo = async (req, res) => {

    const { identidad, nombre } = req.body;
    const { id } = req.params;

    const params = [
        identidad,
        nombre,
        id
    ]

    const sql = `update tbl_rrhh set identidad=$1, nombre=$2 where id=$3 returning * `
    const result = await db.query(sql, params);
    res.json(result);

}

const deleteEmpleado = async (req, res) => {

    const params = [req.params.id];
    const sql = `delete from  tbl_rrhh where id=$1 returning * `
    const result = await db.query(sql, params);
    res.json(result);
}


export { getEmpleado, postEmpleado,putEmpledo, deleteEmpleado}




