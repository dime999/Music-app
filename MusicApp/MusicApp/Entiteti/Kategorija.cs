using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MusicApp.Entiteti
{
    public class Kategorija
    {
        [Key]
        public int id { get; set; }
        public string ime { get; set; }
       // public List<PjesmaKategorija> PjesmaKategorija { get; set; }
    }
}
