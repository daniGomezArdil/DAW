/* Calcular els primers 20 números de la sèrie de Fibonacci, tenint present que
a 1 =1, a 2 =1 y que a n =a n-1 +a n-2 . */

<script type ="text/javascript">

			var num1 = 0;
			var num2 = 1;
			var num3;
			var numFinal;
			
			document.write(num1 + "");
			document.write(num2 + "");
			
			for(var i = 3; i <= numFinal; i++){
			
					num3 = num1 + num2;
					num1 = num2;
					num2 = num3;
					document.write(num3 + "");
			}



</script>