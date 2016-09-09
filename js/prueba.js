window.addEventListener("load", function() {
    var boton = document.getElementById("calcular");
    boton.addEventListener("click", function() {
        var nombre = document.getElementById("nombre").value;
        var edad = parseFloat(document.getElementById("edad").value);
        var sexo = document.getElementById("sexo").value;
        
        var persona1 = new Persona(nombre,edad, sexo);
        var resultado = document.getElementById("resultado").innerHTML = persona1.diHola();;


    });
        function Persona(nombre, edad, sexo) {
            this.nombre = nombre;
            this.edad = edad;
            this.sexo = sexo;
            this.mayorDeEdad = (this.edad >= 18);
            this.diHola = function() {
                var texto;
                if(this.mayorDeEdad){
                    texto = "hola, mi nombre es " + this.nombre + " tengo " + this.edad + ", mi sexo " + this.sexo + " y soy mayor de edad.";
                }
                else{
                    texto = "hola, mi nombre es " + this.nombre + " tengo " + this.edad + ", mi sexo " + this.sexo + " y soy menor de edad.";
                }
                    return texto;
            }
        }
        
});























