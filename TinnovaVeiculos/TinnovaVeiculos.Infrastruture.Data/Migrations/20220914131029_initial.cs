using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TinnovaVeiculos.Infrastruture.Data.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Veiculos",
                columns: table => new
                {
                    Id = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Veiculo = table.Column<string>(nullable: false),
                    Marca = table.Column<string>(nullable: false),
                    Ano = table.Column<int>(nullable: false),
                    Descricao = table.Column<string>(nullable: false),
                    Vendido = table.Column<bool>(nullable: false),
                    Created = table.Column<DateTime>(nullable: false),
                    Updated = table.Column<DateTime>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Veiculos", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Veiculos");
        }
    }
}
