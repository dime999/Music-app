using Microsoft.EntityFrameworkCore.Migrations;

namespace MusicApp.Migrations
{
    public partial class dele : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "PjesmaKategorije");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "PjesmaKategorije",
                columns: table => new
                {
                    PjesmaId = table.Column<int>(type: "int", nullable: false),
                    KategorijaId = table.Column<int>(type: "int", nullable: false)
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
    }
}
