using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MusicApp.Migrations
{
    public partial class pjesma : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Pjesme",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(75)", maxLength: 75, nullable: false),
                    NazivIzvodjaca = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Url = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Ocjena = table.Column<int>(type: "int", nullable: false),
                    Favorit = table.Column<bool>(type: "bit", nullable: false),
                    DatumUnosaPjesme = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DatumEditovanja = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pjesme", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "PjesmaKategorije",
                columns: table => new
                {
                    KategorijaId = table.Column<int>(type: "int", nullable: false),
                    PjesmaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PjesmaKategorije", x => new { x.PjesmaId, x.KategorijaId });
                    table.ForeignKey(
                        name: "FK_PjesmaKategorije_Kategorije_KategorijaId",
                        column: x => x.KategorijaId,
                        principalTable: "Kategorije",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_PjesmaKategorije_Pjesme_PjesmaId",
                        column: x => x.PjesmaId,
                        principalTable: "Pjesme",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_PjesmaKategorije_KategorijaId",
                table: "PjesmaKategorije",
                column: "KategorijaId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PjesmaKategorije");

            migrationBuilder.DropTable(
                name: "Pjesme");
        }
    }
}
