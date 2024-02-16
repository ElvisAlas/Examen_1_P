import { db } from "../db/conn.js";

const getIncidentes = async (req, res) => {
    const sql = `select idincidentes
                        ,rh.nombre as nombre
                        , i.incidentes
                        ,i.solucion                       
                    from tbl_Empleados_incidentes i
                        inner join tbl_RRHH RH on rh.id=i.idrrhhempleado
                    order by idincidentes`;
    const result = await db.query(sql);
    res.json(result)

}

const postIncidentes = async (req, res) => {

    const { idrrhhempleado, incidentes ,solucion} = req.body;
    const params = [idrrhhempleado, incidentes,solucion];
    const sql = `insert into tbl_Empleados_incidentes
                (idrrhhempleado,incidentes,solucion)
                values
                ($1,$2,$3) returning * `
    const result = await db.query(sql, params);
    res.json(result);
}

const putIncidentes = async (req, res) => {

    const { idrrhhempleado, incidentes,solucion } = req.body;
    const { idincidentes } = req.params;

    const params = [
        idrrhhempleado,
        incidentes,
        solucion,
        idincidentes
    ]

    const sql = `update tbl_Empleados_incidentes set idrrhhempleado=$1, incidentes=$2,solucion=$3 where idincidentes=$4 returning * `
    const result = await db.query(sql, params);
    res.json(result);

}

const deleteincidentes = async (req, res) => {

    const params = [req.params.idincidentes];
    const sql = `delete from  tbl_Empleados_incidentes where idincidentes=$1 returning * `
    const result = await db.query(sql, params);
    res.json(result);
}


export { getIncidentes, postIncidentes,putIncidentes, deleteincidentes}




