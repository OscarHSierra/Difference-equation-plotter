var a= document.getElementById("input_a");
var b= document.getElementById("input_b");
var c= document.getElementById("input_c");
var d= document.getElementById("input_d");
var e= document.getElementById("input_e");



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


    w2=w.toFixed(2);
    lienzo.clearRect(0, 0, 400, 380);       //Se borra el canvas
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
    while (contador < 50)
    {
        x=1;
       res=a.value*y2 + b.value*y1 + c.value*x2 + d.value*x1 + e.value*x;
        //res=-0.6887*y2+1.39*y1 + 0.7119*x2 +1.424*x1 +0.7119*x;

        lienzo.lineTo(contador*6,-res*10+200);
        
        if(aux==5|| contador==0)
        {
            lienzo.fillText( "x", contador*6, -res*10+202);
            lienzo.fillText( res.toFixed(2), contador*6+3, -res*10+195);
            lienzo.fillText("|", contador*6, 210);
            lienzo.fillText("|", contador*6, 209);
            lienzo.fillText( 1*contador+"uS", contador*6, 230);
            aux=0
        }
        aux++;
        contador++;

        y2=y1;
        y1=res;
        x2=x1;
        x1=x;
        

    }

    lienzo.stroke();
    //lienzo.fill();

  //  lienzo.moveTo(0,250);
    lienzo.lineTo(0,100);

   // lienzo.lineTo(duty,100);
   // lienzo.lineTo(duty,250);
   // lienzo.moveTo(0,250);

  //  lienzo.stroke();
   // lienzo.fill();
    // lienzo.font = "60px Comic Sans MS";
    // lienzo.fillStyle = "black";
    // lienzo.textAlign = "center";
    // ro=t.value.toString();
    // lienzo.fillText("|", 300, 270);
    // lienzo.font = "20px Comic Sans MS";


    // s2=parseFloat(t.value);
    // s3=s2.toFixed(2);
    // s4=((ciclo.value*0.01*t.value).toFixed(2)).toString() ;
    // lienzo.font = "60px Comic Sans MS";
    // lienzo.fillText("|", duty, 100);
    // lienzo.font = "20px Comic Sans MS";



    // lienzo.fillText("Duty="+ s4+"seg", duty+offset, 30);
}
   






boton.addEventListener("click",dibujar_linea);