namespace StudentApplication.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class DeptClass_Migration : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Departments",
                c => new
                    {
                        DepartmentID = c.Int(nullable: false, identity: true),
                        DepartmentName = c.String(),
                        Location = c.String(),
                    })
                .PrimaryKey(t => t.DepartmentID);
            
            AddColumn("dbo.Students", "DepartmentID", c => c.Int());
            CreateIndex("dbo.Students", "DepartmentID");
            AddForeignKey("dbo.Students", "DepartmentID", "dbo.Departments", "DepartmentID");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Students", "DepartmentID", "dbo.Departments");
            DropIndex("dbo.Students", new[] { "DepartmentID" });
            DropColumn("dbo.Students", "DepartmentID");
            DropTable("dbo.Departments");
        }
    }
}
