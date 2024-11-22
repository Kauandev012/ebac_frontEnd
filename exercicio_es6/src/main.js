const alunos = [{nome:'Ryan', nota: 5.5},{nome:'Luisa', nota: 8.1},{nome:'Pedro', nota:7.1},{nome:'Eloa',nota:5.9}];

function filtraAlunos(alunos){
    return alunos.nota >= 6 ;
}

const alunosMediaAlta = alunos.filter(filtraAlunos);


console.log(alunosMediaAlta);