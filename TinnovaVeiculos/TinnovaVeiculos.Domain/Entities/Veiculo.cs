using System;

namespace TinnovaVeiculos.Domain.Entities
{
    public class Veiculo
    {        
        public Veiculo()
        {
            Vendido = false;
            DataRegistro = DateTime.Now;
        }

        public Veiculo(string modelo, string marca, int anoFabricacao, string descricao)
        {
            Modelo = modelo;
            Marca = marca;
            AnoFabricacao = anoFabricacao;
            Descricao = descricao;
            Vendido = false;
            DataRegistro = DateTime.Now;
        }

        public Veiculo(long id, string modelo, string marca, int anoFabricacao, string descricao, DateTime dataRegistro)
        {
            Id = id;
            Modelo = modelo;
            Marca = marca;
            AnoFabricacao = anoFabricacao;
            Descricao = descricao;
            DataRegistro = dataRegistro;
        }

        public long Id { get; set; }
        public string Modelo { get; set; }
        public string Marca { get; set; }
        public int AnoFabricacao { get; set; }
        public string Descricao { get; set; }
        public bool Vendido { get; private set; }
        public DateTime DataRegistro { get; private set; }
        public DateTime? DataAtualizacao { get; private set; }

        public void SetVendido(bool vendido)
        {
            Vendido = vendido;
        }

        public void SetDataRegistro(DateTime dataRegistro)
        {
            DataRegistro = dataRegistro;
        }

        public void SetDataAtualizacao()
        {
            DataAtualizacao = DateTime.Now;
        }
    }
}
