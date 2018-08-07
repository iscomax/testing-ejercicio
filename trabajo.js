/*ALGORITMO
ALGORITMO: En una librería se venden artículos 
con las siguientes condiciones:
Sí el cliente compra producto 1=valor se le descuenta 30%
Sí el cliente compra producto 2=valor se le descuenta 20%
Sí el cliente compra producto 3=valor se le descuenta 10%

declaracion variables*/
/*
var pruducto1=100
var pruducto2=250
var pruducto3=500

var descuentop1=(pruducto1*0.10)
var descuentop2=(pruducto2*0.20)
var descuentop3=(pruducto3*0.30)


var preciofinalp1=(pruducto1-descuentop1)
var preciofinalp2=(pruducto2-descuentop2)
var preciofinalp3=(pruducto3-descuentop3)*/


exports.preciofinalpt1= function preciofinalpt1(precio){
    descuento = (precio*10)/100

    return precio-descuento;
    }   

 

