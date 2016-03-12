/* Calcular els primers 20 números de la sèrie de Fibonacci, tenint present que
a 1 =1, a 2 =1 y que a n =a n-1 +a n-2 . */



			var anterior = 1;
			var anteriorAnterior = 1;
			var fibonacci;
			var total=10000;
			
			document.write("1)"+ anterior + "<br>");
			document.write("2)"+ anteriorAnterior + "<br>");
			
			for(var i = 3; i <= total; i++){
					fibonacci = anterior + anteriorAnterior;
					anteriorAnterior = anterior;
					anterior = fibonacci;
					document.write(i+")"+ fibonacci + "<br>");
			}




