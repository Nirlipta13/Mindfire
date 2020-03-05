using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using StudentApplication.Models;
using System.Web;

namespace StudentApplication.Dtos
{
    public class StudentDto
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
        [Min18Years]
        public int StudentAge { get; set; }

        [MaxLength(60)]
        [RegularExpression(@"^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}" +
                           @"\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\" +
                           @".)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$",
                           ErrorMessage = "Email is not valid")]
        public string StudentEmail { get; set; }

        [Required]
        public string StudentGender { get; set; }


        public int? DepartmentID { get; set; }

    }
}