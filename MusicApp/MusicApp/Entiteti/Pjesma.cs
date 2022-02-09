using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MusicApp.Entiteti
{
    public class Pjesma
    {
        [Key]
        public int id { get; set; }

        [StringLength(maximumLength: 75)]
        [Required]
        public string Naziv { get; set; }
        public string NazivIzvodjaca { get; set; }
        public string Url { get; set; }
        [Range(1,5)]
        public int Ocjena { get; set; }
        public bool Favorit { get; set; }
        public DateTime DatumUnosaPjesme { get; set; }
        public DateTime DatumEditovanja { get; set; }
        public List<PjesmaKategorija> PjesmaKategorija { get; set; }


    }
}
