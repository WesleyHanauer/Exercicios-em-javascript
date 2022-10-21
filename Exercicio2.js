function Maior(){
    var val1 = document.getElementById("val1").value;
    var val2 = document.getElementById("val2").value;
    var val3 = document.getElementById("val3").value;
    var val4 = document.getElementById("val4").value;
    var val5 = document.getElementById("val5").value;
    valores = [val1, val2, val3, val4, val5];
    var valor = Math.max(...valores);
    alert("O maior valor é "+valor);
}