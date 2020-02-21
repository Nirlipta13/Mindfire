using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace StudentApplication.Models
{
    public class StudentDbContext : DbContext
    {
        public StudentDbContext():base()
        {

        }

        public DbSet<Student> Students { get; set; }
    }
}

