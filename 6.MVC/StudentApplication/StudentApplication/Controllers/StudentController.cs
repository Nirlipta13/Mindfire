using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using StudentApplication.Models;
using System.Data.Entity;

namespace StudentApplication.Controllers
{
    public class StudentController : Controller
    {
        private StudentDbContext db;
        public StudentController()
        {
            db = new StudentDbContext();
        }

        public ActionResult HomePage()
        {
            return View();
        }


        public ActionResult Index()
        {
            var users = db.Students.ToList();
            return View(users);
        }


        public ActionResult Details(int ID)
        {
            var std = db.Students.Where(s => s.StudentID == ID).FirstOrDefault();
            return View(std);
        }

        public ActionResult Edit(int ID)
        {
            var std = db.Students.Where(s => s.StudentID == ID).FirstOrDefault();
         
            return View(std);
        }

        [HttpPost]
        public ActionResult Edit(Student student)
        {

            //student - id == student.Id

            var studentFromDb = db.Students.FirstOrDefault(x => x.StudentID == student.StudentID);

            if (studentFromDb == null)
            {
                return View();
            }
            //Student exists in the datdabase. 
            studentFromDb.StudentFirstName = student.StudentFirstName;
            studentFromDb.StudentLastName = student.StudentLastName;
            studentFromDb.StudentEmail = student.StudentEmail;
            studentFromDb.StudentAge = student.StudentAge;
            studentFromDb.StudentGender = student.StudentGender;

            db.Entry(studentFromDb).State = EntityState.Modified;
            db.SaveChanges();

            return RedirectToAction("Index");
        }

        
        public ActionResult Delete(int ID)
        {
            var std = db.Students.Where(s => s.StudentID == ID).FirstOrDefault();
            db.Students.Remove(std);
            db.SaveChanges();
            var changedDB = db.Students.ToList();
            return RedirectToAction("Index", changedDB);
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(Student std)
        {
            db.Students.Add(std);
            db.SaveChanges();
            var changedDB = db.Students.ToList();
            return RedirectToAction("Index");
        }
    }
}