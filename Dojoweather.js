var temp = document.querySelector(".temp")
var cb = document.querySelector(".cookiebox")
function chooseWeather(element){
    alert("you picked " + element.value);
    temp.innerText = temp*(9/5)+32
    temp = element.value ;

}

function weatherAlert(element){
    alert("Weather is 20")
}
function removeCookie(element){
    cb.remove(element);
}