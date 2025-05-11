function bmi(){
    var weight = document.getElementById("weight").value
    var height = document.getElementById("height").value
    height = height / 100
    var result = weight / (height * height)
    document.getElementById("result").innerHTML = result
}