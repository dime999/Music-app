using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicApp.Entiteti
{
    public class PjesmaKategorija
    {
        public int KategorijaId { get; set; }

        public int PjesmaId { get; set; }

        public Kategorija Kategorija { get; set; }

        public Pjesma Pjesma { get; set; }
    }
}
