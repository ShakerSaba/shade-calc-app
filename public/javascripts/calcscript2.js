function calculate() {
    var price = parseFloat(document.getElementById("price").innerHTML);
    var meas = ""
    var chx = document.getElementsByTagName('input');
    for (var i=0; i<chx.length; i++) {
        if (chx[i].type == 'radio' && chx[i].checked) {
            meas = chx[i].value;
        }
    }
    switch(meas){
        case "mm": price = price * 0.01; break;
        case "in": price = price / 0.16; break;
        default: break;
    }

    var final = document.getElementById("final");
    var x = parseFloat(document.getElementById("width").value)/100;
    var y = parseFloat(document.getElementById("height").value)/100;
    
    var area = x * y;
    price = price * area
    if(document.getElementById("double").checked)
    price *= 2

    final.innerHTML = "Total Price: $" + price.toFixed(2);
}