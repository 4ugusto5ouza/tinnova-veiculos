using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using TinnovaVeiculos.Application.DTOs;
using TinnovaVeiculos.Application.Interfaces;

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

        // GET: VeiculoController
        [HttpGet("GetAll")]
        public ActionResult<IEnumerable<VeiculoDTO>> GetAllVeiculoDto([FromQuery] string filters, [FromQuery] int page, [FromQuery] int limit)
        {
            //var filtro = filters.ToJson<Filter>();
            return Ok(_appService.GetAllAsNoTracking());
        }
    }
}

