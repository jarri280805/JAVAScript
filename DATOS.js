
//Variables User 1

let nombreCompleto="";
let edad=0;
let tipodeDocumento="";
let numeroDocumento="";

//Informacion Laboral 3

let salario=0;
let comisones=0;
let totalHorasExtra=0;
let clasificaciondeNiveldeRiesgo="";
let niveldeRiesgo=0;

//Constantes tarifas colombia 6

const salarioMinimoLegalVigente=17550905;
const salarioMinimoIntegralVigente=22761765;
const subsidiodeTransporte=249095;
const unidaddeValorTributario=5237;

//Constantes obligacions laborales 4

const fondodeSolidaridadPensional= 0.01;
const salud=0.04 ;
const pension=0.04 ;
const ibc=0.7 ;

//Constantes para el calculo del riesgo laboral 6

const riesgoMinimo=0.00522 ;
const riesgoBajo=0.01044 ;
const riesgoMedio=0.02436 ;
const riesgoAlto=0.04350 ;
const riesgoMaximo=0.06960 ;

//Calculos

let calculoIbc=(salario+comisones+totalHorasExtra)*ibc;
let calculoSalud=calculoIbc*salud;
let calculoPension=calculoIbc*pension;
let calculoFondoDeSolidaridadPensional=calculoIbc*fondodeSolidaridadPensional;

//Calculo del riesgo laboral

if (calificacionNiveldeRiesgo === "riesgo minimo")( niveldeRiesgo=ibc*riesgoMinimo);
else if (calificacionNiveldeRiesgo === "riesgo bajo")( niveldeRiesgo=ibc*riesgoBajo);
else if (calificacionNiveldeRiesgo === "riesgo medio")( niveldeRiesgo=ibc*riesgoMedio);
else if (calificacionNiveldeRiesgo === "riesgo alto")( niveldeRiesgo=ibc*riesgoAlto);
else if (calificacionNiveldeRiesgo === "riesgo maximo")( niveldeRiesgo=ibc*riesgoMaximo);   

//Condicionales

if (edad <18) ;
else if (edad >=18 && edad <=25) ;
else if (edad <=60) ;

//Arrays//

const deRiesgo=[riesgoMinimo, riesgoBajo, riesgoMedio, riesgoAlto, riesgoMaximo]

