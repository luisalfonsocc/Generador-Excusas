//Generador de Excusas

function GeneradorExcusa () {
    let Pronombre = ["mi", "su"];
    let Sujeto = ["perro", "hermano", "vecino", "leopardo"];
    let Accion = ["lanzo la", "robo mi", "se comio mi"];
    let Donde = ["en mi casa", "en mi escuela", "en el bus"];
    let Objeto = ["tarea", "bicicleta", "laptop"];
  
    let PronombreIndex = Math.floor(Math.random() * Pronombre.length); 
    let SujetoIndex = Math.floor(Math.random() * Sujeto.length);
    let AccionIndex = Math.floor(Math.random() * Accion.length);
    let DondeIndex = Math.floor(Math.random() * Objeto.length);
    let ObjetoIndex = Math.floor(Math.random() * Donde.length);

  
    return (
      Pronombre[PronombreIndex] +
      " " +
      Sujeto[SujetoIndex] +
      " " +
      Accion[AccionIndex] +
      " " +
      Objeto[ObjetoIndex] +
      " " +
      Donde[DondeIndex]
    );
  };

console.log("No me los vas a Creer Pero:");
console.log (GeneradorExcusa());

