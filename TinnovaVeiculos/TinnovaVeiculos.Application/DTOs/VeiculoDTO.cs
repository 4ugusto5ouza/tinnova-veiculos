using System;

namespace TinnovaVeiculos.Application.DTOs
{
    public class VeiculoDTO
    {
        public long Id { get; set; }
        public string Modelo { get; set; }
        public string Marca { get; set; }
        public int AnoFabricacao { get; set; }
        public string Descricao { get; set; }
        public bool Vendido { get; set; }
        public DateTime DataRegistro { get; set; }
        public DateTime? DataAtualizacao { get; set; }
    }
}
