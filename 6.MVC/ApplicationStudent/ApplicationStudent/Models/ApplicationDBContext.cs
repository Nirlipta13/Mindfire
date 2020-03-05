using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ApplicationStudent.Models
{
    public class ApplicationDBContext:DbContext
    {
        public ApplicationDBContext()
            : base("DefaultConnection")
        {

        }

        public DbSet<Student> Students { get; set; }
        public DbSet<Department> Departments { get; set; }
    }
}