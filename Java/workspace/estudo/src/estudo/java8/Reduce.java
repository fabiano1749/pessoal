package estudo.java8;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class Reduce {
	public static void main(String[] args) {
		List<Integer> notas = Arrays.asList(1,2,3,4,5,6);
		List<Aluno> alunos = Aluno.alunos();
		Integer soma = notas.stream().reduce(0, (a, b) -> a + b);
		Integer soma2 = notas.stream().reduce(0, Integer::sum);
		Integer somaNotasAlunos = alunos.stream().map(Aluno::getNota).reduce(0, Integer::sum);
//		System.out.println(somaNotasAlunos);
		
		Map<Integer, List<Aluno>> mapa = alunos.stream().collect(Collectors.groupingBy(a -> a.getNota()));
		
		// antes do Java 8
		for (Map.Entry<Integer, List<Aluno>> entry :  mapa.entrySet()) {
		        System.out.println( "Antes do Java 8: " + entry.getValue() );
		}
		
		// após o Java 8
		mapa.entrySet()
		        .stream()
		        .forEach( map -> System.out.println( "Após Java 8 : " + map.getValue() ) );
		
	}
}
