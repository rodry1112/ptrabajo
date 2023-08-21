create schema practicas;
use practicas;
create table Tproductos(
id_producto int primary key,
id_tipo int, /*referido si es de escritorio,limpieza,carnes,frutas,carnes,etc*/	
descripcion varchar(35),
precio_compra double,
precio_venta double,
cantidad int,
activo bit default (0)
);
use practicas;
insert into tproductos(id_producto, id_tipo,descripcion,precio_compra,precio_venta,cantidad) values(1,101,"batidora",231.00,250.00,4),
(2,102,"televisor",131.00,150.00,8),
(3,103,"control",54.00,60.00,6),
(4,104,"batidora",331.00,340.00,1);
select * from tproductos;