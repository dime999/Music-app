using Microsoft.EntityFrameworkCore.Migrations;

namespace MusicApp.Migrations
{
    public partial class ss : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "kategorija_id",
                table: "Pjesme",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Pjesme_kategorija_id",
                table: "Pjesme",
                column: "kategorija_id");

            migrationBuilder.AddForeignKey(
                name: "FK_Pjesme_Kategorije_kategorija_id",
                table: "Pjesme",
                column: "kategorija_id",
                principalTable: "Kategorije",
                principalColumn: "id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pjesme_Kategorije_kategorija_id",
                table: "Pjesme");

            migrationBuilder.DropIndex(
                name: "IX_Pjesme_kategorija_id",
                table: "Pjesme");

            migrationBuilder.DropColumn(
                name: "kategorija_id",
                table: "Pjesme");
        }
    }
}
