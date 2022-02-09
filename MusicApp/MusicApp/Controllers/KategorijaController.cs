
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MusicApp.CreateModels;
using MusicApp.Entiteti;
using MusicApp.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicApp.Controllers
{
    [Route("api/kategorije")]
    [ApiController]
    public class KategorijaController : ControllerBase
    {
        private readonly AppDbContext context;
        public KategorijaController(AppDbContext context)
        {
            this.context = context;

        }

        [HttpGet]
        public  ActionResult<List<Kategorija>> GetAll()
        {

            var data = context.Kategorije
                 .OrderByDescending(s => s.id)
                 .AsQueryable();
            return data.Take(10).ToList();

        }

        [HttpPost]
        public ActionResult<Kategorija> Post([FromBody] KategorijaCreationVM x)
        {
            var newKategorija = new Kategorija
            {
                ime = x.ime,
            };
            context.Add(newKategorija);
            context.SaveChanges();
            return newKategorija;
        }
       
    }
}
