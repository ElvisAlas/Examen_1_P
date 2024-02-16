import pg from 'pg-promise';
import dotenv from 'dotenv';

dotenv.config();

const user=process.env.USER
const pass=process.env.PASS
const dataBase= process.env.DB
const server=process.env.SERVER
const portDb=process.env.PORT_DB


const pgp=pg()

const cnstr = `postgresql://${user}:${pass}@${server}:${portDb}/${dataBase}`; 
//const cnstr = `postgresql://postgres:Ealas2201*@localhost:5432/rrhh`; 
const db = pgp(cnstr);

db.connect()
    .then( ()=>{
        console.log("Conexion Exitosa");
    } )
    .catch( (err)=>{

        console.log(`Error de conexion ${err}`)
    } )

export { db }
