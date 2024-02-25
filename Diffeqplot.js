var a= document.getElementById("input_a");
var b= document.getElementById("input_b");
var c= document.getElementById("input_c");
var d= document.getElementById("input_d");
var e= document.getElementById("input_e");
var Tm= document.getElementById("input_Tm");
var boton=document.getElementById("boton");
var controlador_js=document.getElementById("controlador");
var b0=0.0;
var r=document.getElementById("resultado");
var im=document.getElementById("imagen_res");
var wc=0.0;
var w=0.0;
var ro=0.0;
var tipo
var w2=0.0;
var s2=0.0;
var s3=0.0;
var s4=0.0;
var offset=0.0;
var s=0.0;
var num=0.0;
var r=document.getElementById("resultado");
var z=document.getElementById("dibujito"); //se obtiene el id desde el canvas
var lienzo= z.getContext('2d'); //se define el dibujo en 2d
lienzo.scale(1.3,1.3);
var duty=350;

function dibujar_linea()
{
    Tm.value=parseInt(Tm.value);
    if (Tm.value>99 || Tm.value<=0)
    {
       alert("Error Tm debe ser mayor a cero y menor a 100uS");
        Tm.value=99;
    }

    w2=w.toFixed(2);
    lienzo.clearRect(0, 0, 480, 380);       //Se borra el canvas
    lienzo.fillStyle = "rgb(62, 0, 168)";


    var y2=0;
    var y1=0;
    var x1=0;
    var x2=0;
    var x=1;
    var res=0;
    var contador=0;   
    var aux=0;

    lienzo.beginPath(); 
    lienzo.moveTo(0,200);

    var tiempomuestreo=Tm.value;

    if(Tm.value<5)
    {
        while (contador < 300)
        {

    
           
           
            
            if(aux==Tm.value|| contador==0||aux==Tm.value*2||aux==Tm.value*3||aux==Tm.value*4||aux==Tm.value*5||aux==Tm.value*6)
            {
                x=1;
                res=a.value*y2 + b.value*y1 + c.value*x2 + d.value*x1 + e.value*x;
                 //res=-0.6887*y2+1.39*y1 + 0.7119*x2 +1.424*x1 +0.7119*x;
                lienzo.lineTo(contador*(1/Tm.value)*28,-res*5+200);
                lienzo.fillText( "x", contador*(1/Tm.value)*28, -res*5+202);
                lienzo.fillText( res.toFixed(2), contador*(1/Tm.value)*28+3, -res*5+195);
                lienzo.fillText("|", contador*(1/Tm.value)*28, 210);
                lienzo.fillText("|", contador*(1/Tm.value)*28, 209);
                lienzo.fillText( 1*contador+"uS", contador*(1/Tm.value)*28, 230);
                aux=0
                y2=y1;
                y1=res;
                x2=x1;
                x1=x;
            }
            aux++;
            contador++;
            tiempomuestreo = tiempomuestreo*2;
   
        }
    }
    else
    {
        while (contador < Tm.value*20)
        {
           
            if(aux==Tm.value|| contador==0||aux==Tm.value*2||aux==Tm.value*3||aux==Tm.value*4)
            {
                x=1;
                res=a.value*y2 + b.value*y1 + c.value*x2 + d.value*x1 + e.value*x;
                 //res=-0.6887*y2+1.39*y1 + 0.7119*x2 +1.424*x1 +0.7119*x;
                lienzo.lineTo(contador*(1/Tm.value)*32,-res*5+200);
                lienzo.fillText( "x", contador*(1/Tm.value)*32, -res*5+202);
                lienzo.fillText( res.toFixed(2), contador*(1/Tm.value)*32+3, -res*5+195);
                lienzo.fillText("|", contador*(1/Tm.value)*32, 210);
                lienzo.fillText("|", contador*(1/Tm.value)*32, 209);
                lienzo.fillText( 1*contador+"uS", contador*(1/Tm.value)*32, 230);
                aux=0
                y2=y1;
                y1=res;
                x2=x1;
                x1=x;
            }
            aux++;
            contador++;
            tiempomuestreo = tiempomuestreo*2;

        }
    }


    

    lienzo.stroke();
    //lienzo.fill();

  //  lienzo.moveTo(0,250);
    lienzo.lineTo(0,100);



}
   






boton.addEventListener("click",dibujar_linea);