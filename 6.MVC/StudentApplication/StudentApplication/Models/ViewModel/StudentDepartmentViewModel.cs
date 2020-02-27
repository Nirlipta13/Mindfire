using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace StudentApplication.Models.ViewModel
{
    public class StudentDepartmentViewModel
    {
        public int StudentID { get; set; }

        public string StudentFirstName { get; set; }

        public string StudentLastName { get; set; }

        public int StudentAge { get; set; }

        public string StudentEmail { get; set; }

        public string StudentGender { get; set; }

        public int DepartmentID { get; set; }

        public string DepartmentName { get; set; }

        public string Location { get; set; }

        public IEnumerable<Department> Department { get; set; }

    }
   
}