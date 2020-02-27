namespace StudentApplication.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using StudentApplication.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<StudentApplication.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(StudentApplication.Models.ApplicationDbContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data.

            if (!context.Students.Any())
            {
                context.Students.Add(new Models.Student
                {
                    StudentFirstName="Nirlipta",
                    StudentLastName="Das",
                    StudentAge=22,
                    StudentEmail="annie@gmail.com",
                    StudentGender="Female"
                });
                context.Students.Add(new Models.Student
                {
                    StudentFirstName = "Sibashis",
                    StudentLastName = "Bishi",
                    StudentAge = 23,
                    StudentEmail = "subham@gmail.com",
                    StudentGender = "Male"
                });
                context.Students.Add(new Models.Student
                {
                    StudentFirstName = "Swagata",
                    StudentLastName = "Upadhyay",
                    StudentAge = 22,
                    StudentEmail = "swagata@gmail.com",
                    StudentGender = "Female"
                });
                context.SaveChanges();
            }

            if (!context.Departments.Any())
            {
                context.Departments.Add(new Models.Department
                {
                    DepartmentName = "Computer Science and Engineering",
                    Location = "BBSR"
                });
                context.Departments.Add(new Models.Department
                {
                    DepartmentName = "Electrical and Electronics",
                    Location = "BBSR"
                });
                context.Departments.Add(new Models.Department
                {
                    DepartmentName = "Civil Engineering",
                    Location = "Sambalpur"
                });
                context.Departments.Add(new Models.Department
                {
                    DepartmentName = "Mechanical Engineering",
                    Location = "Sambalpur"
                });
            }
        }
    }
}
