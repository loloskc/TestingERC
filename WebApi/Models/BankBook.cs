using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

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
        public int ResidentsId { get; set; }
        public IEnumerable<Resident> Residents { get; set; }
    }
}
