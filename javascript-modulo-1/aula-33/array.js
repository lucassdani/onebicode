const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// adicionar elementos
// push
let tamanho = arr.push('boromir')
console.log(arr)
console.log(tamanho)

//unshift
tamanho = arr.unshift('teste')
console.log(arr)
console.log(tamanho)


// remover elementos
// pop
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

// shift
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

//pesquisar por um elemento
// includes
const inclui = arr.includes("Gandalf")
console.log(inclui)

// indexof
const indice = arr.indexOf("Gandalf")
console.log(indice)

// cortar e concatenar
// slice
const hobbit = arr.slice(0, 4)
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbit)
console.log(outros)