using System;

namespace TinnovaExercicios
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var resultadoEleicao = new ResultadoEleicao(800, 150, 50);

            Console.WriteLine(resultadoEleicao.CalcularPercentualVotosValidos() + "%");
            Console.WriteLine(resultadoEleicao.CalcularPercentualVotosBrancos() + "%");
            Console.WriteLine(resultadoEleicao.CalcularPercentualVotosNulos() + "%");

            int[] vetor = { 5, 3, 2, 4, 7, 1, 0, 6 };

            for (int i = 0; i < vetor.Length; i++)
            {
                Console.Write(vetor[i] + ", ");
            }


            int aux;

            for (int i = 0; i < vetor.Length; i++)
            {
                for (int j = 0; j < vetor.Length - 1; j++)
                {
                    if (vetor[j] > vetor[j + 1])
                    {
                        aux = vetor[j + 1];
                        vetor[j + 1] = vetor[j];
                        vetor[j] = aux;
                    }
                }
            }

            Console.WriteLine("");
            for (int i = 0; i < vetor.Length; i++)
                Console.Write(vetor[i] + ", ");

            Console.WriteLine("");
            Console.WriteLine(FatorialRecursao(6));

            Console.Write("Digite um número: ");
            Console.WriteLine(SomaMultiplosTresOuCinco(int.Parse(Console.ReadLine())));

            Console.ReadKey();
        }

        public static int FatorialRecursao(int numero)
        {
            if (numero == 1)
                return 1;
            else
                return numero * FatorialRecursao(numero - 1);
        }

        public static int SomaMultiplosTresOuCinco(int numero)
        {
            int resultado = 0;

            for (int i = 0; i < numero; i++)
            {
                if (i % 3 == 0 || i % 5 == 0)
                {
                    resultado += i;
                }
            }
            return resultado;
        }
    }
}
