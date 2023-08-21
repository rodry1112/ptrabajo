const express=require("express");
const res = require("express/lib/response");

const app = express();

app.get('/',(req,res)=>{
    
    res.send('HOLA MUNDO');
});
app.get('/saludo',(req,res)=>{
console.log('buenos dias tecnologos');
//mostrar al cliente
res.send('buen dia cliente');
});
app.get('/saludo/:nombre',(req,res)=>{
    res.send(`buenos dias ${req.params.nombre}`);
});
app.get('/saludo/:nombre/:edad',(req,res)=>{
    var fechaa=new Date();
    res.send(`buenos dias ${req.params.nombre}<br> tu edad es de: ${req.params.edad}<br> y la fecha actual es: `+fechaa);
});
// hacer que el servidor oiga
app.listen(3000,()=>{
    console.log("servidor OK en puerto 3000");
});