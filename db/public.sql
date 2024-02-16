-- Active: 1705366363032@@localhost@5432@rrhh
create table tbl_RRHH
(
    id serial primary key ,
    identidad varchar(13),
    nombre varchar(500), 
    creado TIMESTAMP DEFAULT current_timestamp
);

CREATE table tbl_Puestos
(
    idPuesto serial primary key ,
    idSalario   int,   
    idDepartamento int, 
    nombrePuesto varchar(500), 
    creado TIMESTAMP DEFAULT current_timestamp
);

insert into tbl_Puestos(idSalario,idDepartamento,nombrePuesto)
select 1,1,'Cordinador IT' union ALL
select 1,6,'Tecnico' union ALL
select 2,5,'Asistente 1' union ALL
select 3,4,'Ingeniero de desarrollo' union ALL
select 6,6,'Operador' 


create table tbl_Salarios
(
    idSalario serial primary key ,   
    Salario decimal(18,2), 
    creado TIMESTAMP DEFAULT current_timestamp
);

insert into tbl_Salarios(salario)
select 25000 union all
select 15000 union all
select 20000 union all
select 18500 union all
select 13500 union all
select  8000



create table tbl_Departamento
(
    idDepartamento serial primary key ,   
    nombre varchar(500), 
    creado TIMESTAMP DEFAULT current_timestamp
);


insert into tbl_Departamento(nombre)
select 'Informatica' union all
select 'Contabilidad' union all
select 'APQ' union all
select 'Ingenieria' union all
select 'Supervisor' union all
select 'Calidad' 


create table tbl_Empleados
(
    idEmpleado serial primary key ,
    idRRHHempleado int,
    idpuesto int, 
    creado TIMESTAMP DEFAULT current_timestamp
);

insert into tbl_Empleados (idrrhhempleado,idpuesto)
select 1,1 union ALL
select 2,4

-- drop table tbl_Puestos
-- drop table tbl_Departamento
--drop table tbl_Empleados_Vacaciones


insert into tbl_RRHH(identidad,nombre)
values
        ('0501198011962','Melida Romero')


 create table tbl_Empleados_Permisos
(
    idPermiso serial primary key ,
    idRRHHempleado int,
    motivo VARCHAR(1000),
    tiempo varchar(500), 
    creado TIMESTAMP DEFAULT current_timestamp
);       

insert into tbl_Empleados_Permisos(idRRHHempleado,motivo,tiempo)
select 1,'Asuntos Familiares','1 dia' union ALL
select 1,'Cita Medica','4 horas' union all
select 2,'Asuntos Personales','1 dia'

 create table tbl_Empleados_Vacaciones
(
    idVacaciones serial primary key ,
    idRRHHempleado int,
    fechaInicio DATE,
    FechaFinal Date,
    dias int,
    creado TIMESTAMP DEFAULT current_timestamp
);    

insert into tbl_Empleados_Vacaciones(idRRHHempleado,fechainicio,fechaFinal)
VALUES 
(1, '2024-01-01', '2024-01-05');

 create table tbl_Empleados_Incidentes
(
    idIncidentes serial primary key ,
    idRRHHempleado int,
    Incidentes VARCHAR(1000),
    Solucion varchar(1000), 
    creado TIMESTAMP DEFAULT current_timestamp
);       

insert into tbl_Empleados_Incidentes(idRRHHempleado,Incidentes,Solucion)
select 1,'NEGATIVA A CUMPLIR LAS DISPOSICIONES IMPUESTAS POR LA EMPRESA ATRAVEZ DE UN SUPERIOR','SUSPENCION LABORAL SIN GOSE DE SALARIO POR EL TREMIDO DE 3 DIAS DEL 06-08	' 

select * from tbl_RRHH

select * from tbl_Departamento

select * from tbl_salarios

select * from tbl_Puestos


select * from tbl_Empleados

select * from tbl_Empleados_Permisos

select * from tbl_Empleados_vacaciones

select * from tbl_Empleados_incidentes

select rrhh.nombre,departamento.nombre as departamento, puesto.nombrepuesto as puesto, salario.salario as salario
 from tbl_Empleados empleado
    inner join tbl_RRHH rrhh on rrhh.id=empleado.idrrhhempleado
        inner join tbl_Puestos puesto on  puesto.idDepartamento=empleado.idpuesto
            inner join tbl_Departamento departamento on departamento.iddepartamento=puesto.iddepartamento
                inner join tbl_salarios salario on salario.idsalario=puesto.idSalario




