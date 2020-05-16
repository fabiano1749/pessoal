package estudo.java8;

import java.util.ArrayList;
import java.util.List;

public class Aluno {
	private String nome;
	private Integer nota;
	
	public Aluno(String nome, Integer nota){
		this.nome = nome;
		this.nota = nota;
	}
	
	public String getNome() {
		return nome;
	}

	public Integer getNota() {
		return nota;
	}

	public static List<Aluno> alunos(){
		List<Aluno> alunos = new ArrayList<>();
		alunos.add(new Aluno("Bruce", 6));
		alunos.add(new Aluno("Vini", 8));
		alunos.add(new Aluno("Ana", 10));
		alunos.add(new Aluno("Eduardo", 7));
		alunos.add(new Aluno("Daia", 10));
		return alunos;
	}
	
	@Override
	public String toString() {
		return getNome() + " - "+ getNota();
	}
	
	
}
