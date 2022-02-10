
using Microsoft.AspNetCore.Mvc;
using MusicApp.CreateModels;
using MusicApp.Entiteti;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using AutoMapper;

namespace MusicApp.Controllers
{
    [Route("api/pjesma")]
    [ApiController]
    public class PjesmaController : ControllerBase
    {
        private readonly AppDbContext context;
        private readonly IMapper mapper;



        public PjesmaController(AppDbContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        public ActionResult<List<Pjesma>> GetAll()
        {
            var data = context.Pjesme
                .Include(p=> p.kategorija)
                .OrderByDescending(s => s.id)
                .AsQueryable();

            return data.Take(10).ToList();
                
        }
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            

            return Ok(context.Pjesme.Include(p => p.kategorija).FirstOrDefault(p => p.id == id)); ;
        }


        [HttpPost]
        public ActionResult<Pjesma> Add([FromBody] PjesmaCreationVM x)
        {
            var pjesma = new Pjesma
            {
                Naziv = x.Naziv,
                NazivIzvodjaca = x.NazivIzvodjaca,
                Url = x.Url,
                Ocjena = x.Ocjena,
                Favorit = x.Favorit,
                DatumUnosaPjesme = DateTime.Now,
                kategorija_id = x.Kategorija_id
            };
            context.Add(pjesma);
            context.SaveChanges();
            return pjesma;
            
        }
        [HttpPut("{id}")]
        public ActionResult<Pjesma> Put(int id,[FromBody] PjesmaCreationVM x)
        {
            Pjesma pjesma;
            pjesma = context.Pjesme.Include(p => p.kategorija).FirstOrDefault(p => p.id == id);
            if(pjesma==null)
            {
                return BadRequest("Pogresan ID");
            }
            pjesma.Naziv = x.Naziv;
            pjesma.NazivIzvodjaca = x.NazivIzvodjaca;
            pjesma.Url = x.Url;
            pjesma.kategorija_id = x.Kategorija_id;
            context.SaveChanges();
            return Get(pjesma.id);

        }



        [HttpPost("{id}")]
        public ActionResult Delete(int id)
        {
           

            Pjesma pjesma = context.Pjesme.Find(id);

            if (pjesma == null)
                return BadRequest("pogresan ID");

            context.Remove(pjesma);

            context.SaveChanges();
            return Ok(pjesma);
        }




    }
}
