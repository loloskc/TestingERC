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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<Resident>()
                .HasOne(e => e.BankBook).WithMany(e => e.Residents).HasForeignKey(e => e.BankBookId);
            modelBuilder.Entity<BankBook>().HasIndex(e => e.Number).IsUnique();
                
        }
    }
}
