var calculadora =
{
	construct:function(){
		var num1="";
		var num2="";
		var resultado=0;
		var estado=1;
		var signo1="+";
		var signo2="+";
		var pnum1="0";
		var pnum2="0";
		var operacion="";
		var pantalla=document.getElementById("display");

		var prender=document.getElementById("on");

		var signo=document.getElementById("sign");
		var cero = document.getElementById("0");
		var uno = document.getElementById("1");
		var dos = document.getElementById("2");
		var tres = document.getElementById("3");
		var cuatro = document.getElementById("4");
		var cinco = document.getElementById("5");
		var seis = document.getElementById("6");
		var siete = document.getElementById("7");
		var ocho = document.getElementById("8");
		var nueve = document.getElementById("9");
		var punto= document.getElementById("punto");

		var suma= document.getElementById("mas");
		var resta=document.getElementById("menos");
		var multiplicacion=document.getElementById("por");
		var division=document.getElementById("dividido");
		var raiz= document.getElementById("raiz");

		var igual=document.getElementById("igual");

		var array=[cero,uno , dos , tres , cuatro, cinco , seis ,siete, ocho, nueve, punto, raiz , suma , resta, division, multiplicacion, igual, prender, signo];

		array.forEach(function(elem) {
		    elem.addEventListener("mousedown", function() {
		        elem.setAttribute("style","transform:scale(0.85,0.85)")
		    });
		    elem.addEventListener("mouseout", function() {
		        elem.setAttribute("style","transform:scale(1,1)")
		    });
		    
		});
		suma.addEventListener("click",function(){
			pantalla.innerHTML="";
			estado=2;
			operacion="+"
		});
		resta.addEventListener("click",function(){
			pantalla.innerHTML="";
			estado=2;
			operacion="-";
		});
		multiplicacion.addEventListener("click",function(){
			pantalla.innerHTML="";
			estado=2;
			operacion="*";
		});
		division.addEventListener("click",function(){
			pantalla.innerHTML="";
			estado=2;
			operacion="/";
		});
		igual.addEventListener("click",function(){
			if (estado==2) 
			{
				pantalla.innerHTML="";
				resultado=0;
				switch(operacion)
				{
					case "+": resultado=parseFloat(num1)+parseFloat(num2);
					if (resultado.toString().length>8) {resultado = resultado.toString().substring(0,8);}
					pantalla.innerHTML=resultado;
					break;
					case "-":resultado=parseFloat(num1)-parseFloat(num2);
					if (resultado.toString().length>8) {resultado = resultado.toString().substring(0,8);}
					pantalla.innerHTML=resultado;
					break;
					case "*":resultado=parseFloat(num1)*parseFloat(num2);
					if (resultado.toString().length>8) {resultado = resultado.toString().substring(0,8);}
					pantalla.innerHTML=resultado;
					break;
					case "/":if (parseFloat(num2)!=0) {resultado=parseFloat(num1)/parseFloat(num2);
						if (resultado.toString().length>8) {resultado = resultado.toString().substring(0,8);}
						pantalla.innerHTML=resultado;
					}
				}
				num1="";
				num2="";
				signo1="+";
				signo2="+";
				pnum1="0";
				pnum2="0";
			}
		});
		punto.addEventListener("click",function(){
			if (estado==1) 
			{
				if (pnum1=="0" && num1!="") {num1=num1+"."; pnum1="1";}
			}
			else
			{
				if (pnum2=="0" && num2!="") {num2=num2+"."; pnum2="1";}
			}
		});
		for(var i=0;i<array.length-9;i++)
		{
			array[i].addEventListener("click",function(){
				if (estado==1) {
	        		if (num1.length<8) {
	  					if (array.indexOf(this)==0) 
	  					{
	  						if (num1!="") {num1=num1+array.indexOf(this);
	  						pantalla.innerHTML=num1;}
	  						else
	  						{
	  							if (parseFloat(num1)!=0) {num1=num1+array.indexOf(this);
	  						pantalla.innerHTML=num1;}
	  						}
	  					}
	        			else
	        			{
	        				num1=num1+array.indexOf(this);
	        				pantalla.innerHTML=num1;
	        			}
	        			
	        		}
	        		else
	        		{
	        			alert("La pantalla solo soporta 8 Caracteres")
	        		}
	        	}
	        	else{
	        		if (num2.length<8) 
	        		{
	        			if (array.indexOf(this)==0) 
	  					{
	  						if (num2!="") {num2=num2+array.indexOf(this);
	  						pantalla.innerHTML=num2;}
	  						else
	  						{
	  							if (parseFloat(num2)!=0) {num2=num2+array.indexOf(this);
	  						pantalla.innerHTML=num2;}
	  						}
	  					}
	        			else
	        			{
	        				num2=num2+array.indexOf(this);
	        				pantalla.innerHTML=num2;
	        			}
	        		}
	        		else
	        		{
	        			alert("La pantalla solo soporta 8 Caracteres")
	        		}
	        		
	        	}
			});
		}
		prender.addEventListener("click",function(){
			num1="";
			num2="";
			signo1="+";
			signo2="+";
			pantalla.innerHTML="0";
			pnum1="0";
			pnum2="0";
			operacion="";
			resultado=0;
			estado=1;
		});
		signo.addEventListener("click",function(){
			if (estado==1) 
			{
				if (signo1=="+") 
				{
					if(num1!="")
					{
						signo1="-";
						var temp=num1;
						num1="-";
						num1=num1+temp;
						pantalla.innerHTML=num1;
					}

				}
				else
				{
					if (num1!="") 
					{
						signo1="+";
						var temp=num1.substring(1,num1.length);
						num1="";
						num1=temp;
						pantalla.innerHTML=num1;
					}
				}
			}
			else
			{
				if (signo2=="+") 
				{
					
					if(num2!="")
					{
						signo2="-";
						var temp=num2;
						num2="-";
						num2=num2+temp;
						pantalla.innerHTML=num2;
					}

				}
				else
				{
					
					if (num2!="") 
					{
						signo2="+";
						var temp=num2.substring(1,num1.length);
						num2="";
						num2=temp;
						pantalla.innerHTML=num2;
					}
				}
			}
		});
        
	}
	
};
	
calculadora.construct();
