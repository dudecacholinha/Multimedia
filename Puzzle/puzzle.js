"use strict";

(function()
{
	window.addEventListener("load", main);
}());
function main()
{
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var spArray;  //sprite array

	canvas.addEventListener("initend", initEndHandler);
	init(ctx);  //carregar todos os componentes

	//funções locais para gestão de eventos
	function initEndHandler(ev)
	{
		//instalar listeners do rato	
		ctx.canvas.addEventListener("click", cch);
		document.getElementById("up").addEventListener("click", auxx);
		document.getElementById("down").addEventListener("click", auxx2);
		document.getElementById("right").addEventListener("click", auxx3);
		document.getElementById("left").addEventListener("click", auxx4);
		spArray = ev.spArray;
		//iniciar a animação
		draw(ctx, spArray);
		//nao sei onde por isto
	}
	var cch = function(ev)
	{
		canvasClickHandler(ev, ctx, spArray);	
	}
		var auxx = function(ev)
	{
		up(ev, ctx, spArray);	
	}
		var auxx2 = function(ev)
	{
		down(ev, ctx, spArray);	
	}
		var auxx3 = function(ev)
	{
		right(ev, ctx, spArray);	
	}
		var auxx4 = function(ev)
	{
		left(ev, ctx, spArray);	
	}

}


//init: carregamento de componentes
function init(ctx)
{
	var nLoad = 0;
	var totLoad = 9;
	var spArray = new Array(totLoad);
	var auxArray=new Array(totLoad);
	var img;

	//estilos de texto
	ctx.fillStyle = "#993333";
	ctx.font = "12px helvetica";	
	ctx.textBaseline = "bottom"; 
	ctx.textAlign = "center";  
	//carregar imagens e criar sprites
	var img0 = new Image(); 
	img0.addEventListener("load", imgLoadedHandler);
	img0.id="0";
	img0.src = "Image0.jpg";
	auxArray[0]=img0;

	var img1 = new Image(); 

	img1.addEventListener("load", imgLoadedHandler);
	img1.id="1";
	img1.src = "Image1.jpg";
	auxArray[1]=img1;

	var img2 = new Image(); 
	
	img2.addEventListener("load", imgLoadedHandler);
	img2.id="2";
	img2.src = "Image2.jpg"; 
	auxArray[2]=img2; //dá ordem de carregamento da imagem

	var img3 = new Image();   //dá ordem de carregamento da imagem
	img3.addEventListener("load", imgLoadedHandler);
	img3.id="3";
	img3.src = "Image3.jpg";
	auxArray[3]=img3;

	var img4 = new Image(); 
	img4.addEventListener("load", imgLoadedHandler);
	img4.id="4";
	img4.src = "Image4.jpg"; 
	auxArray[4]=img4;

	var img5 = new Image(); 
	img5.addEventListener("load", imgLoadedHandler);
	img5.id="5";
	img5.src = "Image5.jpg"; 
	auxArray[5]=img5;

	var img6 = new Image(); 
	img6.addEventListener("load", imgLoadedHandler);
	img6.id="6";
	img6.src = "Image6.jpg"; 
	auxArray[6]=img6;

	var img7 = new Image(); 
	img7.addEventListener("load", imgLoadedHandler);
	img7.id="7";
	img7.src = "Image7.jpg"; 
	auxArray[7]=img7;

	var img8 = new Image();
	img8.addEventListener("load", imgLoadedHandler);
	img8.id="8";
	img8.src = "Image8.jpg"; 
	auxArray[8]=img8;
	auxArray=geraArray(auxArray);
	var ss;
	for(ss=0;ss<auxArray.length;ss++){
		console.log(auxArray[ss].src);
	}
	function imgLoadedHandler(ev)
	{
		var img = ev.target;
		console.log(img.id);
		switch(img.id){
			case "0":
				var sp = new SpriteImage(0, 0,ctx.canvas.width/3,ctx.canvas.height/3, 1, true, auxArray[0]);
				spArray[0] = sp;
				break;

			case "1":
				var sp = new SpriteImage(ctx.canvas.width/3, 0,ctx.canvas.width/3,ctx.canvas.height/3, 1, true, auxArray[1]);
				spArray[1] = sp;
				break;
			
			case "2":
				var sp = new SpriteImage(2*ctx.canvas.width/3,0,ctx.canvas.width/3,ctx.canvas.height/3, 1, true, auxArray[2]);
				spArray[2]= sp;
				break;
			case "3":
				var sp = new SpriteImage(0,ctx.canvas.height/3,ctx.canvas.width/3,ctx.canvas.height/3, 1, true, auxArray[3]);
				 spArray[3]= sp;
				break;
			case "4":
				var sp = new SpriteImage(ctx.canvas.width/3,ctx.canvas.height/3,ctx.canvas.width/3,ctx.canvas.height/3, 1, true, auxArray[4]);
				spArray[4] = sp;
				break;
			case "5":
				var sp = new SpriteImage(2*ctx.canvas.width/3,ctx.canvas.height/3,ctx.canvas.width/3,ctx.canvas.height/3, 1, true, auxArray[5]);
				spArray[5]= sp;
				break;
			case "6":
				var sp = new SpriteImage(0,2*ctx.canvas.height/3,ctx.canvas.width/3,ctx.canvas.height/3, 1, true, auxArray[6]);
				spArray[6] = sp;
				break;
			case "7":
				var sp = new SpriteImage(ctx.canvas.width/3,2*ctx.canvas.height/3,ctx.canvas.width/3,ctx.canvas.height/3, 1, true, auxArray[7]);
				spArray[7]= sp;
				break;
			case "8":
				var sp = new SpriteImage(2*ctx.canvas.width/3,2*ctx.canvas.height/3,ctx.canvas.width/3,ctx.canvas.height/3, 1, true, auxArray[8]);
				spArray[8] = sp;
				break;

		}

		nLoad++;		
		if (nLoad == totLoad)
		{
			var ev2 = new Event("initend");
			ev2.spArray = spArray;
			ctx.canvas.dispatchEvent(ev2);
		}
	}	
}




//desenhar sprites
function draw(ctx, spArray)
{
	var dim = spArray.length;

	for (let i = 0; i < dim; i++)
	{
		spArray[i].draw(ctx);
	}
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


//-------------------------------------------------------------
//--- controlo da animação: coração da aplicação!!!
//------------------------------------------------------


//-------------------------------------------------------------
//--- interacção com o rato
//-------------------------------------------------------------
function canvasClickHandler(ev, ctx, spArray)
{
	console.log(intercettaa(ev,ctx,spArray));

}
	


function up(ev,ctx,spArray){
	var selected=puzzle_selecionado(ev,ctx,spArray);
	if(selected!=-1){
		troca(ev,ctx,spArray,selected,selected-3);
	}
}
function right(ev,ctx,spArray){
	var selected=puzzle_selecionado(ev,ctx,spArray);
	if(selected!=-1){
		troca(ev,ctx,spArray,selected,selected+1);
	}
}
function left(ev,ctx,spArray){
	var selected=puzzle_selecionado(ev,ctx,spArray);
	if(selected!=-1){
		troca(ev,ctx,spArray,selected,selected-1);
	}
}
function down(ev,ctx,spArray){
	var selected=puzzle_selecionado(ev,ctx,spArray);
	if(selected!=-1){

		troca(ev,ctx,spArray,selected,selected+3);
	}

}
function intercettaa(ev,ctx,spArray){
	var i;
	var up=document.getElementById("up");
	var down=document.getElementById("down");
	var right=document.getElementById("right");
	var left=document.getElementById("left");
	for(i=0;i<spArray.length;i++){
		if(spArray[i].clickedBoundingBox(ev)==true){
			if(spArray[i].border==0){
			console.log("border a 0");
			spArray[i].desenha_border(ctx);
			reset_border(ev,ctx,spArray,i);
			if(i==0){
				reset(down,up,right,left);
				up.children[0].style.opacity=0.3;
				up.disabled=true;
				left.children[0].style.opacity=0.3;
				left.disabled=true;
			}
			if(i==1){
				reset(down,up,right,left);
				up.children[0].style.opacity=0.3;
				up.disabled=true;
			}
			if(i==2){
				reset(down,up,right,left);
				up.children[0].style.opacity=0.3;
				up.disabled=true;
				right.children[0].style.opacity=0.3;
				right.disabled=true;
			}
			if(i==3){
				reset(down,up,right,left);
				left.children[0].style.opacity=0.3;
				left.disabled=true;
			}
			if(i==5){
				reset(down,up,right,left);
				right.children[0].style.opacity=0.3;
				right.disabled=true;
			}
			if(i==6){
				reset(down,up,right,left);
				left.children[0].style.opacity=0.3;
				left.disabled=true;
				down.children[0].style.opacity=0.3;
				down.disabled=true;
			}
			if(i==7){
				reset(down,up,right,left);
				down.children[0].style.opacity=0.3;
				down.disabled=true;

			}

			if(i==8){
				reset(down,up,right,left);
				down.children[0].style.opacity=0.3;
				down.disabled=true;
				right.children[0].style.opacity=0.3;
				right.disabled=true;
				
			}	

			}
			else{
				console.log("border a 1");
				reset(down,up,right,left);
				spArray[i].apaga_border(ctx);
			}
			return i;
		}
	}
	return -1;
}

function reset(down,up,right,left){
	up.disabled=false;
	down.disabled=false;
	right.disabled=false;
	left.disabled=false;
	up.children[0].style.opacity=1;
	down.children[0].style.opacity=1;
	left.children[0].style.opacity=1;
	right.children[0].style.opacity=1;
}
function troca(ev,ctx,spArray,x,y){
	var up=document.getElementById("up");
	var down=document.getElementById("down");
	var right=document.getElementById("right");
	var left=document.getElementById("left");
	console.log("Antes posicao "+x+spArray[x].img.id);
	console.log("Antes posicao "+y+spArray[y].img.id);
	var varx=spArray[y].x;
	var vary=spArray[y].y;
	var varw=spArray[y].width;
	var varh=spArray[y].height;
	var aux;
	spArray[x].clear(ctx);
	spArray[y].clear(ctx);
	spArray[y].desenha(spArray[x].x,spArray[x].width,spArray[x].y,spArray[x].height,ctx);
	spArray[x].desenha(varx,varw,vary,varh,ctx);
	console.log
	aux=spArray[x];
	spArray[x]=spArray[y];
	spArray[y]=aux;
	reset_border(ev,ctx,spArray,-1);
	reset(up,down,right,left);
	if(verifica(ev,ctx,spArray)==true){
		console.log(document.getElementById('cenas').src);
		document.getElementById('cenas').play();
		window.alert("wowo");
	}

}
function reset_border(ev,ctx,spArray,x){
	var i;
	for(i=0;i<spArray.length;i++){
		if(i!=x){
			spArray[i].apaga_border(ctx);
		}
}
}
function puzzle_selecionado(ev,ctx,spArray){
	var i;
	for(i=0;i<spArray.length;i++){
		if(spArray[i].border==1){
			return i;
		}
	}
	return -1;
}
function verifica(ev,ctx,spArray){
	if(spArray[0].img.id=="0"&&spArray[1].img.id=="1"&&spArray[2].img.id=="2"&&spArray[3].img.id=="3"&&spArray[4].img.id=="4"&&spArray[5].img.id=="5"&&spArray[6].img.id=="6"&&spArray[7].img.id=="7"&&spArray[8].img.id=="8"){
		return true;
	}
	return false;
}
function geraArray(arrayAux){
	var totLoad = 9;
	var i;
	var spArray = arrayAux.slice();
	console.log("antes de ordenar");
	printArray(arrayAux);
	var aux=new Array(9);
	for(i=0;i<spArray.length;i++){
		do{
		var x= Math.floor(Math.random() * (8 - 0 + 1)) + 0;
		}while(presentenoArray(aux,i,x)==true);
		aux[i]=x;
		console.log(x);
		arrayAux[i]=spArray[x];
	}
	printArray(spArray);
	console.log("depos de ordenar");
	printArray(arrayAux);
	return arrayAux;

}
function presentenoArray(array,x,y){
	var i;
	for(i=0;i<x;i++){
		if(y==array[i]){
			return true;
		}
	}
	return false;
}
function printArray(array){
	var i;
	for(i=0;i<array.length;i++){
		console.log(array[i]);
	}
}