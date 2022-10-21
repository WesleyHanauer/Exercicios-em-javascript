function Maiores(){

    var idade1 = document.getElementById("idade1").value;
    var idade2 = document.getElementById("idade2").value;
    var idade3 = document.getElementById("idade3").value;
    var idade4 = document.getElementById("idade4").value;
    var idade5 = document.getElementById("idade5").value;
    var idade6 = document.getElementById("idade6").value;
    var idade7 = document.getElementById("idade7").value;
    var idade8 = document.getElementById("idade8").value;
    var idade9 = document.getElementById("idade9").value;
    var idade10 = document.getElementById("idade10").value;
    var idades = [idade1, idade2, idade3, idade4, idade5, idade6, idade7, idade8, idade9, idade10];
    var maiores = 0;
    var menores = 0;
    for(i=0;i<10;i++){
        if(idades[i]>=18){
            maiores++;
        }
    }
    menores = 10 - maiores;
    alert(maiores+" pessoas são maiores de idade e "+menores+" pessoas são menores de idade.");
}