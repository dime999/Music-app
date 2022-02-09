using Microsoft.AspNetCore.Mvc;
using MusicApp.Entiteti;
using MusicApp.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicApp.CreateModels
{
    public class PjesmaCreationVM
    {
       
        public string Naziv { get; set; }
        public string NazivIzvodjaca { get; set; }
        public string Url { get; set; }
        public int Ocjena { get; set; }
        public bool Favorit { get; set; }
        public DateTime DatumUnosaPjesme { get; set; }
        public DateTime DatumEditovanja { get; set; }
        public int? kategorija_id { get; set; }


    }
}
