namespace TinnovaExercicios
{
    public class ResultadoEleicao
    {
        public ResultadoEleicao(int votosValidos, int votosBrancos, int votosNulos)
        {
            VotosValidos = votosValidos;
            VotosBrancos = votosBrancos;
            VotosNulos = votosNulos;
        }

        public double VotosValidos { get; }
        public double VotosBrancos { get; }
        public double VotosNulos { get; }
        public double TotalEleitores { get => VotosValidos + VotosBrancos + VotosNulos; }

        public double CalcularPercentualVotosValidos()
        {
            return (VotosValidos / TotalEleitores) * 100;
        }
        public double CalcularPercentualVotosBrancos()
        {
            return (VotosBrancos / TotalEleitores) * 100;
        }
        public double CalcularPercentualVotosNulos()
        {
            return (VotosNulos / TotalEleitores) * 100;
        }
    }
}
