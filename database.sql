SELECT pg_terminate_backend(pg_stat_activity.pid)
    FROM pg_stat_activity
    WHERE pg_stat_activity.datname = 'crm'
      AND pid <> pg_backend_pid();

REVOKE CONNECT on DATABASE crm from public;
drop DATABASE crm;
create DATABASE crm;

CONNECT crm;

create table cliente (
    id serial PRIMARY key,
    nombre VARCHAR(100) unique not null,
    nit VARCHAR(15) not null,
    correo VARCHAR(50) not null
);

create TABLE proyecto (
    id serial PRIMARY key,
    nombre VARCHAR(100) UNIQUE NOT NULL,
    descripcion varchar(250) null
);

create table proyecto_cliente (
    id_proyecto int not null,
    id_cliente int not null,
    PRIMARY key (id_proyecto, id_cliente),
    FOREIGN KEY (id_proyecto) REFERENCES proyecto (id),
    FOREIGN key (id_cliente) REFERENCES cliente (id)
);

create table contacto(
    id serial PRIMARY KEY,
    id_cliente int not null,
    nombre VARCHAR(100) not null,
    telefono VARCHAR(20) null,
    correo VARCHAR(50) not null,
    FOREIGN KEY (id_cliente) REFERENCES cliente (id)
); 

create table reunion(
    id serial PRIMARY KEY,
    nombre VARCHAR(100) not null,
    descripcion VARCHAR(250) null,
    id_proyecto INT null,
    FOREIGN key (id_proyecto) REFERENCES proyecto(id)
);

create table reunion_participantes (
    id serial PRIMARY key,
    id_reunion int not null,
    id_contacto int not null,
    FOREIGN KEY (id_contacto) references contacto (id)
);
