namespace ApplicationStudent.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ApplicationStudent.Models.ApplicationDBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(ApplicationStudent.Models.ApplicationDBContext context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            if(!context.Students.Any())
            {
                context.Students.Add(new Models.Student
                {
                    FullName="Nirlipta Das",
                    EmailAddress="annie@gmail.com",
                    Age=22,                  
                });
                context.Students.Add(new Models.Student
                {
                    FullName = "Srilipta Das",
                    EmailAddress = "rani@gmail.com",
                    Age = 15,
                });
                context.Students.Add(new Models.Student
                {
                    FullName = "Sibashis Bishi",
                    EmailAddress = "subham@gmail.com",
                    Age = 22,
                });
            }
            if(!context.Departments.Any())
            {
                context.Departments.Add(new Models.Department
                {
                        DepartmentName="Computer Science and Engineering",
                        Location="BBSR"
                });
                context.Departments.Add(new Models.Department
                {
                    DepartmentName = "Electronics and Electrical and Engineering",
                    Location = "Sambalpur"
                });
            }
        }
    }
}
