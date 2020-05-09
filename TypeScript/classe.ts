class Aluno{
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(){
        return `Olá eu sou ${this.nome} e tenho ${this.idade} anos.`;
    }
}

function criaAlunos(): Aluno[]{
    let alunos: Aluno[] = [];
    alunos.push(new Aluno('Bruce', 40))
    alunos.push(new Aluno('Daiha', 31))
    alunos.push(new Aluno('Eduardo', 16))
    alunos.push(new Aluno('Nilza', 58))
    alunos.push(new Aluno('Ana', 61))
    return alunos;
}

let alunos: Aluno[] = criaAlunos();
alunos.map(a => a.idade += 10)

for(let aluno of alunos){
    console.log(aluno.apresentar());
}




