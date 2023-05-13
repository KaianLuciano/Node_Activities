const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (menor, atual) => {
    return menor.salario < atual.salario ? menor : atual;
}
axios.get(url).then(response => {
    const funcionario = response.data;

    const func = funcionario
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})