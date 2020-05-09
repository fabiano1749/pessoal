class Aluno {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    apresentar() {
        return `Olá eu sou ${this.nome} e tenho ${this.idade} anos.`;
    }
}
function criaAlunos() {
    let alunos = [];
    alunos.push(new Aluno('Bruce', 40));
    alunos.push(new Aluno('Daiha', 31));
    alunos.push(new Aluno('Eduardo', 16));
    alunos.push(new Aluno('Nilza', 58));
    alunos.push(new Aluno('Ana', 61));
    return alunos;
}
let alunos = criaAlunos();
alunos.map(a => a.idade += 10);
for (let aluno of alunos) {
    console.log(aluno.apresentar());
}
