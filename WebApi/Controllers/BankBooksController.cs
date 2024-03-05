using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Data;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BankBooksController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public BankBooksController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/BankBooks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BankBook>>> GetBankBooks()
        {
            return await _context.BankBooks.Include(c=>c.Resident).ToListAsync();
        }

        // GET: api/BankBooks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BankBook>> GetBankBook(int id)
        {
            var bankBook = await _context.BankBooks.Include(c=>c.Resident).FirstOrDefaultAsync(e=>e.Id==id);

            if (bankBook == null)
            {
                return NotFound();
            }

            return bankBook;
        }

        // PUT: api/BankBooks/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBankBook(int id, BankBook bankBook)
        {
            if (id != bankBook.Id)
            {
                return BadRequest();
            }

            _context.Entry(bankBook).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BankBookExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BankBooks
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BankBook>> PostBankBook(BankBook bankBook)
        {
            _context.BankBooks.Add(bankBook);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBankBook", new { id = bankBook.Id }, bankBook);
        }

        // DELETE: api/BankBooks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBankBook(int id)
        {
            var bankBook = await _context.BankBooks.FindAsync(id);
            if (bankBook == null)
            {
                return NotFound();
            }

            _context.BankBooks.Remove(bankBook);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BankBookExists(int id)
        {
            return _context.BankBooks.Any(e => e.Id == id);
        }
    }
}
