function calculate() {
    var price = parseFloat(document.getElementById("price").innerHTML);
    var final = document.getElementById("final");
    var x = parseFloat(document.getElementById("width").value)/100;
    var y = parseFloat(document.getElementById("height").value)/100;
    
    var area = x * y;
    price = price * area
    if(document.getElementById("double").checked)
    price *= 2

    final.innerHTML = "Total Price: $" + price.toFixed(2);
}