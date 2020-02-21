namespace StudentApplication.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using StudentApplication.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<StudentApplication.Models.StudentDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(StudentApplication.Models.StudentDbContext context)
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
        }
    }
}
