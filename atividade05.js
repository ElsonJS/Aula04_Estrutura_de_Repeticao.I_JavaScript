<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript</title>
       <p><b>>>>TABUADA EM JAVASCRIPT<<<</b></p>
       <b>Digite um numero: </b><input id="numero" type="number"><br><br>
       <button onclick=" tabuada()">Exibir</button> 
  </head>
  <body>
    <script>
       /*Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre
       1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme
       o exemplo abaixo:
       Tabuada de 5:
        5 X 1 = 5
        5 X 2 = 10
        ...
        5 X 10 = 50 */
       function tabuada(){
         var n1 =  parseInt(document.getElementById("numero").value);
         var tabuada=" ";

         for(y=1; y<=10 ; y++)
            document.write("<b>"+ n1+"x "+y+" = " + n1*y + "</b><br>");         
       }
    </script>
  </body>
</html>
