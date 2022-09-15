using System;

namespace TinnovaVeiculos.Domain.Filters
{
    public class GetAllVeiculoFilters
    {
        public int? AnoFabricacaoMinimo { get; set; }
        public int? AnoFabricacaoMaximo { get; set; }
        public DateTime? DataRegistroMinimo { get; set; }
        public DateTime? DataRegistroMaximo { get; set; }
        public string Marca { get; set; }
    }
}
