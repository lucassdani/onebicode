const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"]
console.log(arr)

// adicionar elementos
//push: Adiciona um elemento no final do array e devolve o novo tamanho do array
let tamanho = arr.push('boromir')
console.log(arr)
console.log(tamanho)


// unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array
tamanho = arr.unshift('teste')
console.log(arr)
console.log(tamanho)


// remover elementos
// pop: Remove um elemento no final do array e devolve o elemento removido
let ultimoElemento = arr.pop()
console.log(arr)
console.log(ultimoElemento)

//shift: Remove um elemento no começo do array e devolve o elemento removido
ultimoElemento = arr.shift()
console.log(arr)
console.log(ultimoElemento)

//pesquisar por um elemento
// includes: Verifica se um certo elemento está presente no array 
const inclui = arr.includes("Gandalf")
console.log(inclui)

// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array
const indice = arr.indexOf("Gandalf")
console.log(indice)

// cortar e concatenar
// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original
const hobbit = arr.slice(0, 4)
// Também pode ser usado com números negativos referenciar o final do array
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbit)
console.log(outros)

// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
const sociedade =hobbit.concat(outros, 'boromir')
console.log(sociedade)

// substituição dos elementos
// splice: Permite remover elementos em qualquer posição do array e substituir por novos
const elementosRemovidos = sociedade.splice(indice, 1, 'gadalf, o cinzento')
console.log(sociedade)
console.log(elementosRemovidos)

// interar sobre os elementos
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(`${elemento} se encontra na posição ${indice}`)
}