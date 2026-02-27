
///entrada começa com const onde é preciso adicionar uma variavel.
const peso1= Number(prompt("qual peso da primeira pessoa ? :):"))
const peso2 = Number(prompt("Qual peso da segunda pessoa? :):"))
const peso3 = Number(prompt("Qual peso da terceira pessoa ? :):"))
const peso4  = Number(prompt("Qual peso da quarta pessoa ? :):"))
const peso5  = Number(prompt("Qual peso da quinta pessoa? :):"))

//processamento
const resultado=((peso1+peso2+peso3+peso4+peso5)/5) ///para dividir no final do numero de pessoas /5) .
// saida
alert("a média dos resultados é " +resultado)
//template string outra forma de fazer:  alert(`a média dos resultados é"${resultado}`)