import { db } from "../db/conn.js";

const getVacaciones = async (req, res) => {
    const sql = `select idvacaciones
                        ,rh.nombre as nombre
                        , V.fechainicio
                        ,V.fechafinal                       
                    from tbl_Empleados_vacaciones V
                        inner join tbl_RRHH RH on rh.id=V.idrrhhempleado
                    order by idvacaciones
                    `;
    const result = await db.query(sql);
    res.json(result)

}

const postVacaciones = async (req, res) => {

    const { idrrhhempleado, fechainicio ,fechafinal} = req.body;
    const params = [idrrhhempleado, fechainicio,fechafinal];
    const sql = `insert into tbl_Empleados_vacaciones
                (idrrhhempleado,fechainicio,fechafinal)
                values
                ($1,$2,$3) returning * `
    const result = await db.query(sql, params);
    res.json(result);
}

const putVacaciones = async (req, res) => {

    const { idrrhhempleado, fechainicio,fechafinal } = req.body;
    const { idvacaciones } = req.params;

    const params = [
        idrrhhempleado,
        fechainicio,
        fechafinal,
        idvacaciones
    ]

    const sql = `update tbl_Empleados_vacaciones set idrrhhempleado=$1, fechainicio=$2,fechafinal=$3 where idvacaciones=$4 returning * `
    const result = await db.query(sql, params);
    res.json(result);

}

const deleteVacaciones = async (req, res) => {

    const params = [req.params.idvacaciones];
    const sql = `delete from  tbl_Empleados_vacaciones where idvacaciones=$1 returning * `
    const result = await db.query(sql, params);
    res.json(result);
}


export { getVacaciones, postVacaciones,putVacaciones, deleteVacaciones}




