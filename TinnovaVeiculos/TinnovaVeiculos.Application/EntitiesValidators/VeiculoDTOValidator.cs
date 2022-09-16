using FluentValidation;
using System.Collections.Generic;
using TinnovaVeiculos.Application.DTOs;

namespace TinnovaVeiculos.Application.EntitiesValidators
{
    public class VeiculoDTOValidator : AbstractValidator<VeiculoDTO>
    {
        public VeiculoDTOValidator()
        {
            RuleFor(x => x.Marca)
                .Must(ConterApenasNomesCorreto).WithMessage("Marca de veículo informada inválida!");
        }

        private bool ConterApenasNomesCorreto(string marca)
        {
            var marcasPermitidas = new List<string> { "Ford", "Chevrolet", "Toyota", "Fiat", "BMW", "Honda", "Jeep", "Nissan", "Peugeot", "Renault", "Volkswagen" };
            return marcasPermitidas.Contains(marca);
        }
    }
}
