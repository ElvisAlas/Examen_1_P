import express from 'express';

import { empleado } from './routers/apiRRHH.js';
import { salario } from './routers/apiSalarios.js';
import { permiso } from './routers/apiPermisos.js';
import { incidente } from './routers/apiIncidentes.js';
import { vaciones } from './routers/apiVacaciones.js';

const app = express();

app.use(express.json());

const port = 4000;


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
  next();
});

app.use('/api/empleados', empleado);
app.use('/api/salarios', salario);
app.use('/api/permisos', permiso);
app.use('/api/incidentes', incidente);
app.use('/api/vacaciones', vaciones);

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
