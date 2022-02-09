using MusicApp.Entiteti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicApp.ViewModels
{
    public class PjesmaVM
    {
        
        public int id { get; set; }

        
        public string Naziv { get; set; }
        public string NazivIzvodjaca { get; set; }
        public string Url { get; set; }
        
        public int Ocjena { get; set; }
        public bool Favorit { get; set; }
        public DateTime DatumUnosaPjesme { get; set; }
        public DateTime DatumEditovanja { get; set; }
       // public List<PjesmaKategorija> PjesmaKategorija { get; set; }
    }
}
