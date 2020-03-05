using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApplicationStudent.Models.ViewModel
{
    public class StudentDepartment
    {
        public int StudentID { get; set; }
        public string FullName { get; set; }
        public string EmailAddress { get; set; }
        public int? Age { get; set; }
        public int DepartmentId { get; set; }
        public string DepartmentName { get; set; }
        public string Location { get; set; }
    }
}