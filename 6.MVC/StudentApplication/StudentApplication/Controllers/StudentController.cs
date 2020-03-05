using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using StudentApplication.Models;
using System.Data.Entity;
using System.Data.Entity.Validation;
using StudentApplication.Models.ViewModel;

namespace StudentApplication.Controllers
{
    public class StudentController : Controller
    {
        private ApplicationDbContext db;
        public StudentController()
        {
            db = new ApplicationDbContext();
        }

        public ActionResult HomePage()
        {
            return View();
        }

        [HttpPost]
        public ActionResult createStudent(Student std)
        {
            db.Students.Add(std);
            db.SaveChanges();
            string message = "SUCCESS";
            return Json(new { Message = message, JsonRequestBehavior.AllowGet });
        }

        public JsonResult getStudent(string id)
        {
            List<Student> students = new List<Student>();
            students = db.Students.Include("Department").ToList();
            return Json(students, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Delete(int id)
        {
            Student student = db.Students.Find(id);
            db.Students.Remove(student);
            db.SaveChanges();
            return Json("Successfully Deleted");
        }

        public ActionResult Index()
        {
            var users = (from user in db.Students.Include("Department").ToList()
                         select new StudentDepartmentViewModel
                         {
                                StudentID = user.StudentID,
                                StudentAge = user.StudentAge,
                                StudentEmail = user.StudentEmail,
                                StudentFirstName = user.StudentFirstName,
                                StudentLastName = user.StudentLastName,
                                StudentGender=user.StudentGender,
                                DepartmentName = (user.Department!=null)? user.Department.DepartmentName :"N/A",
                                Location = (user.Department!=null)? user.Department.Location :"N/A"
                        }).ToList();


            return View(users);
        }

        

        public ActionResult Details(int ID)
        {
            var std = db.Students.Where(s => s.StudentID == ID).FirstOrDefault();

            var dept = db.Departments.Where(d => d.DepartmentID == std.DepartmentID).FirstOrDefault();

            var viewModel = new StudentDepartmentViewModel
            {
                StudentID = std.StudentID,
                StudentFirstName = std.StudentFirstName,
                StudentLastName = std.StudentLastName,
                StudentAge = std.StudentAge,
                StudentEmail = std.StudentEmail,
                StudentGender = std.StudentGender,
                DepartmentID = std.DepartmentID.GetValueOrDefault(),
                DepartmentName = (dept.DepartmentName != null) ? dept.DepartmentName : "N/A",
                Location = (dept.Location != null) ? dept.Location : "N/A"
            };

            
            return View(viewModel);
        }

        //public ActionResult Edit(int ID)
        //{
        //    var std = db.Students.Where(s => s.StudentID == ID).FirstOrDefault();
        //    var dept = db.Departments.Where(d => d.DepartmentID == std.DepartmentID).FirstOrDefault();
        //    var viewModel = new StudentDepartmentViewModel
        //    {
        //        StudentID = std.StudentID,
        //        StudentFirstName = std.StudentFirstName,
        //        StudentLastName = std.StudentLastName,
        //        StudentAge = std.StudentAge,
        //        StudentEmail = std.StudentEmail,
        //        StudentGender = std.StudentGender,
        //        Department=db.Departments.ToList(),
        //        DepartmentID = std.DepartmentID.GetValueOrDefault(),
        //        DepartmentName = dept.DepartmentName,
        //        Location = dept.Location
        //    };

        //    return View(viewModel);
        //}

        [HttpPost]
        public ActionResult Edit(StudentDepartmentViewModel student)
        {

            var studentFromDb = db.Students.FirstOrDefault(x => x.StudentID == student.StudentID);
            var deptFromDB = db.Departments.Where(d => d.DepartmentID == student.DepartmentID).FirstOrDefault();


            try
            { 
                if (!ModelState.IsValid)
                {               
                    var viewModel = new StudentDepartmentViewModel
                    {
                        StudentID = student.StudentID,
                        StudentFirstName = student.StudentFirstName,
                        StudentLastName = student.StudentLastName,
                        StudentEmail = student.StudentEmail,
                        StudentAge = student.StudentAge,
                        StudentGender = student.StudentGender,
                        DepartmentID = deptFromDB.DepartmentID,
                        DepartmentName = deptFromDB.DepartmentName,
                        Location = deptFromDB.Location
                    };


                    //Student exists in the datdabase. 
                    studentFromDb.StudentFirstName = viewModel.StudentFirstName;
                    studentFromDb.StudentLastName = viewModel.StudentLastName;
                    studentFromDb.StudentEmail = viewModel.StudentEmail;
                    studentFromDb.StudentAge = viewModel.StudentAge;
                    studentFromDb.StudentGender = viewModel.StudentGender;
                    studentFromDb.DepartmentID = viewModel.DepartmentID;

                    db.Entry(studentFromDb).State = EntityState.Modified;
                    db.SaveChanges();
                }       
            }
            catch (DbEntityValidationException e)
            {
                foreach (var eve in e.EntityValidationErrors)
                {
                    Console.WriteLine("Entity of type \"{0}\" in state \"{1}\" has the following validation errors:",
                        eve.Entry.Entity.GetType().Name, eve.Entry.State);
                    foreach (var ve in eve.ValidationErrors)
                    {
                        Console.WriteLine("- Property: \"{0}\", Error: \"{1}\"",
                            ve.PropertyName, ve.ErrorMessage);
                    }
                }
                throw e;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw e;
            }

           

            return RedirectToAction("Index");
        }

        //[HttpPost,ActionName("Delete")]
        
        //    public ActionResult Delete(int id)
        //    {
        //        Student student = db.Students.Find(id);
        //        db.Students.Remove(student);
        //        db.SaveChanges();
        //        return Json("Successfully Deleted");
        //    }

     
        public ActionResult Create()
        {

            var department = db.Departments.ToList();
            var viewModel = new StudentDepartmentViewModel
            {
                Department = department
            };

            return View(viewModel);
        }

        [HttpPost]
        public ActionResult Create(Student std)
        {
            if(!ModelState.IsValid)
            {
                var viewModel = new StudentDepartmentViewModel
                {
                    StudentID = std.StudentID,
                    StudentFirstName = std.StudentFirstName,
                    StudentLastName = std.StudentLastName,
                    StudentAge = std.StudentAge,
                    StudentEmail = std.StudentEmail,
                    StudentGender = std.StudentGender,
                    DepartmentID = std.DepartmentID.GetValueOrDefault(),
                    Department = db.Departments.ToList()
                };
                return View("Create",viewModel);
            }

            db.Students.Add(std);
            db.SaveChanges();
            var changedDB = db.Students.ToList();
            return RedirectToAction("Index");
        }
    }
}