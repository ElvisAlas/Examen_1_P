import { db } from "../db/conn.js";

const getEmpleado = async (req, res) => {
    const sql = `select id, identidad, nombre, encode(foto, 'base64') AS foto from tbl_RRHH order by id`;
    const result = await db.query(sql);
    res.json(result)

}

const postEmpleado = async (req, res) => {
    try {
        const { identidad, nombre } = req.body;
        let foto;

        if (req.body.imagen!='') {
            foto = req.body.imagen; 
        }

        const params = [identidad, nombre, foto];
              
        const sql = `insert into tbl_rrhh (identidad, nombre, foto) values ($1, $2, $3) returning identidad, 'Insercion Exitosa' mensaje`;
        const result = await db.query(sql, params);
    
        res.json(result);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
}


const putEmpledo = async (req, res) => {

    const { identidad, nombre } = req.body;
    const { id } = req.params;

    const params = [
        identidad,
        nombre,
        id
    ]

    const sql = `update tbl_rrhh set identidad=$1, nombre=$2 where id=$3 returning identidad,'Actualizado' mensaje `
    const result = await db.query(sql, params);
    res.json(result);

}

const deleteEmpleado = async (req, res) => {

    const params = [req.params.id];
    const sql = `delete from  tbl_rrhh where id=$1 returning identidad,'Eliminado' mensaje  `
    const result = await db.query(sql, params);
    res.json(result);
}


export { getEmpleado, postEmpleado,putEmpledo, deleteEmpleado}




