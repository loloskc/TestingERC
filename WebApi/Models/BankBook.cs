using System;

namespace WebApi.Models
{
    public class BankBook
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public DateTime DateStart { get; set; }
        public DateTime DateEnd { get; set; }
        public string Address { get; set; }
        public int Sqaure { get; set; }
        public int ResidentId { get; set; }
        public Resident Resident { get; set; }
    }
}
