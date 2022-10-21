function Inverter(){
    var nome1 = document.getElementById("nome1").value;
    var nome2 = document.getElementById("nome2").value;
    var nome3 = document.getElementById("nome3").value;
    var nome4 = document.getElementById("nome4").value;
    var nome5 = document.getElementById("nome5").value;
    var nome6 = document.getElementById("nome6").value;
    var nome7 = document.getElementById("nome7").value;
    var nome8 = document.getElementById("nome8").value;
    var nome9 = document.getElementById("nome9").value;
    var nome10 = document.getElementById("nome10").value;
    var nomes = [nome1, nome2, nome3, nome4, nome5, nome6, nome7, nome8, nome9, nome10];
    var nomesInv = nomes.reverse();
    alert(nomesInv);
}