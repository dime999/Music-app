using Microsoft.EntityFrameworkCore;
using MusicApp.Entiteti;
using System;
using System.Collections.Generic;
using System.Diagnostics.CodeAnalysis;
using System.Linq;
using System.Threading.Tasks;

namespace MusicApp
{
   
    public class AppDbContext : DbContext
    {
        public AppDbContext([NotNullAttribute] DbContextOptions options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<PjesmaKategorija>().HasKey(x => new { x.PjesmaId, x.KategorijaId });
            

            base.OnModelCreating(modelBuilder);
        }

        public DbSet<Kategorija> Kategorije { get; set; }
        public DbSet<Pjesma> Pjesme { get; set; }
        public DbSet<PjesmaKategorija> PjesmaKategorije { get; set; }
    }
}
