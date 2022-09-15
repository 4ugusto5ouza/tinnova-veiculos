using System;

namespace TinnovaVeiculos.Domain.Filters
{
    public class GetAllVeiculoFilters
    {
        public DateTime AnoFabricacaoMinimo { get; set; }
        public DateTime AnoFabricacaoMaximo { get; set; }
        public DateTime DataRegistroMinimo { get; set; }
        public DateTime DataRegistroMaximo { get; set; }
        public string Marca { get; set; }
    }
}
