using AutoMapper;
using MusicApp.CreateModels;
using MusicApp.Entiteti;
using MusicApp.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MusicApp.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        //public AutoMapperProfiles()
        //{

        //    CreateMap<PjesmaCreationVM, Pjesma>()
        //         .ForMember(x => x.PjesmaKategorija, options => options.MapFrom(MapFilmZanr));
        //}
        //private List<PjesmaKategorija> MapFilmZanr(PjesmaCreationVM pjesmaCreateModel, Pjesma pjesma)
        //{
        //    var result = new List<PjesmaKategorija>();
        //    if (pjesmaCreateModel.Kategorije == null) { return result; }
        //    foreach (var id in pjesmaCreateModel.Kategorije)
        //    {
        //        result.Add(new PjesmaKategorija() { KategorijaId = id });
        //    }
        //    return result;
        //}
    }



   
}
