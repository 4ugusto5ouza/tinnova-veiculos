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
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult Create([FromBody] VeiculoDTO dto)
        {
            _appService.Create(dto);

            return Ok();
        }
    }
}

