using System;

namespace TinnovaVeiculos.Domain.Entities
{
    public class Veiculo
    {
        public Veiculo()
        {
            Vendido = false;
            Created = DateTime.Now;
        }

        public Veiculo(string modelo, string marca, int ano, string descricao)
        {
            Modelo = modelo;
            Marca = marca;
            Ano = ano;
            Descricao = descricao;
            Vendido = false;
            Created = DateTime.Now;
        }

        public long Id { get; set; }
        public string Modelo { get; set; }
        public string Marca { get; set; }
        public int Ano { get; set; }
        public string Descricao { get; set; }
        public bool Vendido { get; private set; }
        public DateTime Created { get; private set; }
        public DateTime? Updated { get; private set; }

        public void SetVendido(bool vendido)
        {
            Vendido = vendido;
        }

        public void SetUpdated()
        {
            Updated = DateTime.Now;
        }
    }
}
