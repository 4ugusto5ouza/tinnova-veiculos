using System;
using System.Text.Json;

namespace TinnovaVeiculos.Infraestructure.CrossCutting.Extensions
{
    public static class StringExtensions
    {
        public static TEntity ToJson<TEntity>(this string str)
        {
            if (str != string.Empty)
                return JsonSerializer.Deserialize<TEntity>(str);
            else
                throw new Exception("Não é possível desserializar um objeto json vazio.");
        }
    }
}
