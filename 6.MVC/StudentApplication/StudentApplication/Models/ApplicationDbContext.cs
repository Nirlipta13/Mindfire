using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace StudentApplication.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext():base()
        {

        }

        public DbSet<Student> Students { get; set; }
        public DbSet<Department> Departments { get; set; }

      
    }
}

