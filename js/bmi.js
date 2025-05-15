function bmi(){
    var weight = document.getElementById("weight").value
    var height = document.getElementById("height").value

    if(weight === "" || height === ""){
        document.getElementById("result").innerHTML = "Please enter values."
    } else {
        height = height / 100
        var result = weight / (height * height)
        document.getElementById("result").innerHTML = result.toFixed(2);
    }
}