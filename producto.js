const express=require("express");
const res = require("express/lib/response");
const mysql=require('mysql2');
const app =express();
const conexion =mysql.createConnection({
host:'localhost',
user:'root',
password:'10905460Lp',
database:'practicas'
});
conexion.connect((err)=>{
        if(err){
            throw err;
        } else{
            console.log("conexion exitosa");
        
        }
           
    }
    
);

app.use(express.json());
app.post('/prod',(req,res)=>{
data={
id_producto: req.body.id_producto,
id_tipo: req.body.id_tipo,
descripcion:req.body.descripcion,
precio_compra:req.body.precio_compra,
precio_venta:req.body.precio_venta,
cantidad:req.body.cantidad

}
let sql='insert into tproductos set ?';
conexion.query(sql,data,(err,resul)=>{
if(err){
console.log(err,message);
res.json({mensaje:'error inesperado'});
}else{
res.json(resul);
}

});
});

//con get
app.get('/prod',(req,res)=>{
let sql='select id_producto,id_tipo,descripcion,precio_compra,precio_venta,cantidad,activo from tproductos';
conexion.query(sql,(err,resul)=>{
if(err){
    console.log(err.message);
    res.json({mensaje:'error inesperado'});
}else{
    res.json(resul);
}
});
});
app.listen(4000,()=>{
    console.log("servidor OK en puerto 3000");
});