"use strict";

(function()
{
	window.addEventListener("load", main);
}());
var limite=425;
function main()
{
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var spArray;  //sprite array
	var Hamburguer = new Array(32);
	var arrastaa = new Array(32);
	var aux;
	var vida;
	canvas.addEventListener("initend", initEndHandler);
	init(ctx);  //carregar todos os componentes

	//funções locais para gestão de eventos
	function initEndHandler(ev)
	{
		//instalar listeners do rato	
		window.addEventListener("mousedown",teste2);
		window.addEventListener("mouseup",mouseuppppp);
		ctx.canvas.addEventListener('mousemove',mexe);
		var i;
		spArray = ev.spArray;
		vida=ev.vida;
		aux=ev.aux;
		var i;
		console.log("auxxx");
		for(i=0;i<aux.length;i++){
			console.log(aux);
		}
		/*print_teste(vida);*/
		/*
		for(i=0;i<spArray.length;i++){
			console.log(spArray[i].img.id);
		}
		console.log("sem o ultimo elemento");
		var teste =spArray.splice(6,7);
		console.log(teste);
		for(i=0;i<spArray.length;i++){
			console.log(spArray[i].img.id);
		}*/

		/*ctx.beginPath();
		ctx.lineWidth="6";
		ctx.strokeStyle="red";
		ctx.rect(0,0,ctx.canvas.width,ctx.canvas.height); 
		ctx.stroke();*/
		ctx.fillStyle="#F6FECE";
		ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height); 
		ctx.fillStyle="#CC7711";
		ctx.fillRect(0,400,ctx.canvas.width,200); 
		ctx.fillStyle="#D2D0C5";
		ctx.fillRect(0,100,ctx.canvas.width,50);
	
		draw(ctx, spArray);
		draw(ctx,vida);
		//nao sei onde por isto
	}
		var mexe = function(ev)
	{
		arrasta(ev, ctx,spArray,Hamburguer,arrastaa,vida);	
	}
		var mouseuppppp = function(ev)
	{
		retira(ev, ctx,spArray,Hamburguer,arrastaa,vida);	
	}
			var teste2 = function(ev)
	{
		drag(ev, ctx, spArray,Hamburguer,arrastaa,vida,aux);	
	}

}
function gera_canvas_basico(ctx){
	ctx.fillStyle="#F6FECE";
		ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height); 
		ctx.fillStyle="#CC7711";
		ctx.fillRect(0,400,ctx.canvas.width,200); 
		ctx.fillStyle="#D2D0C5";
		ctx.fillRect(0,100,ctx.canvas.width,50);

}

//init: carregamento de componentes
function init(ctx)
{
	var nLoad = 0;
	var totLoad = 14;
	var spArray = new Array(totLoad);
	var vida=new Array(3);
	var aux=new Array(3);
	aux[0]=Math.floor(Math.random() * (8 - 1 + 1)) + 1;
	aux[1]=Math.floor(Math.random() * (8 - 1 + 1)) + 1;
	aux[2]=Math.floor(Math.random() * (8 - 1 + 1)) + 1;
	var nivel=new Array(3);
	var img;

	//estilos de texto
	ctx.fillStyle = "#993333";
	ctx.font = "12px helvetica";	
	ctx.textBaseline = "bottom"; 
	ctx.textAlign = "center";  
	//carregar imagens e criar sprites
	var img0 = new Image(); 
	img0.addEventListener("load", imgLoadedHandler);
	img0.id="hamburguer";
	img0.src = "hamburguer.png";

	var img1 = new Image(); 

	img1.addEventListener("load", imgLoadedHandler);
	img1.id="pao_baixo";
	img1.src = "pao_0.png";

	var img2 = new Image(); 
	img2.addEventListener("load", imgLoadedHandler);
	img2.id="pao_cima";
	img2.src = "pao_1.png";  //dá ordem de carregamento da imagem

	var img3 = new Image();   //dá ordem de carregamento da imagem
	img3.addEventListener("load", imgLoadedHandler);
	img3.id="queijo";
	img3.src = "queijo.png";

	var img4 = new Image(); 
	img4.addEventListener("load", imgLoadedHandler);
	img4.id="alface";
	img4.src = "alface.png"; 

	var img6 = new Image(); 
	img6.addEventListener("load", imgLoadedHandler);
	img6.id="tomate";
	img6.src = "tomate.png"; 

	var img5 = new Image(); 
	img5.addEventListener("load", imgLoadedHandler);
	img5.id="prato";
	img5.src = "prato.png"; 


	var img7 = new Image(); 
	img7.addEventListener("load", imgLoadedHandler);
	img7.id="campainha";
	img7.src = "campainha.png"; 

	var img8 = new Image(); 
	img8.addEventListener("load", imgLoadedHandler);
	img8.id="reset";
	img8.src = "reset.png";

	var img9 = new Image(); 
	img9.addEventListener("load", imgLoadedHandler);
	img9.id="recado";
	img9.src = "recado.png";

	var img10 = new Image(); 
	img10.addEventListener("load", imgLoadedHandler);
	img10.id="heart1";
	img10.src = "heart.png"; 

	var img11 = new Image(); 
	img11.addEventListener("load", imgLoadedHandler);
	img11.id="heart2";
	img11.src = "heart.png";

	var img12 = new Image(); 
	img12.addEventListener("load", imgLoadedHandler);
	img12.id="heart3";
	img12.src = "heart.png";

	var imgH1 = new Image(); 
	imgH1.addEventListener("load", imgLoadedHandler);
	imgH1.id=aux[aux.length-1].toString();
	imgH1.src = "Hamburguer_"+aux[aux.length-1].toString()+".PNG";
	function imgLoadedHandler(ev)
	{
		var img = ev.target;
		switch(img.id){
			case "hamburguer":
				var sp = new SpriteImage(650,475,240,50, 1, true, img0);
				spArray[6] = sp;
				break;

			case "pao_baixo":
				var sp = new SpriteImage(980,540,240,50, 1, true, img1);
				spArray[5] = sp;
				break;
			
			case "pao_cima":
				var sp = new SpriteImage(980,375,250,132, 1, true,img2);
				spArray[4]= sp;
				break;
			case "queijo":
				var sp = new SpriteImage(1025,300,125,125, 1, true, img3);
				 spArray[3]= sp;
				break;
			case "alface":
				var sp = new SpriteImage(875,300,125,125, 1, true,img4);
				spArray[2] = sp;
				break;
			case "tomate":
				var sp = new SpriteImage(700,269,150,156, 1, true,img6);
				spArray[1] = sp;
				break;

			case "prato":
				var sp = new SpriteImage(275,400,400,50, 1, false,img5);
				spArray[0] = sp;
				break;
			case "reset":
				var sp = new SpriteImage(1000,25,150,150, 1, true,img8);
				spArray[8] = sp;
				break;
			case "campainha":
				var sp = new SpriteImage(50,300,150,150, 1, true,img7);
				spArray[7] = sp;
				break;
			case "recado":
				var sp = new SpriteImage(50,100,100,100, 1, false,img9);
				spArray[9] = sp;
				break;

			case "heart1":
				var sp = new SpriteImage(10,10,64,64, 1, false,img10);
				vida[0] = sp;
				break;
			case "heart2":
				var sp = new SpriteImage(84,10,64,64, 1, false,img11);
				vida[1] = sp;
				break;

			case "heart3":
				var sp = new SpriteImage(158,10,64,64, 1, false,img12);
				vida[2] = sp;
				break;
			case aux[aux.length-1].toString():
				var sp = new SpriteImage(200,100,imgH1.width,imgH1.height, 1, false,imgH1);
				spArray[10] = sp;
				break;
		}
		nLoad++;	
		if (nLoad == totLoad)
		{	
			var ev2 = new Event("initend");
			ev2.spArray = spArray;
			ev2.vida=vida;
			ev2.aux=aux;
			ctx.canvas.dispatchEvent(ev2);
		}
	}	
}	

//começa aqui este serve para ver o click e se clicou numa sprite se sim mete o drag dessa mesma a 1
function drag(ev,ctx,spArray,Hamburguer,arrastaa,vida,aux){
var x=em_qual(ev,ctx,spArray);
var i;
var x_=ev.offsetX;
var y_=ev.offsetY;
console.log("auxxxx------->");
console.log(aux);
if(x!=-1){
	spArray[x].drag=0;
	if(spArray[x].img.id=="tomate"){
			var img=new Image();
			img.addEventListener("load", imgLoadedHandler_arrasta);
			var num=x.toString();
			img.id="tomate";
			img.src = "tomate_baixo.png";
	}
	if(spArray[x].img.id=="hamburguer"){
			var img=new Image();
			img.addEventListener("load", imgLoadedHandler_arrasta);
			var num=x.toString();
			img.id="hamburguer";
			img.src = "hamburguer.png";
	}
	if(spArray[x].img.id=="pao_baixo"){
			var img=new Image();
			img.addEventListener("load", imgLoadedHandler_arrasta);
			var num=x.toString();
			img.id="pao_baixo";
			img.src = "pao_0.png";
	}
	if(spArray[x].img.id=="pao_cima"){
			console.log("wtfffffffffff");
			var img=new Image();
			img.addEventListener("load", imgLoadedHandler_arrasta);
			var num=x.toString();
			img.id="pao_cima";
			img.src = "pao_1.png";
	}
	if(spArray[x].img.id=="queijo"){
			var img=new Image();
			img.addEventListener("load", imgLoadedHandler_arrasta);
			var num=x.toString();
			img.id="queijo";
			img.src = "queijo_baixo.png";
	}
	if(spArray[x].img.id=="alface"){
			var img=new Image();
			img.addEventListener("load", imgLoadedHandler_arrasta);
			var num=x.toString();
			img.id="alface";
			img.src = "alface_baixo.png";
	}
	if(spArray[x].img.id=="campainha"){
		/*console.log(">>>>>>>>>>>>>>>>>>>");
		print_teste(Hamburguer);
		console.log("<<<<<<<<<<<<<<<<<");*/
		if(verefica_burguer(Hamburguer,spArray[10])==1){
			aux.splice(aux.length-1,aux.length);
			if(aux.length>0){
			var p=aux[aux.length-1];
			var img=new Image();
			img.addEventListener("load", imgLoadedHandler_arrasta);
			var num=x.toString();
			img.id=p.toString();
			img.src = "Hamburguer_"+aux[aux.length-1].toString()+".PNG";
			Hamburguer.length=0;
			Hamburguer.length=32;
			var cw = ctx.canvas.width;
			var ch = ctx.canvas.height;
			ctx.clearRect(0, 0, cw, ch);
			gera_canvas_basico(ctx);	
			draw(ctx,spArray);
			draw(ctx,arrastaa);
			draw(ctx,Hamburguer);
			draw(ctx,vida);
			limite=425;}
			else{
				window.alert("ganahste ");
			}


		}
		else{
			console.log("niceee");
			vida.splice(vida.length-1,vida.length);
			var cw = ctx.canvas.width;
			var ch = ctx.canvas.height;
			ctx.clearRect(0, 0, cw, ch);
			gera_canvas_basico(ctx);	
			draw(ctx,spArray);
			draw(ctx,arrastaa);
			draw(ctx,Hamburguer);
			draw(ctx,vida);
			if(vida.length==0){
				window.alert("rip");
			}
		}
		

	}
	//haaaaaaaaaaa
	if(spArray[x].img.id=="reset"){
		Hamburguer.length=0;
		Hamburguer.length=32;
		console.log("teste" +Hamburguer[0]);
		var cw = ctx.canvas.width;
		var ch = ctx.canvas.height;
		ctx.clearRect(0, 0, cw, ch);
		gera_canvas_basico(ctx);	
		draw(ctx,spArray);
		draw(ctx,arrastaa);
		draw(ctx,Hamburguer);
		draw(ctx,vida);
		limite=425;


	}
}
//nao foi em nenhum does geradores
var y=em_qual(ev,ctx,arrastaa);

if(y!=-1){
	arrastaa[y].drag=1;
}
function imgLoadedHandler_arrasta(ev)
	{
		var x_arrasta=primeiro(arrastaa);
		var img = ev.target;
		switch(img.id){
			case "tomate":
				var sp = new SpriteImage(x_,y_,250,25, 1, true, img);
				sp.drag=1;
				console.log(x_);
				console.log(y_);
				sp.xIni=x_-sp.x;
				sp.yIni=y_-sp.y;
				arrastaa[x_arrasta] = sp;
				break;
			case "alface":
				var sp = new SpriteImage(x_,y_,250,20, 1, true, img);
				sp.drag=1;
				sp.xIni=x_-sp.x;
				sp.yIni=y_-sp.y;
				arrastaa[x_arrasta] = sp;
				break;

			case "queijo":
				var sp = new SpriteImage(x_,y_,250,10, 1, true, img);
				sp.drag=1;
				sp.xIni=x_-sp.x;
				sp.yIni=y_-sp.y;
				arrastaa[x_arrasta] = sp;
				break;

			case "hamburguer":
				var sp = new SpriteImage(spArray[x].x,spArray[x].y,240,50, 1, true, img);
				sp.drag=1;
				sp.xIni=x_-sp.x;
				sp.yIni=y_-sp.y;
				arrastaa[x_arrasta] = sp;
				break;

			case "pao_cima":
				var sp = new SpriteImage(spArray[x].x,spArray[x].y,250,132, 1, true,img);
				sp.drag=1;
				sp.xIni=x_-sp.x;
				sp.yIni=y_-sp.y;
				arrastaa[x_arrasta] = sp;
				break;

			case "pao_baixo":
				var sp = new SpriteImage(spArray[x].x,spArray[x].y,240,50, 1, true, img);
				sp.drag=1;
				sp.xIni=x_-sp.x;
				sp.yIni=y_-sp.y;
				arrastaa[x_arrasta] = sp;
				break;
			case "1":
				var sp = new SpriteImage(200,100,img.width,img.height, 1, false, img);
				spArray[10] = sp;
				draw(ctx,draw);
				break;
			case "2":
				var sp = new SpriteImage(200,100,img.width,img.height, 1, false, img);
				spArray[10] = sp;
				var cw = ctx.canvas.width;
			var ch = ctx.canvas.height;
			ctx.clearRect(0, 0, cw, ch);
			gera_canvas_basico(ctx);	
			draw(ctx,spArray);
			draw(ctx,arrastaa);
			draw(ctx,Hamburguer);
			draw(ctx,vida);
				break;
			case "3":
				var sp = new SpriteImage(200,100,img.width,img.height, 1, false, img);
				spArray[10] = sp;
				var cw = ctx.canvas.width;
			var ch = ctx.canvas.height;
			ctx.clearRect(0, 0, cw, ch);
			gera_canvas_basico(ctx);	
			draw(ctx,spArray);
			draw(ctx,arrastaa);
			draw(ctx,Hamburguer);
			draw(ctx,vida);
				break;
			case "4":
				var sp = new SpriteImage(200,100,img.width,img.height, 1, false, img);
				spArray[10] = sp;
				var cw = ctx.canvas.width;
			var ch = ctx.canvas.height;
			ctx.clearRect(0, 0, cw, ch);
			gera_canvas_basico(ctx);	
			draw(ctx,spArray);
			draw(ctx,arrastaa);
			draw(ctx,Hamburguer);
			draw(ctx,vida);
				break;
			case "5":
				var sp = new SpriteImage(200,100,img.width,img.height, 1, false, img);
				spArray[10] = sp;
				var cw = ctx.canvas.width;
			var ch = ctx.canvas.height;
			ctx.clearRect(0, 0, cw, ch);
			gera_canvas_basico(ctx);	
			draw(ctx,spArray);
			draw(ctx,arrastaa);
			draw(ctx,Hamburguer);
			draw(ctx,vida);
				break;
			case "6":
				var sp = new SpriteImage(200,100,img.width,img.height, 1, false, img);
				spArray[10] = sp;
				var cw = ctx.canvas.width;
			var ch = ctx.canvas.height;
			ctx.clearRect(0, 0, cw, ch);
			gera_canvas_basico(ctx);	
			draw(ctx,spArray);
			draw(ctx,arrastaa);
			draw(ctx,Hamburguer);
			draw(ctx,vida);
				break;
			case "7":
				var sp = new SpriteImage(200,100,img.width,img.height, 1, false, img);
				spArray[10] = sp;
				var cw = ctx.canvas.width;
			var ch = ctx.canvas.height;
			ctx.clearRect(0, 0, cw, ch);
			gera_canvas_basico(ctx);	
			draw(ctx,spArray);
			draw(ctx,arrastaa);
			draw(ctx,Hamburguer);
			draw(ctx,vida);
				break;
			case "8":
				var sp = new SpriteImage(200,100,img.width,img.height, 1, false, img);
				spArray[10] = sp;
				var cw = ctx.canvas.width;
			var ch = ctx.canvas.height;
			ctx.clearRect(0, 0, cw, ch);
			gera_canvas_basico(ctx);	
			draw(ctx,spArray);
			draw(ctx,arrastaa);
			draw(ctx,Hamburguer);
			draw(ctx,vida);
				break;

		}
		sp.draw(ctx);
	}

}
function primeiro(arrastaa){
	var i;
	for(i=0;i<arrastaa.length;i++){
	if (typeof arrastaa[i] == 'undefined'){

			return i;

		}
	}
	return-1;
}

function reset_array(arrastaa){
	var i;
	for(i=0;i<arrastaa.length;i++){
		arrastaa[i]= 'undefined';
	}
}
//esta funcçao ve o outro click e retira drag a parte do if(x_>275....)esquece e para o meu mini jogog
function retira(ev,ctx,spArray,Hamburguer,arrastaa,vida){
	var x=where(arrastaa);
	var aux;
	if(x!=-1){
		arrastaa[x].drag=0;
		var x_=arrastaa[x].x;
		var y_=arrastaa[x].y;
		if(x_>275&&x_<575&&y_>limite-1.5*arrastaa[x].height&&y_<limite){
			var z;
			arrastaa[x].y=limite-arrastaa[x].height;
			arrastaa[x].x=350;
			limite=limite-arrastaa[x].height;
			aux=arrastaa[x];

			arrastaa.splice(x,x+1);
			z=primeiro(Hamburguer);
			Hamburguer[z]=aux;
			/*print_teste(Hamburguer);*/
			var cw = ctx.canvas.width;
			var ch = ctx.canvas.height;
			ctx.clearRect(0, 0, cw, ch);
			gera_canvas_basico(ctx);
			draw(ctx,vida);	
			draw(ctx,spArray);
			draw(ctx,arrastaa);
			draw(ctx,Hamburguer);

		}
	}
	/*window.cancelAnimationFrame(spArray[where(spArray)].reqID);	*/
}
//este handler e para o mouse more e verifica se alguma srpite esta a ser clicada
function arrasta(ev,ctx,spArray,Hamburguer,arrastaa,vida){
	var z=where(arrastaa);
	if(z!=-1){
		console.log(z);
		var x=ev.offsetX;
		var y=ev.offsetY;
		arrastaa[z].x=x-arrastaa[z].xIni;
		arrastaa[z].y=y-arrastaa[z].yIni;
		var cw = ctx.canvas.width;
		var ch = ctx.canvas.height;
		ctx.clearRect(0, 0, cw, ch);
		gera_canvas_basico(ctx);
		draw(ctx,spArray);
		draw(ctx,vida);
		draw(ctx,Hamburguer);
		/*print_teste(arrastaa);*/
		draw_2(ctx,arrastaa);

	}
}
function verefica_burguer(Ham,sp){
	var id=sp.img.id;
	console.log(id);
	print_teste(Ham);
	if(id=="1"){
		if(tamanho_burguer(Ham)==3){
			console.log("menos mal");
			if(Ham[0].img.id=="pao_baixo" && Ham[1].img.id=="hamburguer"&& Ham[2].img.id=="pao_cima"){
				return 1;
			}
			else{
				return -1;
			}

		}
		else{
			return -1;
		}

	}
	if(id=="2"){
		if(tamanho_burguer(Ham)==4){
			console.log("menos mal");
			if(Ham[0].img.id=="pao_baixo" && Ham[1].img.id=="hamburguer"&& Ham[2].img.id=="queijo"&&Ham[3].img.id=="pao_cima"){
				return 1;
			}
			else{
				return -1;
			}

		}
		else{
			return -1;
		}


	}
	if(id=="3"){
		if(tamanho_burguer(Ham)==5){
			console.log("menos mal");
			if(Ham[0].img.id=="pao_baixo" && Ham[1].img.id=="hamburguer"&& Ham[2].img.id=="tomate"&&Ham[3].img.id=="alface"&&Ham[4].img.id=="pao_cima"){
				return 1;
			}
			else{
				return -1;
			}

		}
		else{
			return -1;
		}

	}
	if(id=="4"){
		if(tamanho_burguer(Ham)==6){
			console.log("menos mal");
			if(Ham[0].img.id=="pao_baixo" && Ham[1].img.id=="hamburguer"&& Ham[2].img.id=="queijo"&&Ham[3].img.id=="hamburguer"&&Ham[4].img.id=="queijo"&&Ham[5].img.id=="pao_cima"){
				return 1;
			}
			else{
				return -1;
			}

		}
		else{
			return -1;
		}

	}
	if(id=="5"){
			if(tamanho_burguer(Ham)==6){
			console.log("menos mal");
			if(Ham[0].img.id=="pao_baixo" && Ham[1].img.id=="hamburguer"&& Ham[2].img.id=="pao_baixo"&&Ham[3].img.id=="hamburguer"&&Ham[4].img.id=="queijo"&&Ham[5].img.id=="pao_cima"){
				return 1;
			}
			else{
				return -1;
			}

		}
		else{
			return -1;
		}


	}
	if(id=="6"){
			if(tamanho_burguer(Ham)==5){
				console.log("menos mal");
			if(Ham[0].img.id=="pao_baixo" && Ham[1].img.id=="tomate"&& Ham[2].img.id=="hamburguer"&&Ham[3].img.id=="queijo"&&Ham[4].img.id=="pao_cima"){
				return 1;
			}
			else{
				return -1;
			}

		}
		else{
			return -1;
		}

	}
	if(id=="7"){
			if(tamanho_burguer(Ham)==6){
				console.log("menos mal");
			if(Ham[0].img.id=="pao_baixo" && Ham[1].img.id=="hamburguer"&& Ham[2].img.id=="tomate"&&Ham[3].img.id=="hamburguer"&&Ham[4].img.id=="tomate"&&Ham[5].img.id=="pao_cima"){
				return 1;
			}
			else{
				return -1;
			}

		}
		else{
			return -1;
		}

	}
	if(id=="8"){
		if(tamanho_burguer(Ham)==9){
			console.log("menos mal");
			if(Ham[0].img.id=="pao_baixo" && Ham[1].img.id=="hamburguer"&& Ham[2].img.id=="tomate"&&Ham[3].img.id=="alface"&&Ham[4].img.id=="pao_baixo"&&Ham[5].img.id=="hamburguer"&&Ham[6].img.id=="tomate"&&Ham[7].img.id=="alface"&&Ham[8].img.id=="pao_cima"){
				return 1;
			}
			else{
				return -1;
			}

		}
		else{
			return -1;
		}


	}
	console.log("Nao me fodas");
	/*console.log(tamanho_burguer(Ham));
	if(tamanho_burguer(Ham)==3){
	if(Ham[0].img.id=="pao_baixo" && Ham[1].img.id=="hamburguer"&& Ham[2].img.id=="pao_cima"){

		return 1;
	}
}
	return 0;*/
}
function tamanho_burguer(Ham){
	var i;
	var x=0;
	for(i=0;i<Ham.length;i++){
	if (typeof Ham[i] !== 'undefined'){
			x=x+1;
		}
	}
	return x;

}

//desenhar sprites
function draw(ctx, spArray)
{
	var dim = spArray.length;

	for (let i = 0; i < dim; i++)
	{
		if((typeof spArray[i] !== 'undefined')){
		spArray[i].draw(ctx);
	}
	}
}
function draw_2(ctx,arrasta)
{
	var dim = arrasta.length;

	for (let i = 0; i < dim; i++)
	{
	if((typeof arrasta[i] !== 'undefined')){
		arrasta[i].draw(ctx);
	}
	}
}
//qual a spite que foi clicada
function em_qual(ev,ctx,spArray){
	var i;
	for(i=spArray.length;i>=0;i--){
		if((typeof spArray[i] !== 'undefined')){
		if(spArray[i].clickedBoundingBox(ev)==true){
			var mx = ev.offsetX;
        	var my = ev.offsetY;
        	var x=mx-spArray[i].x;
       		var y=my-spArray[i].y;
			spArray[i].xIni=x;
			spArray[i].yIni=y;
			return i;

		}
		}	
	}
return -1;
}
//sprite que tem drag a 1
function print_teste(spArray){
	var i;
	console.log("<<<<<<<<<<<<<<<<<<<"+spArray.length);
	for(i=0;i<spArray.length;i++){
		console.log(spArray[i]);
		if((typeof spArray[i] !== 'undefined')){
			console.log(spArray[i]);
			console.log(spArray[i].img.id);
		}	
	}
}


function where(spArray){
	var i;
	for(i=0;i<spArray.length;i++){
		if((typeof spArray[i] !== 'undefined')){
		if(spArray[i].drag==1){
			return i;

		}
		}	
	}
return -1;

}
//apagar sprites
function clear(ctx, spArray)
{
	var dim = spArray.length;

	for (let i = 0; i < dim; i++)
	{
		spArray[i].clear(ctx);
	}
}
function animLoop(ctx, spArray)
{	
	var al = function(time)
	{
		animLoop(ctx, spArray);
	}
	var reqID = window.requestAnimationFrame(al);
	spArray[where(spArray)].reqID=reqID;
	render(ctx, spArray, reqID);
}
function render(ctx, spArray, reqID, dt)
{
	var cw = ctx.canvas.width;
	var ch = ctx.canvas.height;

	//apagar canvas
	ctx.clearRect(0, 0, cw, ch);
	draw(ctx,spArray);
}

//-------------------------------------------------------------
//--- controlo da animação: coração da aplicação!!!
//------------------------------------------------------


//-------------------------------------------------------------
//--- interacção com o rato
//------------------------------------------------------------
