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

        public DbSet<Kategorija> Kategorije { get; set; }
    }
}
