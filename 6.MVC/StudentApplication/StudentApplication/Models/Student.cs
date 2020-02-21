using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace StudentApplication.Models
{
    public class Student
    {
        [Key]
        public int StudentID { get; set; }

        [MaxLength(50)]
        [Required]
        public string StudentFirstName { get; set; }

        [MaxLength(50)]
        [Required]
        public string StudentLastName { get; set; }

        [Required]
        public int StudentAge { get; set; }

        [MaxLength(60)]
        public string StudentEmail { get; set; }

        [Required]
        public string StudentGender { get; set; }
    }
}