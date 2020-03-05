using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ApplicationStudent.Models;
using ApplicationStudent.Models.ViewModel;

namespace ApplicationStudent.Controllers
{
    public class StudentController : Controller
    {
        private ApplicationDBContext db;
        public StudentController()
        {
            db = new ApplicationDBContext();
        }
        // GET: Student
        public ActionResult Index()
        {
            var dept = db.Departments.ToList();
            ViewBag.Department = dept;

            return View();
        }

        public ActionResult GetAllStudents()
        {
            var student = (from user in db.Students.Include("Department").ToList()
                           select new StudentDepartment { 
                               StudentID=user.StudentID,
                               FullName=user.FullName,
                               Age=user.Age,
                               EmailAddress=user.EmailAddress,
                               DepartmentName=user.Department.DepartmentName!=null?user.Department.DepartmentName:"N/A",
                               Location=user.Department.Location!=null?user.Department.Location:"N/A"
                           }).ToList();
            return Json(student,JsonRequestBehavior.AllowGet);
        }
    }
}