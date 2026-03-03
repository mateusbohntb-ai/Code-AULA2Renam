

const footer=document.getElementById("footer")
//footer.style.color = "red"

const novotitulo =document.createElement("h2")
novotitulo.textContent ="Um novo titulo "
console.log(novotitulo)
footer.appendChild(novotitulo)
//console.log(novotitulo)


// const header= document.getElementById("exemplo")
// header.appendChild(novotitulo)

//const header= document.getElementById("exemplo")
//header.appendChild(novotitulo)
//header.addEventListener("mouseover", () => {
    //alert("batata")
//})
const header= document.getElementById("exemplo")
header.appendChild(novotitulo)
header.addEventListener("click", () => {
    alert("batata")
})