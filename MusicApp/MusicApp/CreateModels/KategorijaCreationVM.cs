using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MusicApp.CreateModels
{
    public class KategorijaCreationVM
    {
        [Required(ErrorMessage = "The field with name {0} is required")]
        [StringLength(50)]
        public string ime { get; set; }
    }
}
