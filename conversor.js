function convertirCelsius() {
        //  alert ("document.getElementById("area").value")
        //var area=("document.getElementById("area").value")
        // var area
            var gradosFarenheit = parseInt(document.getElementById("farenheit").value);
            var resultado=document.getElementById("celsius");
            var celsius= (gradosFarenheit- 32) * (5/9);
            resultado.value = celsius;
        }
        function convertirFarenheit() {
            var gradosCelsius = parseInt(document.getElementById("celsius").value);
            var resultadoCelsius = document.getElementById("farenheit");
            var farenheit= (gradosCelsius * (9/5)) + 32;
            resultadoCelsius.value=farenheit;
        }
        //<script type="text/javascript" src=="conversor.js">
