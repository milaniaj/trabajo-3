 var frame=window.requestAnimationFrame||
		  window.mozRequedAnimationFrame||
		  window.webkitRequestAnimationFrame||
		  window.msRequesAnimationFrame;

var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext('2d');                         
//=======IMAGEN 6======
var sprite=new Image();
sprite.src="img/img3.jpg";
var numero2=0;
var ubicacionx =0;
/*var varmovimiento= new Object({
numero3:0;
ubicacionxxo3:0;
})
numero3:0;
ubicacionxxo3:0;*/
var numero3=0;
var ubicacion1=0;
function movimiento(){
	if(numero2>=1024) {numero2=0}else{numero2+=10}
		for (var i = 0; i <= numero2; i+=400) {
			if(numero2>=i) {ubicacionx=i}
		}
	if(numero3>=1000) {numero3=0}else{numero3+=5}
		for (var a = 0; a <= numero3; a+=10) {
			if(numero3>=a) {ubicacion1=a}
		}
	//ctx.draw(imagen, x1,y1,recortex, recortey,x2,xy2);
ctx.clearRect(ubicacion1,100,100,100);

//=============================================
//					CIELO1
//=============================================

var cielo={
    colorfondo0:"blue",
    colorfondo1:"white",
    valorx:0,
	valory:0,
	ancho:1000,
	alto:400,
	ord:0,ord1:1,
	a:0,b:100,c:0,d:350,
	visualizar:function(){
		var grd=ctx.createLinearGradient(cielo.a,cielo.b,cielo.c,cielo.d);
		grd.addColorStop(cielo.ord,cielo.colorfondo0);
		grd.addColorStop(cielo.ord1,cielo.colorfondo1);
		ctx.fillStyle=grd;
		ctx.fillRect(cielo.valorx,cielo.valory,cielo.ancho,cielo.alto);
	}
}
cielo.visualizar();
//=============================================
//					rio
//=============================================
var rio={
	colorfondo0:"cyan",
	colorfondo1:"white",
	valorx:0,
	valory:400,
	ancho:1000,
	alto:200,
	ord:0,ord1:1,
	a:400,b:400,c:400,d:500,
	visualizar:function(){
        var grd=ctx.createLinearGradient(rio.a,rio.b,rio.c,rio.d);
        grd.addColorStop(rio.ord,rio.colorfondo0);
		grd.addColorStop(rio.ord1,rio.colorfondo1);
		ctx.fillStyle=grd;
		ctx.fillRect(rio.valorx,rio.valory,rio.ancho,rio.alto);
    }
}
rio.visualizar();
//=============================================
//					MONTAÑA 1
//=============================================
var montaña1={
	color:"palevioletred",
	valorx:0,
	valory:400,
	base:200,
	ancho:100,
	alto:400,
	alto2:400
}
ctx.beginPath();
ctx.fillStyle = montaña1.color; //a(100,0,255,100)';
ctx.moveTo(montaña1.valorx,montaña1.valory);
ctx.lineTo(montaña1.base,montaña1.ancho);
ctx.lineTo(montaña1.alto,montaña1.alto2);
ctx.fill();
//=============================================
//					MONTAÑA 2
//=============================================
var montaña2={
	color:"indigo",
	valorx:200,
	valory:400,
	base:400,
	ancho:100,
	alto:600,
	alto2:400
}
ctx.beginPath();
ctx.fillStyle = montaña2.color; //a(100,0,255,100)';
ctx.moveTo(montaña2.valorx,montaña2.valory);
ctx.lineTo(montaña2.base,montaña2.ancho);
ctx.lineTo(montaña2.alto,montaña2.alto2);
ctx.fill();
//=============================================
//					MONTAÑA 3
//=============================================
var montaña3={
	color:"purple",
	valorx:400,
	valory:400,
	base:600,
	ancho:100,
	alto:800,
	alto2:400
}
ctx.beginPath();
ctx.fillStyle = montaña3.color; //a(100,0,255,100)';
ctx.moveTo(montaña3.valorx,montaña3.valory);
ctx.lineTo(montaña3.base,montaña3.ancho);
ctx.lineTo(montaña3.alto,montaña3.alto2);
ctx.fill();
//=============================================
//					MONTAÑA 4
//=============================================
var montaña4={
	color:"indigo",
	valorx:600,
	valory:400,
	base:800,
	ancho:100,
	alto:1000,
	alto2:400
}
ctx.beginPath();
ctx.fillStyle = montaña4.color; //a(100,0,255,100)';
ctx.moveTo(montaña4.valorx,montaña4.valory);
ctx.lineTo(montaña4.base,montaña4.ancho);
ctx.lineTo(montaña4.alto,montaña4.alto2);
ctx.fill();
//=============================================
// circulo 2
//=============================================
ctx.beginPath();
ctx.arc(900,550,200,0,2*Math.PI);
ctx.fillStyle="green";
ctx.fill();
//=============================================
//sol
//=============================================
/*ctx.beginPath();
var cielo={}
ctx.setTimeout(cielo,50);
ctx.arc(25,25,50,0,2*Math.PI);
ctx.clearRect(0,0,600,200);
ctx.fillStyle="white";
ctx.fill();*/
ctx.beginPath();
ctx.arc(25,25,50,0,2*Math.PI);
ctx.fillStyle="yellow";
ctx.fill();
//===================================
//             	NEVADO 1
//===================================
var nevado1={
	color:"white",
	valorx:132,
	valory:200,
	base:200,
	ancho:100,
	alto:200,
	alto2:280
}
ctx.beginPath();
ctx.fillStyle = nevado1.color; //a(100,0,255,100)';
ctx.moveTo(nevado1.valorx,nevado1.valory);
ctx.lineTo(nevado1.base,nevado1.ancho);
ctx.lineTo(nevado1.alto,nevado1.alto2);
ctx.fill();
//===================================
//             	NEVADO 1
//===================================
var nevado1={
	color:"#a9d0f5",
	valorx:268,
	valory:200,
	base:200,
	ancho:100,
	alto:200,
	alto2:280
}
ctx.beginPath();
ctx.fillStyle = nevado1.color; //a(100,0,255,100)';
ctx.moveTo(nevado1.valorx,nevado1.valory);
ctx.lineTo(nevado1.base,nevado1.ancho);
ctx.lineTo(nevado1.alto,nevado1.alto2);
ctx.fill(); 
//===================================
//             	NEVADO 2
//===================================
 var nevado2={
	color:"white",
	valorx:332,
	valory:200,
	base:400,
	ancho:100,
	alto:400,
	alto2:280
}
ctx.beginPath();
ctx.fillStyle = nevado2.color; //a(100,0,255,100)';
ctx.moveTo(nevado2.valorx,nevado2.valory);
ctx.lineTo(nevado2.base,nevado2.ancho);
ctx.lineTo(nevado2.alto,nevado2.alto2);
ctx.fill();
//===================================
//             	NEVADO 2
//===================================
 var nevado2={
	color:"#a9d0f5",
	valorx:466,
	valory:200,
	base:400,
	ancho:100,
	alto:400,
	alto2:280
}
ctx.beginPath();
ctx.fillStyle = nevado2.color; //a(100,0,255,100)';
ctx.moveTo(nevado2.valorx,nevado2.valory);
ctx.lineTo(nevado2.base,nevado2.ancho);
ctx.lineTo(nevado2.alto,nevado2.alto2);
ctx.fill();
//===================================
//             	NEVADO 3
//===================================
var nevado3={
	color:"white",
	valorx:532,
	valory:200,
	base:600,
	ancho:100,
	alto:600,
	alto2:280
}
ctx.beginPath();
ctx.fillStyle = nevado3.color; //a(100,0,255,100)';
ctx.moveTo(nevado3.valorx,nevado3.valory);
ctx.lineTo(nevado3.base,nevado3.ancho);
ctx.lineTo(nevado3.alto,nevado3.alto2);
ctx.fill();
//===================================
//             	NEVADO 3
//===================================
var nevado3={
	color:"#a9d0f5",
	valorx:666,
	valory:200,
	base:600,
	ancho:100,
	alto:600,
	alto2:280
}
ctx.beginPath();
ctx.fillStyle = nevado3.color; //a(100,0,255,100)';
ctx.moveTo(nevado3.valorx,nevado3.valory);
ctx.lineTo(nevado3.base,nevado3.ancho);
ctx.lineTo(nevado3.alto,nevado3.alto2);
ctx.fill();
//===================================
//             	NEVADO 4
//===================================
var nevado4={
	color:"white",
	valorx:732,
	valory:200,
	base:800,
	ancho:100,
	alto:800,
	alto2:280
}
ctx.beginPath();
ctx.fillStyle = nevado4.color; //a(100,0,255,100)';
ctx.moveTo(nevado4.valorx,nevado4.valory);
ctx.lineTo(nevado4.base,nevado4.ancho);
ctx.lineTo(nevado4.alto,nevado4.alto2);
ctx.fill();
//===================================
//             	NEVADO 4
//===================================
var nevado4={
	color:"#a9d0f5",
	valorx:868,
	valory:200,
	base:800,
	ancho:100,
	alto:800,
	alto2:280
}
ctx.beginPath();
ctx.fillStyle = nevado4.color; //a(100,0,255,100)';
ctx.moveTo(nevado4.valorx,nevado4.valory);
ctx.lineTo(nevado4.base,nevado4.ancho);
ctx.lineTo(nevado4.alto,nevado4.alto2);
ctx.fill();
//-------
//					tallo
var tallo1={
	color:"brown",
	valorx:115,
	valory:190,
	ancho:23,
	alto:100
}
ctx.fillStyle=tallo1.color;
//ctx.fillrect(x,y,x1,y2);
ctx.fillRect(tallo1.valorx,tallo1.valory,tallo1.ancho,tallo1.alto);
/*ctx.fillStyle="brown";//a(900,550,220,0,2)';
ctx.fillRect(115,190,23,100);*/
var tallo2=new Object({
	color:"brown",
	valorx:900,
	valory:254,
	ancho:20,
	alto:100
})
ctx.fillStyle=tallo2.color;
//ctx.fillrect(x,y,x1,y2);
ctx.fillRect(tallo2.valorx,tallo2.valory,tallo2.ancho,tallo2.alto);
//=============================================
// circulo 1
//=============================================
//ctx.arc(x1,y1,r,iniciaangulo,finalangulo);
ctx.arc(50,500,230,0,2*Math.PI);
//relleno
ctx.fillStyle="#64dd17";
ctx.fill();
//=============================================
//					pino1
//=============================================
var pino1={
	color:"#259b24",
	valorx:800,
	valory:300,
	base:900,
	ancho:200,
	alto:1000,
	alto2:300
}
ctx.beginPath();
ctx.fillStyle = pino1.color; //a(100,0,255,100)';
ctx.moveTo(pino1.valorx,pino1.valory);
ctx.lineTo(pino1.base,pino1.ancho);
ctx.lineTo(pino1.alto,pino1.alto2);
ctx.fill();
//=============================================
//					pino2
//=============================================
var pino2={
	color:"#5af158",
	valorx:800,
	valory:250,
	base:900,
	ancho:150,
	alto:1000,
	alto2:250
}
ctx.beginPath();
ctx.fillStyle = pino2.color; //a(100,0,255,100)';
ctx.moveTo(pino2.valorx,pino2.valory);
ctx.lineTo(pino2.base,pino2.ancho);
ctx.lineTo(pino2.alto,pino2.alto2);
ctx.fill();
//=============================================
//					pino3
//=============================================
var pino3={
	color:"green",
	valorx:800,
	valory:200,
	base:900,
	ancho:100,
	alto:1000,
	alto2:200
}
ctx.beginPath();
ctx.fillStyle = pino3.color; //a(100,0,255,100)';
ctx.moveTo(pino3.valorx,pino3.valory);
ctx.lineTo(pino3.base,pino3.ancho);
ctx.lineTo(pino3.alto,pino3.alto2);
ctx.fill();
//=============================================
//arbol 1
//=============================================
ctx.beginPath();
ctx.arc(150,150,35,0,2*Math.PI);
ctx.fillStyle="lime";
ctx.fill();
//=============================================
//arbol 2
//=============================================
ctx.beginPath();
ctx.arc(80,170,35,0,2*Math.PI);
ctx.fillStyle="lime";
ctx.fill();
//=============================================
//arbol 3
//=============================================
ctx.beginPath();
ctx.arc(120,180,55,0,2*Math.PI);
ctx.fillStyle="green";
ctx.fill();
//=============================================
//arbol 4
//=============================================
ctx.beginPath();
ctx.arc(150,225,35,0,2*Math.PI);
ctx.fillStyle="green";
ctx.fill();
//=============================================
//pasto1
//=============================================
ctx.beginPath();
ctx.arc(10,500,30,0,2*Math.PI);
ctx.fillStyle="green";
ctx.fill();
//=============================================
//psto2
//=============================================
ctx.beginPath();
ctx.arc(70,500,30,0,2*Math.PI);
ctx.fillStyle="green";
ctx.fill();
//=============================================
//pasto3
//=============================================
ctx.beginPath();
ctx.arc(130,500,30,0,2*Math.PI);
ctx.fillStyle="green";
ctx.fill();
//=============================================
//pasto4
//=============================================
ctx.beginPath();
ctx.arc(190,500,30,0,2*Math.PI);
ctx.fillStyle="green";
ctx.fill();
//=============================================
//pasto4
//=============================================
ctx.beginPath();
ctx.arc(250,500,30,0,2*Math.PI);
ctx.fillStyle="green";
ctx.fill();

ctx.drawImage(sprite,ubicacionx,0,400,300,ubicacion1,300,150,100);
frame(movimiento);
}
movimiento();