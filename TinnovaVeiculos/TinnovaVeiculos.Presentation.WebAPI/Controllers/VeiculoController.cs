using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using TinnovaVeiculos.Application.DTOs;
using TinnovaVeiculos.Application.Interfaces;
using TinnovaVeiculos.Domain.Filters;
using TinnovaVeiculos.Infraestructure.CrossCutting.Extensions;


namespace TinnovaVeiculos.Presentation.WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class VeiculoController : ControllerBase
    {
        private readonly ILogger<VeiculoController> _logger;
        private readonly IVeiculoAppService _appService;

        public VeiculoController(ILogger<VeiculoController> logger, IVeiculoAppService appService)
        {
            _logger = logger;
            _appService = appService;
        }

        // GET: VeiculoController/GetAll
        [HttpGet("GetAll")]
        public ActionResult<IEnumerable<VeiculoDTO>> GetAllVeiculoDto([FromQuery] string filters, [FromQuery] int page = 0, [FromQuery] int limit = 25)
        {
            var filtro = filters.ToJson<GetAllVeiculoFilters>();
            return Ok(_appService.GetAllAsNoTracking(filtro, page, limit));
        }

        //POST: VeiculoController/Create
        [HttpPost("Create")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult Create([FromBody] VeiculoDTO dto)
        {
            _appService.Create(dto);

            return Ok("Resgistro criado com sucesso!");
        }

        //PUT: VeiculoController/Update
        [HttpPut("Update")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult UpdateAvisoFerias([FromBody] VeiculoDTO dto)
        {
            _appService.Update(dto);
            return Ok("Resgistro atualizado com sucesso!");
        }


        [HttpDelete("Delete/{id}")]
        public ActionResult Delete(long id)
        {
            _appService.Delete(id);
            return Ok("Resgistro deletado com sucesso!");
        }
    }
}

