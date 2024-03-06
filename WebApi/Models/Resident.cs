using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebApi.Models
{
    public class Resident
    {
        [Key]
        public int Id { get; set; }
        
        public int? BankBookId { get; set; }
        public BankBook? BankBook { get; set; }
        public string FIO { get; set; }
        public string PhoneNumber { get; set; }
    }
}
