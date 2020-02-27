using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace StudentApplication.Models
{
    public class Department
    {
        [Key]
        public int DepartmentID { get; set; }
        [Required]
        public string DepartmentName { get; set; }
        public string Location { get; set; }

        public List<Student> Students { get; set; }
    }

   
}