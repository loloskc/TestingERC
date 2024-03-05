using WebApi.Models;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Data
{
    public class ApplicationDbContext:DbContext
    {
        public DbSet<Resident> Residents { get; set; }
        public DbSet<BankBook> BankBooks { get; set; }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options) 
        {
            Database.EnsureCreated();
        }
    }
}
