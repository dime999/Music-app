
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
       public ActionResult Update(int id,[FromBody] PjesmaCreationVM x)
        {
            Pjesma pjesma;

            if(id==0)
            {
                pjesma = new Pjesma { DatumUnosaPjesme = DateTime.Now };
                context.Add(pjesma);
            }
            else
            {
                pjesma = context.Pjesme.Include(p => p.kategorija).FirstOrDefault(p => p.id == id);
                if(pjesma==null)
                {
                    return BadRequest("pogresan ID");
                }
            }

            pjesma.Naziv = x.Naziv;
            pjesma.Ocjena = x.Ocjena;
            pjesma.DatumEditovanja = DateTime.Now;
            pjesma.NazivIzvodjaca = x.NazivIzvodjaca;
            pjesma.kategorija_id = x.kategorija_id;
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
