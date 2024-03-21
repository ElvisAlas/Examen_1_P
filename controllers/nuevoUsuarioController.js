import { db } from "../db/conn.js";


const postnuevoUsuario = async (req, res) => {

    try{
       
        const { usuario,correo,contrasena } = req.body;
     
        const {
            buffer     
        } = req.file;
    
        const params = [usuario,correo,contrasena,buffer];
    
        const sql = `insert into usuarios
                    (usuario,correo,contrasena,foto)
                    values
                    ($1,$2,$3,$4) returning * , 'Insercion Exitosa' mensaje `
    
        const result = await db.query(sql, params);
        res.json(result);
    }catch{
        res.status(500).json({ mensaje: err.message });
    }

   
}

export {postnuevoUsuario}




