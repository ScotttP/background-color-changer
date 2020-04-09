const changeColor = document.querySelector('#changeColor');
changeColor.addEventListener('click', () => {
    var bgColor = document.body.style.backgroundColor = randomColor();
    document.getElementById('rgbDisplay').innerHTML = bgColor;
})

function randomColor () {
    var x = Math.floor(Math.random() * 256); 
    var y = Math.floor(Math.random() * 256); 
    var z = Math.floor(Math.random() * 256); 
    var color= "rgb(" + x + "," + y + "," + z + ")"
    return color;
}
