namespace StudentApplication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial_Migration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Students",
                c => new
                    {
                        StudentID = c.Int(nullable: false, identity: true),
                        StudentFirstName = c.String(nullable: false, maxLength: 50),
                        StudentLastName = c.String(nullable: false, maxLength: 50),
                        StudentAge = c.Int(nullable: false),
                        StudentEmail = c.String(maxLength: 60),
                        StudentGender = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.StudentID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Students");
        }
    }
}
